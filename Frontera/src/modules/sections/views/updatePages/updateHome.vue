<template>
  <v-card class="mx-auto" elevation="16" max-width="100hv">
    <v-card-item>
      <v-card-title> Home / Inicio </v-card-title>
      <v-card-subtitle>
        <div v-if="language == 'EN'">
          <h2>You are in the section to update in</h2>
          <h1>English</h1>
          <button @click="changeLanguage()" class="action-btn secondary-btn">
            <span class="language-tag">Change Language</span>
            {{ language == "EN" ? "ES" : "EN" }}
          </button>
        </div>

        <div v-else>
          <h2>Estas actualizando la sección en</h2>
          <h1>Español</h1>
          <button @click="changeLanguage()" class="action-btn secondary-btn">
            <span class="language-tag">Cambiar idioma</span>
            {{ language == "ES" ? "EN" : "ES" }}
          </button>
        </div>
        <div class="divider"></div>
      </v-card-subtitle>
    </v-card-item>
    <v-card-text>
      <v-row class="gap-y-6">
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
              <div>
                <h2 @dblclick="openEditModal('HOME_01_' + language)">
                  <span v-html="filterData('HOME_01_' + language)"></span>
                </h2>
                <div class="divider"></div>
                <p @dblclick="openEditModal('HOME_02_' + language)">
                  <span v-html="filterData('HOME_02_' + language)"></span>
                </p>
                    <button class="see-more" @click="seeMore">
                        <span v-if="language === 'EN'">SEE MORE</span>
                        <span v-else>VER MÁS</span>
                    </button>
              </div>
            </div>
          </div>

          <!-- Sección ESG -->
          <div class="esg-section">
            <div style="margin-left: 24px; margin-bottom: 24px">
              <h2 @dblclick="openEditModal('HOME_03_' + language)"><span v-html="filterData('HOME_03_' + language)"></span></h2>
              <div class="divider"></div>
            </div>

            <div class="esg-container">
              <!-- Tarjeta Comunidades -->
              <div class="esg-card">
                <div
                  class="esg-image-placeholder"
                  style="
                    background-image: url('http://localhost:3000/api/public/img/esg-communities.jpg');
                    background-size: cover;
                  "
                >
                  <img
                    :src="`${BASEURL}/img/esg-communities.jpg`"
                    alt="commununitis"
                    width="400px"
                    height="200px"
                    style="opacity: 0"
                  />
                </div>
                <div class="esg-content">
                  <h3 @dblclick="openEditModal('HOME_04_' + language)">
                    <span v-html="filterData('HOME_04_' + language)"></span>
                  </h3>
                  <p @dblclick="openEditModal('HOME_05_' + language)">
                    <span v-html="filterData('HOME_05_' + language)"></span>
                  </p>
                  <div v-if="language === 'EN'">
                    <button class="esg-see-more" @click="seeMoreEsg">
                      SEE MORE
                    </button>
                  </div>
                  <div v-else>
                    <button class="esg-see-more" @click="seeMoreEsg">
                      VER MÁS
                    </button>
                  </div>
                </div>
              </div>

              <!-- Tarjeta Salud y Seguridad -->
              <div class="esg-card">
                <div
                  class="esg-image-placeholder"
                  style="
                    background-image: url('http://localhost:3000/api/public/img/esg-health-and-safety.jpg');
                    background-size: cover;
                  "
                >
                  <img
                    :src="`${BASEURL}/img/esg-health-and-safety.jpg`"
                    alt="health-and-safety"
                    width="400px"
                    height="200px"
                    style="opacity: 0"
                  />
                </div>
                <div class="esg-content">
                  <h3 @dblclick="openEditModal('HOME_06_' + language)">
                    <span v-html="filterData('HOME_06_' + language)"></span>
                  </h3>
                  <p @dblclick="openEditModal('HOME_07_' + language)">
                    <span v-html="filterData('HOME_07_' + language)"></span>
                  </p>
                  <div v-if="language === 'EN'">
                    <button class="esg-see-more" @click="seeMoreEsg">
                      SEE MORE
                    </button>
                  </div>
                  <div v-else>
                    <button class="esg-see-more" @click="seeMoreEsg">
                      VER MÁS
                    </button>
                  </div>
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
                  <h3 @dblclick="openEditModal('HOME_08_' + language)">
                    <span v-html="filterData('HOME_08_' + language)"></span>
                  </h3>
                  <p @dblclick="openEditModal('HOME_09_' + language)">
                    <span v-html="filterData('HOME_09_' + language)"></span>
                  </p>
                  <div v-if="language === 'EN'">
                    <button class="esg-see-more" @click="seeMoreEsg">
                      SEE MORE
                    </button>
                  </div>
                  <div v-else>
                    <button class="esg-see-more" @click="seeMoreEsg">
                      VER MÁS
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sección Galería -->
          <div class="gallery-section">
            <div v-if="language === 'EN'">
              <h2 class="text-start">Gallery</h2>
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
              <button class="carousel-btn prev" @click="prevSlide">
                &#10094;
              </button>
              <button class="carousel-btn next" @click="nextSlide">
                &#10095;
              </button>
            </div>
            <div v-if="language === 'EN'">
              <button class="see-more" @click="seeMoreGallery">SEE MORE</button>
            </div>
            <div v-else>
              <button class="see-more" @click="seeMoreGallery">VER MÁS</button>
            </div>
          </div>
        </div>
      </v-row>
    </v-card-text>
  </v-card>
  <UpdateModal
    :visible="dialogVisible"
    :current-text="currentText"
    current-page="HOME"
    :text-id="currentTextId"
    @update:visible="updateDialogVisible"
    @save-text="updateText"
  />
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import {
  BASEURL,
  getLanguageForUpdateContent,
  setLanguageForUpdateContent,
} from "@/kernel/utils";
import { showInfoToast } from "@/kernel/alerts";
import UpdateModal from "../../components/UpdateModal.vue";
import { getSectionByPageandlanguage } from "../../services/sections-service";
import router from "@/router";

