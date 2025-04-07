<template>
  <v-card class="mx-auto" elevation="16" max-width="100hv">
    <v-card-item>
      <v-card-title> ESG </v-card-title>
      <v-card-subtitle>
        <div v-if="languaje == 'EN'">
          <h2>You are in the section to update in</h2>
          <h1>English</h1>
          <button @click="changeLanguage()" class="action-btn secondary-btn">
            <span class="language-tag">Change Language</span>
            {{ languaje == "EN" ? "ES" : "EN" }}
          </button>
        </div>

        <div v-else>
          <h2>Estas actualizando la sección en</h2>
          <h1>Español</h1>
          <button @click="changeLanguage()" class="action-btn secondary-btn">
            <span class="language-tag">Cambiar idioma</span>
            {{ languaje == "ES" ? "EN" : "ES" }}
          </button>
        </div>
        <div class="divider"></div>
      </v-card-subtitle>
    </v-card-item>
    <v-card-text>
      <v-row class="gap-y-6">
        <div>
          <div class="esg-page">
            <section class="about-hero">
              <div class="hero-overlay">
                <h1>ESG</h1>
              </div>
            </section>
          </div>
          <div class="communities-container">
            <!-- Sección Principal -->
            <div v-if="languaje == 'EN'">
              <section class="main-section">
                <div class="number-circle">ESG</div>
                <h1>Local Communities</h1>

                <div class="content-with-image">
                  <div class="text-content">
                    <p class="lead-text">
                      The sound development of the surrounding communities is of
                      fundamental importance to PV. It strives to be supportive,
                      maintain an open dialogue and a high level of trust in its
                      communication.
                    </p>

                    <div class="highlight-box">
                      <p>
                        <strong
                          >Piedras Verdes funds the operating budget of the
                          Instituto Tecnológico de Cajeme, which provides
                          undergraduate education in engineering and management
                          science</strong
                        >
                      </p>
                    </div>

                    <p>
                      Piedras Verdes funds and supports the Festival Alfonso
                      Ortíz Tirado, an annual musical weekend in Alamos, Sonora,
                      that attracts visitors from across the country, showcases
                      the Sonora Symphony Orchestra, and combines classical
                      music, jazz, and contemporary genres.
                    </p>

                    <div class="back-zone-image">
                      <p class="lead-rigth-text left-text">
                        In cooperation with the municipality of Alamos, Piedras
                        Verdes funds a temporary employment program for the
                        local fishing communities.
                      </p>

                      <p class="lead-rigth-text right-text">
                        We have created and managed various programs to support
                        the health of local children. Likewise, we are actively
                        participating in the management of the local food bank,
                        which is accessible by anyone in need.
                      </p>
                    </div>
                  </div>

                  <div class="image-placeholder right">
                    <img
                      :src="`${BASEURL}/img/esg-local-communities.jpg`"
                      alt="Community Activities"
                    />
                  </div>
                </div>
              </section>
            </div>

            <div v-else>
              <section class="main-section">
                <div class="number-circle">ESG</div>
                <h1>Comunidades locales</h1>

                <div class="content-with-image">
                  <div class="text-content">
                    <p class="lead-text">
                      El buen desarrollo de las comunidades circundantes tiene
                      una importancia fundamental para PV. Se esfuerza por ser
                      solidario, mantener un diálogo abierto y un alto nivel de
                      confianza en su comunicación:
                    </p>

                    <div class="highlight-box">
                      <p>
                        <strong
                          >Piedras Verdes financia el presupuesto operativo del
                          Instituto Tecnológico de Cajeme que imparte educación
                          de grado en ingeniería y ciencias de la
                          administración.</strong
                        >
                      </p>
                    </div>

                    <p>
                      Piedras Verdes financia y apoya el Festival Alfonso Ortíz
                      Tirado, un fin de semana musical anual en Álamos, Sonora,
                      que atrae a visitantes de todo el país, presenta a la
                      Orquesta Sinfónica de Sonora y combina música clásica,
                      jazz y géneros contemporáneos
                    </p>

                    <div class="back-zone-image">
                      <p class="lead-rigth-text left-text">
                        En colaboración con el municipio de Álamos, Piedras
                        Verdes financia un programa de empleo temporal para las
                        comunidades pesqueras locales.
                      </p>

                      <p class="lead-rigth-text right-text">
                        Piedras Verdes creó y gestiona un programa de apoyo a
                        los niños locales con discapacidad y participa
                        activamente en los bancos de alimentos para los más
                        necesitados de las comunidades.
                      </p>
                    </div>
                  </div>

                  <div class="image-placeholder right">
                    <img
                      :src="`${BASEURL}/img/esg-local-communities.jpg`"
                      alt="Community Activities"
                    />
                  </div>
                </div>
              </section>
            </div>

            <!-- Divisor -->
            <div class="section-divider"></div>

            <!-- Sección Agua y Ambiente -->
            <section class="topic-section">
              <div class="number-circle">ESG</div>
              <div class="section-header">
                <div v-if="languaje == 'EN'">
                  <h2>Water and Environment</h2>
                </div>
                <div v-else><h2>Agua y medio ambiente</h2></div>
              </div>

              <div class="content-with-image reverse">
                <div class="image-placeholder left">
                  <img
                    :src="`${BASEURL}/img/esg-water-and-environment.jpg`"
                    alt="Water Management"
                    class="image-comunities"
                  />
                </div>

                <div v-if="languaje == 'EN'">
                  <div class="text-content">
                    <ul class="bullet-list">
                      <li>
                        At Piedras Verdes our surrounding environment is
                        important. In addition to operating in compliance with
                        both, national and international regulations, we focus
                        on serving our local conditions. 2024 is a year in which
                        we have set out to create a much more real, sincere, and
                        solid ESG awareness for the benefit of the natural
                        world.
                      </li>
                    </ul>
                  </div>
                </div>
                <div v-else>
                  <div class="text-content">
                    <ul class="bullet-list">
                      <li>
                        PV opera según las normas medioambientales
                        internacionales y cumple con todas las normas
                        medioambientales mexicanas aplicables.
                      </li>
                      <li>
                        No se han producido incidentes medioambientales
                        significativos ni se han llevado a cabo acciones de
                        cumplimiento desde el inicio de las operaciones en 2006.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <!-- Divisor -->
            <div class="section-divider"></div>

            <!-- Sección Salud y Seguridad -->
            <section class="topic-section">
              <div class="two-column-content">
                <div class="column text-center">
                  <img
                    :src="`${BASEURL}/img/esg-health-and-safety-01.jpg`"
                    style="width: 400px"
                    alt="esg-healt"
                  />
                </div>

                <div v-if="languaje == 'EN'">
                  <div class="column">
                    <div class="number-circle">ESG</div>
                    <div class="section-header">
                      <h2>Health and Safety</h2>
                    </div>
                    <p style="margin-bottom: 16px">
                      We prioritize the safe and health of our people first and
                      foremost. Our safety records compare favorably against
                      international standards, and we firmly believe that
                      prevention will lead us down the path of zero accidents.
                    </p>

                    <p style="margin-bottom: 16px">
                      We take risk assessments and job safety analyses as the
                      basis of our day-to-day work. The continuous improvement
                      of our processes and procedures is a must. Our employees
                      and contractors receive extensive ongoing training to
                      ensure operational safety, emphasizing those who manage
                      higher-risk functions.
                    </p>

                    <p style="margin-bottom: 16px">
                      Some of the pillars of our culture and values are safe,
                      health, and well-being. As part of our new awareness, we
                      integrated the caring of mental health into our work
                      environment as a priority, recognizing that the wellness
                      at work directly influences the success of any operation.
                    </p>
                    <div class="image-placeholder full-width">
                      <img
                        :src="`${BASEURL}/img/esg-health-and-safety-02.jpg`"
                        alt="Safety Procedures"
                      />
                    </div>
                  </div>
                </div>
                <div v-else>
                  <div class="column">
                    <div class="number-circle">ESG</div>
                    <div class="section-header">
                      <h2>Salud y seguridad</h2>
                    </div>
                    <p style="margin-bottom: 16px">
                      Damos prioridad a la seguridad de nuestros empleados por
                      encima de todo.
                    </p>

                    <p style="margin-bottom: 16px">
                      Nuestros empleados y contratistas reciben una amplia
                      formación continua para garantizar la seguridad operativa
                      con énfasis en los que gestionan las funciones con mayor
                      riesgo. Nuestra cultura y valores corporativos hacen
                      hincapié en la prioridad de la seguridad y el cumplimiento
                      de las normas medioambientales por encima de cualquier
                      consideración operativa.
                    </p>

                    <p style="margin-bottom: 16px">
                      Llevamos a cabo análisis de causa raíz de todos los
                      incidentes, sin importar cual intrascendentes puedan ser,
                      y rápidamente implementar los cambios apropiados en los
                      procedimientos y prácticas.
                    </p>
                    <p style="margin-bottom: 16px">
                      Nuestro historial de seguridad se compara muy
                      favorablemente con estándares internacionales.
                    </p>
                    <div class="image-placeholder full-width">
                      <img
                        :src="`${BASEURL}/img/esg-health-and-safety-02.jpg`"
                        alt="Safety Procedures"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </v-row>
    </v-card-text>
  </v-card>
  <UpdateModal
    :visible="dialogVisible"
    :current-text="currentText"
    current-page="ABOUT"
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
import { getSectionByPageandLanguaje } from "../../services/sections-service";

