<template>
  <nav class="navbar">
    <div class="container">
      <ul class="navbar-links">
        <li class="item left-items" @click="toggleSidebar">
          <span class="sidebar-icon"><i class="fa-solid fa-bars"></i></span>
        </li>
      </ul>
      <ul class="navbar-links">
        <li class="item right-items" @click="logOut()">
          <span class="sidebar-icon"><i class="fa-solid fa-right-from-bracket"></i></span>
          <span class="sidebar-text">Cerrar sesión</span>
        </li>
      </ul>
    </div>
  </nav>
</template>

  
  <script>
  export default {
    name: "PrivateNavbar",
    methods: {
      logOut() {
        localStorage.removeItem('token');
        this.$router.push({ name: 'admin' });
      },
      toggleSidebar() {
      this.$emit("toggle-sidebar");
    }
    }
  };
  </script>
  
  <style scoped>
 .navbar {
  background-color: rgba(255, 255, 255, 0.4); /* Blanco con 40% de transparencia */
  padding: 10px 20px;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra en la parte inferior */
  z-index: 10;
}

.container {
  display: flex;
  justify-content: space-between; /* Distribuir los elementos entre izquierda y derecha */
  align-items: center;
  width: 100%;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
}

.navbar-links .left-items {
  display: flex;
  justify-content: flex-start; /* Alinea los íconos de la izquierda */
  flex-grow: 1; /* Asegura que ocupe el máximo de espacio posible */
}

.navbar-links .right-items {
  display: flex;
  justify-content: flex-end; /* Alinea los íconos de la derecha */
}

.navbar-links li {
  margin: 0;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  border-radius: 5px; /* Bordes redondeados */
  cursor: pointer; /* Cambia el cursor a tipo "pointer" al pasar el ratón */
  transition: all 0.3s ease; /* Transición suave */
}

.navbar-links li:hover {
  background-color: white; /* Color de fondo al pasar el ratón */
  color: gray; /* Cambia el color del texto */
}

.navbar-links .sidebar-icon {
  margin-right: 8px; /* Espaciado entre el ícono y el texto */
}

.navbar-links a {
  text-decoration: none;
  color: inherit; 
  font-size: 16px;
  font-weight: 500;
}

.navbar-links a:hover {
  color: #fff; 
}

  </style>
  