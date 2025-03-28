<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="company-name">{{ companyName }}</div>
      <div class="email">{{ email }}</div>
      <div class="copyright">{{ copyright }}</div>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "FooterComponent",
  setup() {
    // Definimos los datos del footer usando ref
    const companyName = ref("Cobre del Mayo, S.A. De C.V.");
    const email = ref("suppliers@cobredelmayo.com");
    const copyright = ref("© Cobre del Mayo 2025.");

    return {
      companyName,
      email,
      copyright,
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: white;
  color: black;
  padding: 20px 0;
  text-align: center;
  margin-top: auto; 
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.company-name {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.email {
  font-size: 16px;
  margin-bottom: 10px;
}

.copyright {
  font-size: 14px;
  color: #ccc;
}
</style>