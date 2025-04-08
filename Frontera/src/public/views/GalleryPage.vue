<template>
  <div class="operations-page">
    <section class="about-hero">
      <div class="hero-overlay">
        <div v-if="languaje == 'EN'">
          <h1 style="color: white !important">Gallery</h1>
        </div>
        <div v-else>
          <h1 style="color: white !important">Galería</h1>
        </div>
      </div>
    </section>

    <section class="gallery-section">
      <!-- Sección Lixiviación -->
      <div class="gallery-container">
        <div v-if="languaje == 'EN'">
          <h2 class="gallery-title">Leaching and SX/EW</h2>
        </div>
        <div v-else>
          <h2 class="gallery-title">Lixiviación y SX/EW</h2>
        </div>
        
        <div class="gallery-grid">
          <div 
            v-for="(image, index) in imagesHidro" 
            :key="index" 
            class="gallery-item"
            @click="openLightbox(image)"
          >
            <v-img
              :src="`${BASEURL}/img/gallery/${image}`"
              class="gallery-image"
              aspect-ratio="1"
              cover
            ></v-img>
          </div>
        </div>
      </div>

      <!-- Sección Mina -->
      <div class="gallery-container">
        <div v-if="languaje == 'EN'">
          <h2 class="gallery-title">Mine</h2>
        </div>
        <div v-else>
          <h2 class="gallery-title">Mina</h2>
        </div>
        
        <div class="gallery-grid">
          <div 
            v-for="(image, index) in imagesMina" 
            :key="index" 
            class="gallery-item"
            @click="openLightbox(image)"
          >
            <v-img
              :src="`${BASEURL}/img/gallery/${image}`"
              class="gallery-image"
              aspect-ratio="1"
              cover
            ></v-img>
          </div>
        </div>
      </div>

      <!-- Sección Trituración -->
      <div class="gallery-container">
        <div v-if="languaje == 'EN'">
          <h2 class="gallery-title">Crushing System</h2>
        </div>
        <div v-else>
          <h2 class="gallery-title">Sistema de trituración</h2>
        </div>
        
        <div class="gallery-grid">
          <div 
            v-for="(image, index) in imagesTrituracion" 
            :key="index" 
            class="gallery-item"
            @click="openLightbox(image)"
          >
            <v-img
              :src="`${BASEURL}/img/gallery/${image}`"
              class="gallery-image"
              aspect-ratio="1"
              cover
            ></v-img>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div v-if="showLightbox" class="lightbox" @click="closeLightbox">
      <div class="lightbox-content">
        <img :src="`${BASEURL}/img/gallery/${currentImage}`" alt="Gallery image">
        <button class="close-btn" @click.stop="closeLightbox">×</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getLanguage, BASEURL } from "@/kernel/utils";

const languaje = ref(getLanguage());
const imagesHidro = ref([
  "hidrometalurgia-01.jpg",
  "hidrometalurgia-02.jpg",
  "hidrometalurgia-03.jpg",
  "hidrometalurgia-04.jpg",
  "hidrometalurgia-05.jpg",
  "hidrometalurgia-06.jpg",
]);

const imagesMina = ref([
  "mina-01.jpg",
  "mina-03.jpg",
  "mina-04.jpg",
  "mina-05.jpg",
  "mina-06.jpg",
]);

const imagesTrituracion = ref([
  "trituracion-01.jpg",
  "trituracion-02.jpg",
  "trituracion-03.jpg",
  "trituracion-04.jpg",
]);

// Lightbox functionality
const showLightbox = ref(false);
const currentImage = ref('');

const openLightbox = (image) => {
  currentImage.value = image;
  showLightbox.value = true;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  showLightbox.value = false;
  document.body.style.overflow = 'auto';
};
</script>

<style scoped>
.operations-page {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
}

/* Hero Section */
.about-hero {
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("http://localhost:3000/api/public/img/bg-about.jpg") center/cover
      no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white !important;
  position: relative;
}

.hero-overlay {
  z-index: 1;
}

.about-hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

/* Gallery Section */
.gallery-section {
  padding: 60px 0;
  background-color: #f8f9fa;
}

.gallery-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 60px; /* Añadido padding-bottom para separación */
}

.gallery-container:last-child {
  padding-bottom: 0; /* Elimina el padding extra del último contenedor */
}

.gallery-title {
  text-align: center;
  margin-bottom: 40px;
  color: #2c3e50;
  font-size: 2rem;
  position: relative;
  padding-bottom: 15px;
}

.gallery-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background-color: orange;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.gallery-item {
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.gallery-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.gallery-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.05);
}

/* Lightbox Styles */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 80vh;
  display: block;
  margin: 0 auto;
  border-radius: 8px;
}

.close-btn {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 0 10px;
}

.close-btn:hover {
  color: orange;
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .gallery-title {
    font-size: 1.5rem;
  }
  
  .about-hero h1 {
    font-size: 2.5rem;
  }
  
  .gallery-container {
    padding-bottom: 40px; /* Menor separación en móviles */
  }
}
</style>