export default defineComponent({
  name: "UpdateAboutEn",
  components: {
    UpdateModal,
  },
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

    const dataHome = ref([
      {
        section_id: "HOME_01_EN",
        description: "About Us",
      },
      {
        section_id: "HOME_01_ES",
        description: "Acerca de nosotros",
      },
      {
        section_id: "HOME_02_EN",
        description:
          "Frontera Copper Corporation is an operating mine located in northwestern Mexico",
      },
      {
        section_id: "HOME_02_ES",
        description:
          "Frontera Copper Corporation es una mina en operación ubicada en el noroeste de México.",
      },
      {
        section_id: "HOME_03_EN",
        description: "ESG",
      },
      {
        section_id: "HOME_03_ES",
        description: "ESG",
      },
      {
        section_id: "HOME_04_EN",
        description: "ESG: Communities",
      },
      {
        section_id: "HOME_04_ES",
        description: "ESG: Comunidades",
      },
      {
        section_id: "HOME_05_EN",
        description:
          "We place great importance on our relationship with our surrounding communities.",
      },
      {
        section_id: "HOME_05_ES",
        description:
          "Damos gran importancia a nuestra relación con las comunidades que nos rodean.",
      },
      {
        section_id: "HOME_06_EN",
        description: "ESG: Health and Safety",
      },
      {
        section_id: "HOME_06_ES",
        description: "ESG: Salud y Seguridad",
      },
      {
        section_id: "HOME_07_EN",
        description:
          "Extensive training programs combined with rigorous analysis of all anormal operations and prompt corrective action.",
      },
      {
        section_id: "HOME_07_ES",
        description:
          "Amplios programas de entrenamiento combinados con un análisis riguroso de todas las operaciones anormales y una pronta acción correctiva.",
      },
      {
        section_id: "HOME_08_EN",
        description: "ESG: Water & Environment",
      },
      {
        section_id: "HOME_08_ES",
        description: "ESG: Agua y Medio Ambiente",
      },
      {
        section_id: "HOME_09_EN",
        description:
          "We comply with official regulations to the highest standards and progressively improving our contribution to the environment.",
      },
      {
        section_id: "HOME_09_ES",
        description:
          "Cumplimos las normativas oficiales con los más altos estándares y mejorando progresivamente nuestra contribución al medio ambiente.",
      },
    ]);

    const fetchData = async () => {
      try {
        const dataForm = {
          page: "HOME",
          language: getLanguageForUpdateContent(),
        };
        const response = await getSectionByPageandlanguage(dataForm);
        if (response.status === 200) {
          if (parseInt(response.data.length) !== 0) {
            dataHome.value = response.data;
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const filterData = (found_id) => {
      const filteredData = dataHome.value.filter(
        (item) => item.section_id === found_id
      );
      return filteredData.length > 0 ? filteredData[0].description : null;
    };

    const changeLanguage = () => {
      const lang = getLanguageForUpdateContent() === "EN" ? "ES" : "EN";
      setLanguageForUpdateContent(lang);
      showInfoToast(
        `Language changed to ${lang === "EN" ? "English" : "Spanish"}`
      );
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    };

    const dialogVisible = ref(false);
    const currentText = ref("");
    const currentTextId = ref("");

    const updateDialogVisible = (visible) => {
      dialogVisible.value = visible;
    };

    const updateText = ({ id, text }) => {
      const index = dataHome.value.findIndex((item) => item.section_id === id);
      if (index !== -1) {
        dataHome.value[index].description = text;
      }
    };

    const openEditModal = (textId) => {
      showInfoToast(`Double click to edit the text: ${textId}`);
      const textToEdit = filterData(textId);
      currentText.value = textToEdit;
      currentTextId.value = textId;
      dialogVisible.value = true;
    };

    onMounted(() => {
      fetchData();
    });

    return {
      BASEURL,
      language: getLanguageForUpdateContent(),
      changeLanguage,
      filterData,
      openEditModal,
      updateDialogVisible,
      updateText,
      dialogVisible,
      currentText,
      currentTextId,
      nextSlide,
        prevSlide,
        seeMore,
        seeMoreEsg,
        seeMoreGallery,
    };
  },
});
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
/* Estilos de la tarjeta */
.language-tag {
  font-size: 0.75rem;
  background: rgba(255, 255, 255, 0.2);
  padding: 2px 6px;
  border-radius: 4px;
}
.action-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.secondary-btn {
  background: #f59e0b;
  color: white;
}

.secondary-btn:hover {
  background: #d97706;
  box-shadow: 0 4px 6px rgba(245, 158, 11, 0.3);
}
</style>
