import api from "@/config/http-client-gateway";
import { showErrorToast } from '@/kernel/alerts';

export const getUsersService = async (params) => {
    try {
        const { data } = await api.doGet('/users-frontera', params);
        return data;
    } catch (error) {
        console.log("Error ", error);
        showErrorToast("Error al obtener los usuarios");
        return error;
    }
}

export const registerUserService = async (formData) => {
    try {
        const { data } = await api.doPost('/register-user-cobre-frontera', formData);
        return data;
    } catch (error) {
        showErrorToast("Error al registrar el usuario");
        if (error.response.status === 400) {
            showErrorToast("El usuario ya existe");
        }
        return error;
    }
}

export const updateUserService = async (formData) => {
    try {
        const { data } = await api.doPut('/update-user-frontera', formData);
        return data;
    } catch (error) {
        console.log("Error ", error);
        showErrorToast("Error al actualizar el usuario");
        return error;
    }
}

export const deleteUserService = async (formData) => {
    try {
        const { data } = await api.doDelete('/delete-user-frontera', formData);
        return data;
    } catch (error) {
        console.log("Error ", error);
        showErrorToast("Error al eliminar el usuario");
        return error;
    }
}