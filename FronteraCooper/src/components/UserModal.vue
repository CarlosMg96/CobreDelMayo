<template>
    <div v-if="modelValue" class="dialog-overlay">
        <div class="dialog-content" @click.stop="close">
            <div class="dialog-header">
                <h2>Información del Usuario</h2>
            </div>

            <div class="user-info-container">
                <img src="../assets/user-icon.webp" class="avatar" alt="Usuario">
                <p class="user-name"><strong>Nombre:</strong> {{ resolvedName }}</p>
                <p class="user-email"><strong>Correo:</strong> {{ resolvedEmail }}</p>
            </div>

            <div class="button-container">
                <button class="button-close" @click="close">Cerrar</button>
            </div>
        </div>
    </div>
</template>

<script>
import { getUserInfoByToken } from "@/kernel/utils";

export default {
props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
    data() {
        return {
            resolvedName: "",
            resolvedEmail: ""
        };
    },
    async mounted() {
        await this.fetchUserInfo();
    },
    methods: {
        close() {
            this.$emit('update:modelValue', false);
        },

        async fetchUserInfo() {
            try {
                const userInfo = await getUserInfoByToken();
                this.resolvedName = userInfo.fullname;
                this.resolvedEmail = userInfo.email;
            } catch (error) {
                console.error("Error fetching user info:", error);
            }
        }
    }
};
</script>
<style scoped>
/* Estilos del Overlay para el Dialog */
.dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

/* Contenedor del contenido del Dialog */
.dialog-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Encabezado del Dialog */
.dialog-header {
    text-align: center;
    margin-bottom: 15px;
}

/* Contenedor de la información del usuario */
.user-info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
}

/* Estilos para la imagen de avatar */
.avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 15px;
}

/* Nombre del usuario */
.user-name {
    font-size: 18px;
    margin-bottom: 10px;
}

/* Correo del usuario */
.user-email {
    font-size: 16px;
    color: #666;
}

/* Contenedor de los botones */
.button-container {
    display: flex;
    justify-content: flex-end;
    padding: 10px 20px 0 20px;
}

/* Estilos para el botón de cerrar */
.button-close {
    background-color: transparent;
    border: none;
    color: #007bff;
    cursor: pointer;
    font-size: 16px;
    padding: 8px 16px;
    transition: background-color 0.3s;
}

.button-close:hover {
    background-color: #f1f1f1;
    border-radius: 5px;
}
</style>
