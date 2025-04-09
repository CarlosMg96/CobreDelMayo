<template>
  <div v-if="isVisible" class="modal-overlay">
    <div class="modal-content">
      <h3 class="title">Editar Usuario</h3>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="fullname">Nombre Completo</label>
          <input type="text" id="fullname" v-model="fullname" required />
        </div>

        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input type="email" id="email" v-model="email" required />
        </div>

        <div class="form-group">
          <label for="password">Contraseña</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
          />
        </div>

        <div class="form-group">
          <label for="area">Área</label>
          <select id="area" v-model="area" required>
            <option value="FRONTERA">Frontera Copper</option>
            <option value="COBRE">Cobre del Mayo</option>
          </select>
        </div>

        <div class="form-group">
          <label for="role">Rol</label>
          <select id="role" v-model="role" required>
            <option value="SUPERADMIN">SUPERADMINISTRADOR</option>
            <option value="ADMIN">ADMINISTRADOR</option>
          </select>
        </div>

        <div style="display: flex; justify-content: flex-end">
          <button type="submit">Actualizar</button>
          <button type="button" @click="closeModal">Cerrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { showSuccessToast } from "@/kernel/alerts";
import { updateUserService } from "../services/user-service";

export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      fullname: this.user ? this.user.fullname : "",
      email: this.user ? this.user.email : "",
      role: this.user ? this.user.role : "ADMINISTRADOR", // Valor por defecto si no tiene rol
      password: this.user ? this.user.password : "",
      area: this.user ? this.user.area : "FRONTERA", // Valor por defecto si no tiene área
    };
  },
  watch: {
    user(newUser) {
      if (newUser) {
        this.fullname = newUser.fullname;
        this.email = newUser.email;
        this.role = newUser.role;
        this.password = newUser.password;
        this.area = newUser.area;
      }
    },
  },
  methods: {
    closeModal() {
      this.$emit("update:visible", false); // Cierra el modal
    },
    async submitForm() {
      const updatedUser = {
        id: this.user.id,
        fullname: this.fullname,
        email: this.email,
        role: this.role,
        password: this.password,
        area: this.area,
      };

      try {
        const result = await updateUserService(updatedUser);
        if (result.status === 200) {
          this.$emit("update:visible", false); // Cerrar el modal después de actualizar
          this.$emit("update:users"); // Recargar usuarios
          showSuccessToast("Usuario actualizado correctamente");
        }
      } catch (error) {
        console.error("Error al actualizar el usuario:", error);
      }
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 100%;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 15px;
  margin-top: 10px;
  cursor: pointer;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 16px;
}

button[type="submit"]:hover {
  background-color: gray-primary);
}

button[type="button"] {
  margin-left: 16px;
  background-color: gray-secondary);
}

.title {
  margin-top: 0;
  color: orange;
}
</style>