export default defineComponent({
  name: "UpdateEsg",
  components: {
    UpdateModal,
  },
  setup() {
    const dataEsg = ref([
      {
        section_id: "ESG_01_EN",
        description: "ESG",
      },
      {
        section_id: "ESG_01_ES",
        description: "ESG",
      },
      {
        section_id: "ESG_02_EN",
        description: "Local Communities",
      },
      {
        section_id: "ESG_02_ES",
        description: "Comunidades locales",
      },
      {
        section_id: "ESG_03_EN",
        description:
          "The sound development of the surrounding communities is of fundamental importance to PV. It strives to be supportive, maintain an open dialogue and a high level of trust in its communication.",
      },
      {
        section_id: "ESG_03_ES",
        description:
          "El buen desarrollo de las comunidades circundantes tiene una importancia fundamental para PV. Se esfuerza por ser solidario, mantener un diálogo abierto y un alto nivel de confianza en su comunicación:",
      },
      {
        section_id: "ESG_04_EN",
        description:
          "Piedras Verdes funds the operating budget of the Instituto Tecnológico de Cajeme, which provides undergraduate education in engineering and management science",
      },
      {
        section_id: "ESG_04_ES",
        description:
          "Piedras Verdes financia el presupuesto operativo del Instituto Tecnológico de Cajeme que imparte educación de grado en ingeniería y ciencias de la administración.",
      },
      {
        section_id: "ESG_05_EN",
        description:
          "Piedras Verdes funds and supports the Festival Alfonso Ortíz Tirado, an annual musical weekend in Alamos, Sonora, that attracts visitors from across the country, showcases the Sonora Symphony Orchestra, and combines classical music, jazz, and contemporary genres.",
      },
      {
        section_id: "ESG_05_ES",
        description:
          "Piedras Verdes financia y apoya el Festival Alfonso Ortíz Tirado, un fin de semana musical anual en Álamos, Sonora, que atrae a visitantes de todo el país, presenta a la Orquesta Sinfónica de Sonora y combina música clásica, jazz y géneros contemporáneos",
      },
      {
        section_id: "ESG_06_EN",
        description:
          "In cooperation with the municipality of Alamos, Piedras Verdes funds a temporary employment program for the local fishing communities.",
      },
      {
        section_id: "ESG_06_ES",
        description:
          "En colaboración con el municipio de Álamos, Piedras Verdes financia un programa de empleo temporal para las comunidades pesqueras locales.",
      },
      {
        section_id: "ESG_07_EN",
        description: "We have created and managed various programs to support the health of local children. Likewise, we are actively participating in the management of the local food bank, which is accessible by anyone in need.",
      },
      {
        section_id: "ESG_07_ES",
        description: "Piedras Verdes creó y gestiona un programa de apoyo a los niños locales con discapacidad y participa activamente en los bancos de alimentos para los más necesitados de las comunidades.",
      },
      {
        section_id: "ESG_08_EN",
        description:
          "Water and Environment",
      },
      {
        section_id: "ESG_08_ES",
        description:
          "Agua y medio ambiente",
      },
      {
        section_id: "ESG_09_EN",
        description:
          "This will occur while prioritizing safety, care for the community and sustainability.",
      },
      {
        section_id: "ESG_09_ES",
        description:
          "Esto ocurrirá mientras se prioriza la seguridad, el cuidado de la comunidad y la sostenibilidad.",
      },
      {
        section_id: "ESG_10_EN",
        description: "Values",
      },
      {
        section_id: "ESG_10_ES",
        description: "Valores",
      },
      {
        section_id: "ESG_11_EN",
        description:
          "Our core values are focussed on the health, safety and wellbeing of our employees, contractors and other stakeholders, we operate to world-class environmental, social, and governance standards.",
      },
      {
        section_id: "ESG_11_ES",
        description:
          "Nuestros valores fundamentales incluyen la salud y la seguridad de nuestros empleados y contratistas, y el compromiso de operar de acuerdo con las normas ambientales, sociales y estándares gubernamentales.",
      },
    ]);

    const filterData = (found_id) => {
      const filteredData = dataEsg.value.filter(
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
      const index = dataEsg.value.findIndex((item) => item.section_id === id);
      if (index !== -1) {
        dataEsg.value[index].description = text;
      }
    };

    const openEditModal = (textId) => {
      showInfoToast(`Double click to edit the text: ${textId}`);
      const textToEdit = filterData(textId);
      currentText.value = textToEdit;
      currentTextId.value = textId;
      dialogVisible.value = true;
    };

    const fetchData = async () => {
      try {
        const dataForm = {
          page: "ESG",
          language: getLanguageForUpdateContent(),
        };
        const response = await getSectionByPageandLanguaje(dataForm);
        if (response.status === 200) {
          dataEsg.value = response.data;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      BASEURL,
      languaje: getLanguageForUpdateContent(),
      changeLanguage,
      filterData,
      openEditModal,
      updateDialogVisible,
      updateText,
      dialogVisible,
      currentText,
      currentTextId,
    };
  },
});
</script>

<style scoped>
.esg-page {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
}

.about-hero {
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("http://localhost:3000/api/public/img/bg-tbu.jpg") center/cover
      no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
}

.hero-overlay {
  z-index: 1;
}

.about-hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: white;
}

.communities-container {
  font-family: "Arial", sans-serif;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 92px !important;
}

h1 {
  font-size: 2.2rem;
  color: orange;
  margin-bottom: 1.8rem;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 0.5rem;
}

h2 {
  font-size: 1.8rem;
  color: orange;
  margin-left: 1rem;
}

.lead-text {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.content-with-image {
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
  align-items: flex-start;
}

.content-with-image.reverse {
  flex-direction: row-reverse;
}

.text-content {
  flex: 1;
}

.two-column-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1.5rem;
}

.highlight-box {
  background-color: #ffebeb;
  border-left: 4px solid #ce3131;
  padding: 1.2rem;
  margin: 1.5rem 0;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.number-circle {
  background-color: #d24d19;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.3rem;
}

.section-divider {
  border-top: 3px solid #e2e8f0;
  margin: 3rem 0;
}

.bullet-list {
  list-style-type: none;
  padding-left: 0;
}

.bullet-list li {
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.bullet-list li strong {
  position: absolute;
  left: 0;
  color: #b0412b;
}

.image-comunities {
  width: 600px !important;
  height: auto;
  display: block;
}

.image-placeholder {
  width: 100%;
  height: auto;
  display: block;
}

.image-placeholder.right {
  margin-left: 2rem;
  flex: 0 0 55%;
}

.image-placeholder.left {
  margin-right: 2rem;
  flex: 0 0 35%;
}

.image-placeholder.full-width {
  margin: 1.5rem 0;
  width: 100%;
}

.image-placeholder img {
  width: 100%;
  height: auto;
  display: block;
}

.back-zone-image {
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  margin: 2rem 0;
  width: 220%;
  position: relative;
  z-index: 1;
}

.lead-rigth-text {
  font-size: 1.1rem;
  line-height: 1.8;
  flex: 1;
  min-width: 45%;
}

.left-text {
  padding-right: 1.5rem;
}

.right-text {
  padding-left: 1.5rem;
}

/* Media Queries para pantallas medianas (tablets) */
@media (max-width: 1024px) {
  .about-hero h1 {
    font-size: 2.8rem;
  }

  .communities-container {
    padding: 15px;
    margin-top: 80px !important;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.6rem;
    margin-left: 0.5rem;
  }

  .content-with-image,
  .content-with-image.reverse {
    flex-direction: column;
    gap: 1.5rem;
  }

  .image-placeholder.right,
  .image-placeholder.left {
    margin: 1rem 0;
    flex: 1 1 100%;
  }

  .image-comunities {
    width: 100% !important;
  }

  .back-zone-image {
    width: 100%;
    flex-direction: column;
    gap: 1rem;
  }

  .lead-rigth-text {
    min-width: 100%;
  }

  .two-column-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .column.text-center img {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    display: block;
  }
}

/* Media Queries para pantallas pequeñas (móviles) */
@media (max-width: 767px) {
  .about-hero {
    height: 50vh;
  }

  .about-hero h1 {
    font-size: 2.2rem;
  }

  .communities-container {
    padding: 10px;
    margin-top: 70px !important;
  }

  h1 {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }

  h2 {
    font-size: 1.4rem;
    margin-left: 0;
  }

  .number-circle {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }

  .lead-text,
  .lead-rigth-text {
    font-size: 1rem;
    line-height: 1.6;
  }

  .highlight-box {
    padding: 1rem;
  }

  .section-divider {
    margin: 2rem 0;
  }

  .back-zone-image {
    margin: 1.5rem 0;
  }

  .left-text,
  .right-text {
    padding: 0;
  }

  .image-placeholder.full-width img {
    width: 100%;
  }
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
