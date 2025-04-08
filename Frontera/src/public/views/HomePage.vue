<template>
  <div class="about-container">
    <!-- Video de fondo -->
    <div class="video-container">
      <div class="video-wrapper">
        <iframe
          src="https://player.vimeo.com/video/685921900?background=1&amp;autoplay=1&amp;loop=1&amp;byline=0&amp;title=0"
          frameborder="0"
          webkitallowfullscreen=""
          class="video"
          loading="lazy"
        ></iframe>
      </div>
    </div>

    <!-- Sección About Us -->
    <div class="about-section">
      <div class="image-gallery">
        <div class="image-left">
          <img
            :src="`${BASEURL}/img/about-01.jpg`"
            alt="about-01"
            loading="lazy"
          />
        </div>
        <div class="image-right">
          <img
            :src="`${BASEURL}/img/about-02.jpg`"
            alt="about-02"
            loading="lazy"
            width="100%"
          />
        </div>
      </div>
      <div class="about-content">
        <div v-if="languaje === 'EN'">
          <h2>About Us</h2>
          <div class="divider"></div>
          <p>
            <strong>Frontera Copper Corporation</strong> is an operating mine
            located in northwestern Mexico.
          </p>
          <button class="see-more" @click="seeMoreEsg()">SEE MORE</button>
        </div>
        <div v-else>
          <h2>Acerca de nosotros</h2>
          <div class="divider"></div>
          <p>
            <strong>Frontera Copper Corporation</strong> es una mina en
            operación ubicada en el noroeste de México.
          </p>
          <button class="see-more" @click="seeMoreEsg">VER MÁS</button>
        </div>
      </div>
    </div>

    <!-- Sección ESG -->
    <div class="esg-section">
      <div style="margin-left: 24px; margin-bottom: 24px">
        <h2>ESG</h2>
        <div class="divider"></div>
      </div>

      <div v-if="languaje === 'EN'">
        <div class="esg-container">
          <!-- Tarjeta Comunidades -->
          <div class="esg-card">
            <div class="esg-image-placeholder" style="background-image: url('http://localhost:3000/api/public/img/esg-communities.jpg'); background-size:cover;">
              <img
                :src="`${BASEURL}/img/esg-communities.jpg`"
                alt="commununitis"
                width="400px"
                height="200px"
                style="opacity:0"
              />
            </div>
            <div class="esg-content">
              <h3>ESG: Communities</h3>
              <p>
                We place great importance on our relationship with our
                surrounding communities.
              </p>
              <button class="esg-see-more" @click="seeMoreEsg">SEE MORE</button>
            </div>
          </div>

          <!-- Tarjeta Salud y Seguridad -->
          <div class="esg-card">
            <div class="esg-image-placeholder" style="background-image: url('http://localhost:3000/api/public/img/esg-health-and-safety.jpg'); background-size:cover;">
              <img
                :src="`${BASEURL}/img/esg-health-and-safety.jpg`"
                alt="health-and-safety"
                width="400px"
                height="200px"
                style="opacity:0"
              />
            </div>
            <div class="esg-content">
              <h3>ESG: Health and Safety</h3>
              <p>
                Extensive training programs combined with rigorous analysis of
                all anormal operations and prompt corrective action.
              </p>
              <button class="esg-see-more" @click="seeMoreEsg">SEE MORE</button>
            </div>
          </div>

          <!-- Tarjeta Agua y Medio Ambiente -->
          <div class="esg-card">
            <div class="esg-image-placeholder">
              <img
                :src="`${BASEURL}/img/esg-water-environment.jpg`"
                alt="water-environment"
                width="400px"
                height="200px"
              />
            </div>
            <div class="esg-content">
              <h3>ESG: Water & Environment</h3>
              <p>
                We comply with official regulations to the highest standards and
                progressively improving our contribution to the environment.
              </p>
              <button class="esg-see-more" @click="seeMoreEsg">SEE MORE</button>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="esg-container">
          <!-- Tarjeta Comunidades -->
          <div class="esg-card">
            <div class="esg-image-placeholder">
              <img
                :src="`${BASEURL}/img/esg-communities.jpg`"
                alt="comunidades"
                width="400px"
                height="200px"
              />
            </div>
            <div class="esg-content">
              <h3>ESG: Comunidades</h3>
              <p>
                Damos gran importancia a nuestra relación con las comunidades
                que nos rodean.
              </p>
              <button class="esg-see-more" @click="seeMoreEsg">VER MÁS</button>
            </div>
          </div>

          <!-- Tarjeta Salud y Seguridad -->
          <div class="esg-card">
            <div class="esg-image-placeholder">
              <img
                :src="`${BASEURL}/img/esg-health-and-safety.jpg`"
                alt="segudidad-y-salud"
                width="400px"
                height="200px"
              />
            </div>
            <div class="esg-content">
              <h3>ESG: Salud y Seguridad</h3>
              <p>
                Amplios programas de entrenamiento combinados con un análisis
                riguroso de todas las operaciones anormales y una pronta acción
                correctiva.
              </p>
              <button class="esg-see-more" @click="seeMoreEsg">VER MÁS</button>
            </div>
          </div>

          <!-- Tarjeta Agua y Medio Ambiente -->
          <div class="esg-card">
            <div class="esg-image-placeholder">
              <img
                :src="`${BASEURL}/img/esg-water-environment.jpg`"
                alt="agua-y-medio-ambiente"
                width="400px"
                height="200px"
              />
            </div>
            <div class="esg-content">
              <h3>ESG: Agua y Medio Ambiente</h3>
              <p>
                Cumplimos los normativos oficiales con los más altos estándares
                y mejorando programáticamente nuestra contribución al medio
                ambiente.
              </p>
              <button class="esg-see-more" @click="seeMoreEsg">VER MÁS</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sección Galería -->
    <div class="gallery-section">
      <div v-if="languaje === 'EN'">
        <h2 class="text-start">Galery</h2>
      </div>
      <div v-else>
        <h2 class="text-start">Galería</h2>
      </div>
      <div class="divider"></div>
      <div class="carousel-container">
        <div class="carousel-track">
          <!-- Imágenes del carrusel (puedes añadir tantas como necesites) -->
          <div class="carousel-slide">
            <div class="gallery-image-placeholder">
              <img
                :src="`${BASEURL}/img/hidrometalurgia-01.jpg`"
                alt="hidrometalurgia"
              />
            </div>
          </div>
          <div class="carousel-slide">
            <div class="gallery-image-placeholder">
              <img :src="`${BASEURL}/img/mina-01.jpg`" alt="mina-01" />
            </div>
          </div>
          <div class="carousel-slide">
            <div class="gallery-image-placeholder">
              <img :src="`${BASEURL}/img/mina-02.jpg`" alt="mina-02" />
            </div>
          </div>
          <div class="carousel-slide">
            <div class="gallery-image-placeholder">
              <img
                :src="`${BASEURL}/img/trituracion-01.jpg`"
                alt="trituracion"
              />
            </div>
          </div>
        </div>
        <button class="carousel-btn prev" @click="prevSlide">&#10094;</button>
        <button class="carousel-btn next" @click="nextSlide">&#10095;</button>
      </div>
      <div v-if="languaje === 'EN'">
        <button class="see-more" @click="seeMoreGallery">SEE MORE</button>
      </div>
      <div v-else>
        <button class="see-more" @click="seeMoreGallery">VER MÁS</button>
      </div>
    </div>
  </div>
