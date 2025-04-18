import { jwtDecode } from "jwt-decode"
import { useEncryption } from "@/config/crypt-config";
const { encrypt, decrypt } = useEncryption()

const BASEURL = process.env.VUE_APP_BASE_URL + '/public';
const BASEURLAPI = process.env.VUE_APP_BASE_URL;
let language = localStorage.getItem('language') || "EN";
let languageForUpdateContent = localStorage.getItem('languageForUpdateContent') || "EN";

const getLanguage = () => {
    return language;
}

const setLanguage = (lang) => {
    language = lang;
    localStorage.setItem('language', lang);
}

const getLanguageForUpdateContent = () => {
    return languageForUpdateContent;
}
const setLanguageForUpdateContent = (lang) => {
    languageForUpdateContent = lang;
    localStorage.setItem('languageForUpdateContent', lang);
}

const setToken = async (token) => {
    try {
        if (token) {
            const tokenEncrypted = encrypt(token);
            localStorage.setItem("token", tokenEncrypted);
        }
    } catch (error) {
        removeToken()
    }
}

const getRoleByToken = async () => {
    try {
        const tokenDecrypted = decrypt(getToken() || '');
        const decode = jwtDecode(tokenDecrypted || '');
        return decode.role
    } catch (error) {
        removeToken()
    }
}

const getAreaByToken = async () => {
    try {
        const tokenDecrypted = decrypt(getToken() || '');
        const decode = jwtDecode(tokenDecrypted || '');
        return decode.area
    } catch (error) {
        removeToken()
    }
}

export const getUserIdByToken = async () => {

    try {
        const decrypted = decrypt(getToken() || '');
        const { sub } = jwtDecode(decrypted || '')
        const { id } = await JSON.parse(sub || '')
        return id
    } catch (error) {
        removeToken()
    }

}

const getToken = () => {
    return localStorage.getItem("token")
}

const getTokenDecrypted = async () => {
    try {
        return decrypt(getToken() || '')
    } catch (error) {
        removeToken()
    }
}

const removeToken = () => {
    localStorage.removeItem("token")
}

const getUserInfoByToken = async () => {
    try {
        return jwtDecode(decrypt(getToken() || '') || '')
    } catch (error) {
        removeToken()
    }
}

const limitDescription = (description) => {
    const words = description.split(' ');
    if (words.length === 10 && words.length < 10) {
        return description;
    } else {
        const limitedWords = words.slice(0, 10);
        return limitedWords.join(' ') + '...';
    }
}

const getErrorMessages = (errorCode) => {
    const errorMessages = {
        'bad Request': 'Solicitud incorrecta',
        'email already exists': 'El correo electrónico ya existe',
        'curp already exists': 'La CURP ya existe',
        'phone already exists': 'El teléfono ya existe',
        'invalid credentials': 'Credenciales inválidas',
        'invalid fields': 'Campos inválidos',
        'email not verified': 'Correo electrónico no verificado',
        'user disabled': 'Usuario deshabilitado',
        'invalid email': 'Correo electrónico inválido',
        'user not found': 'Usuario no encontrado',
        'customer not found': 'Cliente no encontrado',
        'weak password': 'Contraseña débil',
        'forbidden': 'Prohibido',
        'Error network': 'No se ha podido establecer conexión con el servidor',
        'too many requests': 'Demasiadas solicitudes',
        'client not connected': 'Cliente no conectado',
        'network error': 'Error de red',
        'default': 'Error interno del servidor',
        "lastname must be at least 3 characters": "El apellido debe tener al menos 3 caracteres",
    };
    return errorMessages[errorCode.toLowerCase()] || 'Ocurrió un error desconocido';
};

function convertirImagenABase64(archivo) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onloadend = () => {
            if (reader.result) {
                resolve(reader.result); // Resultado en base64
            }
        };

        reader.onerror = (error) => {
            reject("Error al leer el archivo: " + error);
        };

        reader.readAsDataURL(archivo); // Lee el archivo y lo convierte a base64
    });
}

// Función privada para extraer el base64, sin prefijo
function extraerBase64(dataUrl) {
    const base64Prefix = 'base64,';
    if (dataUrl.includes(base64Prefix)) {
        return dataUrl.split(base64Prefix)[1]; // Retorna solo la parte base64
    }
    return null; // Si no tiene el prefijo esperado, devuelve null
}




export {
    setToken,
    getToken,
    getTokenDecrypted,
    getRoleByToken,
    getAreaByToken,
    getUserInfoByToken,
    removeToken,
    limitDescription,
    getErrorMessages,
    convertirImagenABase64,
    extraerBase64,
    BASEURL,
    BASEURLAPI,
    getLanguage,
    setLanguage,
    getLanguageForUpdateContent,
    setLanguageForUpdateContent,
}