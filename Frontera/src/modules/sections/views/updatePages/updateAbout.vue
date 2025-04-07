<template>
  <v-card class="mx-auto" elevation="16" max-width="100hv">
    <v-card-item>
      <v-card-title> About / Nosotros </v-card-title>
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
        <div class="operations-page">
          <section class="about-hero">
            <div class="hero-overlay">
              <h1
                style="color: white !important"
                @dblclick="openEditModal('ABOUT_01_' + languaje)"
              >
                {{ filterData("ABOUT_01_" + languaje) }}
              </h1>
            </div>
          </section>

          <section class="header_about">
            <v-row>
              <v-col cols="12" md="6">
                <h1 @dblclick="openEditModal('ABOUT_02_' + languaje)">
                  {{ filterData("ABOUT_02_" + languaje) }}
                </h1>
              </v-col>
              <v-col cols="12" md="6">
                <p @dblclick="openEditModal('ABOUT_03_' + languaje)">
                  {{ filterData("ABOUT_03_" + languaje) }}
                </p>
              </v-col>
            </v-row>
          </section>

          <section class="about-info">
            <v-row class="text-center">
              <v-col cols="12" md="12">
                <h3 @dblclick="openEditModal('ABOUT_04_' + languaje)">
                  {{ filterData("ABOUT_04_" + languaje) }}
                </h3>
              </v-col>
            </v-row>
            <v-row class="text-start">
              <v-col cols="12" md="6">
                <p @dblclick="openEditModal('ABOUT_05_' + languaje)">
                  {{ filterData("ABOUT_05_" + languaje) }}
                </p>
              </v-col>
              <v-col cols="12" md="6">
                <p @dblclick="openEditModal('ABOUT_06_' + languaje)">
                  {{ filterData("ABOUT_06_" + languaje) }}
                </p>
              </v-col>
            </v-row>
          </section>

          <section class="mining-cards"></section>

          <section class="strategy-content">
            <v-row>
              <v-col cols="12" md="6" class="text-center">
                <img
                  :src="`${BASEURL}/img/img-strategy.jpg`"
                  alt="strategy"
                  width="400px"
                  style="margin-top: -32px"
                />
              </v-col>
              <v-col cols="12" md="6" class="text-start">
                <div class="strategy-text">
                  <h1 @dblclick="openEditModal('ABOUT_07_' + languaje)">
                    {{ filterData("ABOUT_07_" + languaje) }}
                  </h1>
                  <p @dblclick="openEditModal('ABOUT_08_' + languaje)">
                    {{ filterData("ABOUT_08_" + languaje) }}
                  </p>
                  <h2 @dblclick="openEditModal('ABOUT_09_' + languaje)">
                    {{ filterData("ABOUT_09_" + languaje) }}
                  </h2>
                </div>
              </v-col>
            </v-row>
          </section>

          <section class="values-content">
            <v-row>
              <v-col cols="12" md="6" class="backgroudnd-text-values">
                <div class="strategy-text text-start">
                  <h1 @dblclick="openEditModal('ABOUT_10_' + languaje)">
                    {{ filterData("ABOUT_10_" + languaje) }}
                  </h1>
                  <p @dblclick="openEditModal('ABOUT_11_' + languaje)">
                    {{ filterData("ABOUT_11_" + languaje) }}
                  </p>
                </div>
              </v-col>
              <v-col cols="12" md="6" class="text-center">
                <img
                  :src="`${BASEURL}/img/img-values.jpg`"
                  alt="strategy"
                  width="400px"
                  style="margin-top: -64px"
                />
              </v-col>
            </v-row>
          </section>
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
  name: "UpdateAboutEn",
  components: {
    UpdateModal,
  },
  setup() {
    const dataAbout = ref([
      {
        section_id: "ABOUT_01_EN",
        description: "About Us",
      },
      {
        section_id: "ABOUT_01_ES",
        description: "Sobre nosotros",
      },
      {
        section_id: "ABOUT_02_EN",
        description: "Frontera Copper Corporation",
      },
      {
        section_id: "ABOUT_02_ES",
        description: "Frontera Copper Corporation",
      },
      {
        section_id: "ABOUT_03_EN",
        description:
          "Frontera is a copper mining company that operates the Piedras Verdes mine. The mine is located in southern Sonora, 25 minutes from Alamos and 35 minutes from Navojoa, where most employees live.",
      },
      {
        section_id: "ABOUT_03_ES",
        description:
          "Frontera es una empresa minera de cobre que opera la mina Piedras Verdes, ubicada en el sur de Sonora, a 25 minutos de Álamos y 35 minutos de Navojoa, donde reside la mayoría de los empleados.",
      },
      {
        section_id: "ABOUT_04_EN",
        description:
          "Piedras Verdes is an open-pit copper mine that operates on a conventional basis with a mining rate of ~135ktpd and processes it ore by heap leaching and Solvent Extraction & Electrowinning.",
      },
      {
        section_id: "ABOUT_04_ES",
        description:
          "Piedras Verdes es una mina de cobre a cielo abierto que opera de forma convencional con una tasa de extracción de ~200ktpd y procesos de lixiviación en pila y SX/EW",
      },
      {
        section_id: "ABOUT_05_EN",
        description:
          "PV mines and processes sulfide and oxide ores, produces London Metals Exchange Grade “A” copper cathodes, and sells primarily hypogene ore that cannot be economically processed by heap leachng to Kupari Metals, an independently-owned tolling company that produces and sells copper concentrates.",
      },
      {
        section_id: "ABOUT_05_ES",
        description:
          "Extrae y procesa minerales de sulfuro y óxido, produce cátodos de cobre de grado 'A' en la Bolsa de Metales de Londres y vende principalmente mineral hipógeno a Kupari Metals, una empresa de propiedad independiente que produce y vende concentrados de cobre.",
      },
      {
        section_id: "ABOUT_06_EN",
        description:
          "Fully integrated with the CFE power grid and other infrastructure. All water is sourced from within the mine footprint. Within 1 hour and 15 minutes from two airports. The Ciudad Obregón International Airport operates ~20 commercial flights daily.",
      },
      {
        section_id: "ABOUT_06_ES",
        description:
          "Totalmente integrada con la red eléctrica de la CFE y otras infraestructuras. Toda el agua procede de la huella de la mina. A menos de 1 hora y 15 minutos de dos aeropuertos, el aeropuerto internacional de Ciudad Obregón opera unos 20 vuelos comerciales al día.",
      },
      {
        section_id: "ABOUT_07_EN",
        description: "Strategy",
      },
      {
        section_id: "ABOUT_07_ES",
        description: "Estrategia",
      },
      {
        section_id: "ABOUT_08_EN",
        description:
          "PV prioritizes safety, care for the community, and sustainability. It will continue to optimize capacity and recovery rates by maximizing the productivity of the mining fleet, minimizing mining dilution as the deposit becomes more highly disseminated, and selectively investing in enhanced processes focused on increasing crushing capacity, the proportion of crushed leach ore that is agglomerated and ore sorting. Investment decisions are driven by payback, internal rates of return, and their carbon footprint. As and when copper prices continue to increase, such investments will become increasingly compelling.",
      },
      {
        section_id: "ABOUT_08_ES",
        description:
          "PV continuará optimizando la capacidad y las tasas de recuperación maximizando la productividad de la flota minera, minimizando la dilución minera a medida que el yacimiento se vuelve más diseminado e invirtiendo selectivamente en procesos mejorados centrados en el aumento de la capacidad de trituración y la proporción de mineral de lixiviación triturado que se aglomera. Las decisiones de inversión serán impulsadas por la recuperación de la inversión y en las tasas internas de retorno y su huella de carbono. A medida que los precios del cobre sigan aumentando, estas inversiones serán cada vez más atractivas.",
      },
      {
        section_id: "ABOUT_09_EN",
        description:
          "This will occur while prioritizing safety, care for the community and sustainability.",
      },
      {
        section_id: "ABOUT_09_ES",
        description:
          "Esto ocurrirá mientras se prioriza la seguridad, el cuidado de la comunidad y la sostenibilidad.",
      },
      {
        section_id: "ABOUT_10_EN",
        description: "Values",
      },
      {
        section_id: "ABOUT_10_ES",
        description: "Valores",
      },
      {
        section_id: "ABOUT_11_EN",
        description:
          "Our core values are focussed on the health, safety and wellbeing of our employees, contractors and other stakeholders, we operate to world-class environmental, social, and governance standards.",
      },
      {
        section_id: "ABOUT_11_ES",
        description:
          "Nuestros valores fundamentales incluyen la salud y la seguridad de nuestros empleados y contratistas, y el compromiso de operar de acuerdo con las normas ambientales, sociales y estándares gubernamentales.",
      },
    ]);

    const filterData = (found_id) => {
      const filteredData = dataAbout.value.filter(
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
      const index = dataAbout.value.findIndex((item) => item.section_id === id);
      if (index !== -1) {
        dataAbout.value[index].description = text;
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
          page: "ABOUT",
          language: getLanguageForUpdateContent(),
        };
        const response = await getSectionByPageandLanguaje(dataForm);
        if (response.status === 200) {
          dataAbout.value = response.data;
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
.operations-page {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
}

.divider {
  width: 50px;
  height: 4px;
  background: #d9534f;
  margin: 10px 0;
  margin-left: 16px !important;
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

.operations-container {
  font-family: "Arial", sans-serif;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 92px !important;
}

h1 {
  font-size: 2.2rem;
  font-style: bold;
  margin-bottom: 1.8rem;
  border-bottom: 2px solid #e2e8f0;
  color: orange;
}

/* Estilos del mining and process */
.header_about {
  font-family: "Arial", sans-serif;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 48px !important;
  margin-bottom: 48px !important;
}

.about-info {
  font-family: "Arial", sans-serif;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 48px !important;
}

.about-info h1 {
  font-size: 2.2rem;
  font-style: bold;
  margin-bottom: 1.8rem;
  border-bottom: 2px solid #e2e8f0;
  color: black;
}
.about-info h3 strong {
  font-size: 1.5rem;
  margin-top: 1.8rem;
  color: #333;
  font-style: bold;
  margin-bottom: 1.8rem;
}
.about-info p {
  font-size: 1.2rem;
  margin-top: 1.8rem;
  color: #333;
}
.about-info h3 {
  font-size: 1.2rem;
  margin-top: 1.8rem;
  color: #333;
}

/* Estilos de las cards */
.mining-cards {
  margin-top: 24px;
  padding: 80px 0;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)),
    url("http://localhost:3000/api/public/img/bg-tbu.jpg") center/cover
      no-repeat;
  height: 60vh;
}

/* Estilos de la estrategia */
.strategy-content {
  font-family: "Arial", sans-serif;
  color: #333;
  max-width: 1200px;
}
.strategy-text {
  padding: 20px;
  margin-top: 48px !important;
}
.strategy-text h1 {
  font-size: 2.2rem;
  font-style: bold;
  margin-bottom: 1.8rem;
  border-bottom: 2px solid #e2e8f0;
  color: black;
}
.strategy-text h2 {
  font-size: 1.5rem;
  margin-top: 1.8rem;
  color: orange;
}

.strategy-text p {
  font-size: 1.2rem;
  margin-top: 1.8rem;
  color: #333;
}

/* Estilos de los valores */
.values-content {
  font-family: "Arial", sans-serif;
  color: #333;
  margin-top: 128px !important;
  background-color: #d94f4f;
}
.values-content h1 {
  font-size: 2.2rem;
  font-style: bold;
  margin-bottom: 1.8rem;
  border-bottom: 2px solid #e2e8f0;
  color: black;
}

.values-content p {
  font-size: 1.2rem;
  margin-top: 1.8rem;
  color: #333;
}
.backgroudnd-text-values {
  background-color: #e9d8ad;
  padding: 20px;
  margin-top: -16px !important;
  margin-left: 200px !important;
  max-width: 400px;
  height: 450px;
}

@media screen and (max-width: 768px) {
  .operations-container {
    padding: 10px;
  }
  .about-hero h1 {
    font-size: 2.5rem;
  }
  .about-info h1 {
    font-size: 1.8rem;
  }
  .strategy-text h1 {
    font-size: 1.8rem;
  }
  .strategy-text p {
    font-size: 1rem;
  }
  .values-content h1 {
    font-size: 1.8rem;
  }

  .backgroudnd-text-values {
    margin-left: 0 !important;
    max-width: 100%;
    height: auto;
    margin-bottom: 92px !important;
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