</template>

<script>
import { BASEURL, getLanguage } from "@/kernel/utils";
import router from "@/router";
import { ref } from "vue";

export default {
  name: "HomePage",
  setup() {
    const seeMore = async () => {
      await router.push("/about");
    };

    const currentSlide = ref(0);
    const totalSlides = ref(4); 

    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % totalSlides.value;
      updateCarousel();
    };

    const prevSlide = () => {
      currentSlide.value =
        (currentSlide.value - 1 + totalSlides.value) % totalSlides.value;
      updateCarousel();
    };

    const updateCarousel = () => {
      const track = document.querySelector(".carousel-track");
      const slideWidth = document.querySelector(".carousel-slide").offsetWidth;
      track.style.transform = `translateX(-${
        currentSlide.value * slideWidth
      }px)`;
    };

    const seeMoreEsg = async () => {
      await router.push("/esg");
    };

    const seeMoreGallery = async () => {
      await router.push("/gallery");
    };

    return {
      BASEURL,
      languaje: getLanguage(),
      seeMore,
      nextSlide,
      prevSlide,
      seeMoreEsg,
      seeMoreGallery,
    };
  },
};
</script>

<style scoped>
.about-container {
  width: 100%;
}

.video-container {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* Esto asegura una proporción 16:9 */
  height: 0;
  overflow: hidden;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.about-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 4rem 2rem;
  background: #f5f5f5;
}

.image-gallery {
  display: flex;
  align-items: center;
  position: relative;
}

.image-left {
  width: 250px;
  height: 350px;
  background: gray; /* Aquí va tu imagen */
}

.image-right {
  width: 200px;
  height: 150px;
  background: gray; /* Aquí va tu imagen */
  position: absolute;
  bottom: -20px;
  left: 100px;
  border: 5px solid white;
}

.about-content {
  max-width: 400px;
  margin-left: 16px;
}

h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-left: 16px;
}

.divider {
  width: 50px;
  height: 4px;
  background: #d9534f;
  margin: 10px 0;
  margin-left: 16px !important;
}

p {
  font-size: 1.1rem;
  color: #333;
  margin-left: 16px;
}

.see-more {
  background: #d9534f;
  color: white;
  padding: 10px 20px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;
  margin-left: 16px;
}

.see-more:hover {
  background: #c9302c;
}

/* Estilos para la sección ESG */
.esg-section {
  padding: 4rem 2rem;
  background: white;
}

.esg-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.esg-card {
  flex: 1;
  min-width: 300px;
  max-width: 350px;
  background: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.esg-card:hover {
  transform: translateY(-5px);
}

.esg-image-placeholder {
  height: 200px;
  background: #e0e0e0;
  /* Aquí puedes poner tu imagen de fondo */
}

.esg-content {
  padding: 1.5rem;
}

.esg-content h3 {
  color: #333;
  margin-bottom: 0.5rem;
}

.esg-content p {
  color: #666;
  margin-bottom: 1.5rem;
  margin-left: 0;
}

.esg-see-more {
  background: #d9534f;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
}

.esg-see-more:hover {
  background: #c9302c;
}

/* Estilos para la sección Galería */
.gallery-section {
  padding: 4rem 2rem;
  background: #f5f5f5;
  text-align: center;
}

.carousel-container {
  position: relative;
  max-width: 800px;
  margin: 2rem auto;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-slide {
  min-width: 100%;
}

.gallery-image-placeholder {
  height: 400px;
  background: #e0e0e0;
  margin: 0 10px;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-btn:hover {
  background: rgba(0, 0, 0, 0.8);
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}
</style>
