<template>
  <nav class="navbar">
    <div class="logo">
      <span>COBRE</span>
      <span>DELMAYO</span>
    </div>
    <ul class="nav-links">
      <li>
        <router-link to="/home" active-class="active">HOME</router-link>
      </li>
      <li>
        <router-link to="/about" active-class="active">ABOUT</router-link>
      </li>
      <li>
        <router-link to="/contact" active-class="active">CONTACT</router-link>
      </li>
      <li>
        <router-link to="/sustainability" active-class="active">SUSTAINABILITY</router-link>
      </li>
      <li>
        <router-link to="/investors" active-class="active">INVESTORS</router-link>
      </li>
    </ul>
  </nav>

  <!-- Contenido de la página -->
  <div class="content">
    <!-- Aquí va el contenido de tu página -->
  </div>
</template>

<script>
export default {
  name: "NavbarPublicEs",
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.navbar {
  position: fixed; /* Fija el navbar en la parte superior */
  top: 0; /* Lo coloca en la parte superior */
  left: 0;
  width: 100%; /* Asegura que ocupe todo el ancho */
  z-index: 1000; /* Asegura que esté por encima de otros elementos */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7); /* Fondo semitransparente */
  backdrop-filter: blur(10px); /* Aplica el desenfoque al fondo */
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.logo {
  color: rgb(6, 0, 0);
  font-size: 24px;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-size: 18px;
  transition: color 0.3s;
}

.nav-links a.active {
  color: orange;
}

.nav-links a:hover {
  color: orange;
}

/* Agregar margen superior al contenido */
body {
  padding-top: 60px; /* Ajusta el contenido para que no quede oculto detrás del navbar fijo */
}

.content {
  padding: 20px; /* Espacio dentro del contenido */
}
</style>
