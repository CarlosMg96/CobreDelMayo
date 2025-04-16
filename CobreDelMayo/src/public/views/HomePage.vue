<template>
  <div class="home-page">
    <section class="video-background">
      <div class="bg-black"></div>
      <div class="vimeo-wrapper">
        <iframe
          src="https://player.vimeo.com/video/685921900?background=1&autoplay=1&loop=1&byline=0&title=0"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </section>

    <div class="secondary-content">
      <section class="light-section padding-large">
        <div class="container">
          <div class="text-center">
            <p class="large-text">
              For more information, visit our parent company’s website,<br />
              Frontera Copper Corporation
            </p>
            <a
              href="https://fronteracopper.com/"
              target="_blank"
              class="btn primary-btn"
              >Frontera</a
            >
          </div>
        </div>
      </section>

      <section class="bg-iframe padding__small">
        <div>
          <section class="embed-responsive embed-responsive-16by9">
            <iframe
              class="embed-responsive-item"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Eso5ZZPPATw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen=""
            >
            </iframe>
          </section>
        </div>
      </section>

      <section class="gallery-section">
        <div class="gallery-wrapper padding-large">
          <div class="container">
            <div class="custom-gallery-grid">
              <!-- Imagen 1 -->
              <div
                class="image image-1"
                @click="
                  openModal(
                    `${BASEURL}/misc/img/site/gallery/img-gallery-01.jpg`
                  )
                "
              >
                <img
                  :src="`${BASEURL}/misc/img/site/gallery/img-gallery-01.jpg`"
                  alt="Image 1"
                />
              </div>
              <!-- Imagen 2 -->
              <div
                class="image image-2"
                @click="
                  openModal(
                    `${BASEURL}/misc/img/site/gallery/img-gallery-02.jpg`
                  )
                "
              >
                <img
                  :src="`${BASEURL}/misc/img/site/gallery/img-gallery-02.jpg`"
                  alt="Image 2"
                />
              </div>
              <!-- Imagen 3 -->
              <div
                class="image image-3"
                @click="
                  openModal(
                    `${BASEURL}/misc/img/site/gallery/img-gallery-03.jpg`
                  )
                "
              >
                <img
                  :src="`${BASEURL}/misc/img/site/gallery/img-gallery-03.jpg`"
                  alt="Image 3"
                />
              </div>
              <!-- Imagen 4 -->
              <div
                class="image image-4"
                @click="
                  openModal(
                    `${BASEURL}/misc/img/site/gallery/img-gallery-04.jpg`
                  )
                "
              >
                <img
                  :src="`${BASEURL}/misc/img/site/gallery/img-gallery-04.jpg`"
                  alt="Image 4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Modal Mejorado -->
      <div
        v-if="modalVisible"
        class="modal"
        @click="closeModal"
        @keydown.esc="closeModal"
        tabindex="0"
      >
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="closeModal">✕</button>
          <img :src="selectedImage" alt="Imagen grande" />

          <!-- Botones navegación -->
          <button class="nav-button prev" @click="prevImage">←</button>
          <button class="nav-button next" @click="nextImage">→</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { BASEURL } from "@/kernel/utils";

export default {
  setup() {
    const images = [
      `${BASEURL}/misc/img/site/gallery/img-gallery-01.jpg`,
      `${BASEURL}/misc/img/site/gallery/img-gallery-02.jpg`,
      `${BASEURL}/misc/img/site/gallery/img-gallery-03.jpg`,
      `${BASEURL}/misc/img/site/gallery/img-gallery-04.jpg`
    ];

    const selectedImage = ref(null);
    const modalVisible = ref(false);
    const currentIndex = ref(0);

    const openModal = (src) => {
      currentIndex.value = images.indexOf(src);
      selectedImage.value = src;
      modalVisible.value = true;

      // Para activar eventos del teclado (como ESC)
      setTimeout(() => {
        document.querySelector('.modal')?.focus();
      }, 50);
    };

    const closeModal = () => {
      modalVisible.value = false;
    };

    const nextImage = () => {
      currentIndex.value = (currentIndex.value + 1) % images.length;
      selectedImage.value = images[currentIndex.value];
    };

    const prevImage = () => {
      currentIndex.value =
        (currentIndex.value - 1 + images.length) % images.length;
      selectedImage.value = images[currentIndex.value];
    };

    return {
      BASEURL,
      selectedImage,
      modalVisible,
      openModal,
      closeModal,
      nextImage,
      prevImage,
    };
  },
  name: "HomePage",
};
</script>


<style scoped>
.bg-black {
  position: relative;
  width: 100%;
  height: 140px;
  background-color: #000;
  z-index: -1 !important;
}

.video-background {
  position: relative;
  height: 80vh;
  overflow: hidden;
  background-color: #d32a28;
  z-index: -1 !important;
}

.vimeo-wrapper {
  position: relative;
  z-index: 6;
  margin-top: -120px;
  height: 80vh;
  overflow: hidden;
}

.video-background iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
}

.secondary-content {
  background-color: #e4e5e5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.bg-iframe {
  background-color: black;
  padding: 64px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.light-section,
.iframe-section,
.gallery-wrapper {
  background-color: #e4e5e5;
  padding: 24px;
}

.gallery-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f05a29;
}

.gallery-section {
  width: 100%;
  background-color: #f05a29;
  padding: 96px;
}

.text-center {
  text-align: center;
}

.large-text {
  font-size: 1.5rem;
  margin-bottom: 16px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  color: #fff;
  background-color: #df510f;
  transition: background-color 0.3s;
}

.primary-btn:hover {
  background-color: #893e01;
}

.responsive-embed {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
}

.responsive-embed iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.custom-gallery-grid {
  display: grid;
  grid-template-areas:
    "img1 img2 img3"
    "img4 img4 img4";
  grid-template-columns: repeat(3, auto);
  gap: 8px; /* Compacto en pantallas grandes */
  justify-content: center;
  align-items: start;
  max-width: 1000px;
  margin: 0 auto;
}

/* Imágenes cuadradas (1, 2 y 3) */
.image {
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 12px;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.image img:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

/* Imagen 4: tamaño original */
.image-4 {
  grid-area: img4;
  grid-column: span 3;
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-4 img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 12px;
}

/* Responsive */
@media (max-width: 768px) {
  .custom-gallery-grid {
    grid-template-areas:
      "img1"
      "img2"
      "img3"
      "img4";
    grid-template-columns: 1fr;
    justify-items: center; /* centrar las imágenes */
  }

  .image {
    max-width: 100px;
    max-height: 100px;
  }

  .image img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  .image-4 {
    max-width: 100%; /* Asegúrate de que ocupe el máximo espacio */
  }

  .image-4 img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
}
/* Estilos para el Modal */
.modal {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  outline: none;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
}

.modal-close {
  position: absolute;
  top: -12px;
  right: -12px;
  background: #fff;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.85);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.nav-button.prev {
  left: -50px;
}

.nav-button.next {
  right: -50px;
}

@media (max-width: 768px) {
  .nav-button.prev {
    left: 10px;
  }

  .nav-button.next {
    right: 10px;
  }
}
</style>
