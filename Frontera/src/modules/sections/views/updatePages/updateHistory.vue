<template>
  <v-card class="mx-auto" elevation="16" max-width="100hv">
    <v-card-item>
      <v-card-title> HISTORY / Historia </v-card-title>
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
              <div >
                <h1 style="color: white !important"   @dblclick="openEditModal('HISTORY_01_' + languaje)"> <span v-html=" filterData('HISTORY_01_' + languaje)"></span></h1>
              </div>
            </div>
          </section>

          <section class="mining_process">
            <div class="text-center">
              <h2   @dblclick="openEditModal('HISTORY_02_' + languaje)">
                <span v-html=" filterData('HISTORY_02_' + languaje)"></span>
              </h2>
              <p @dblclick="openEditModal('HISTORY_03_' + languaje)">
                <span v-html=" filterData('HISTORY_03_' + languaje)"></span>
              </p>
            </div>
            <div class="container-mining">
              <div class="mining-grid">
                <div class="mining-card">
                  <div>
                    <p @dblclick="openEditModal('HISTORY_04_' + languaje)">
                      <span v-html=" filterData('HISTORY_04_' + languaje)"></span>
                    </p>
                  </div>
                </div>

                <div class="mining-card">
                  <div>
                    <p @dblclick="openEditModal('HISTORY_05_' + languaje)">
                      <span v-html=" filterData('HISTORY_05_' + languaje)"></span>
                    </p>
                  </div>
                </div>

                <div class="mining-card">
                  <div>
                    <p @dblclick="openEditModal('HISTORY_06_' + languaje)">
                      <span v-html=" filterData('HISTORY_06_' + languaje)"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mining-section text-center">
              <div>
                <p @dblclick="openEditModal('HISTORY_07_' + languaje)">
                  <span v-html=" filterData('HISTORY_07_' + languaje)"></span>
                </p>
              </div>
            </div>
          </section>

          <section class="results-section text-center">
            <div>
              <h2 @dblclick="openEditModal('HISTORY_08_' + languaje)">
                <span v-html=" filterData('HISTORY_08_' + languaje)"></span>
              </h2>
            </div>
          </section>

          <section class="ampliation-section text-center">
            <div>
              <div>
                <p @dblclick="openEditModal('HISTORY_09_' + languaje)">
                  <span v-html=" filterData('HISTORY_09_' + languaje)"></span>
                </p>
              </div>


              <div @dblclick="openEditModal('HISTORY_10_' + languaje)">
                <h3> <span v-html=" filterData('HISTORY_10_' + languaje)"></span></h3>
              </div>
            </div>
          </section>

          <section class="container-table">
            <div class="operations-table">
              <div v-if="languaje == 'EN'">
                <div
                  v-for="(op, index) in operations.filter(
                    (op) => op.languaje === 'EN'
                  )"
                  :key="index"
                  class="operation-row"
                  @click="toggleExpand(index)"
                >
                  <div class="operation-description">
                    <span>{{ op.description }}</span>
                    <span class="expand-icon">{{
                      expandedIndex === index ? "−" : "+"
                    }}</span>
                  </div>
                  <div v-if="expandedIndex === index" class="operation-details">
                    <p>{{ op.details }}</p>
                  </div>
                </div>
              </div>

              <div v-else>
                <div
                  v-for="(op, index) in operations.filter(
                    (op) => op.languaje === 'ES'
                  )"
                  :key="index"
                  class="operation-row"
                  @click="toggleExpand(index)"
                >
                  <div class="operation-description">
                    <span>{{ op.description }}</span>
                    <span class="expand-icon">{{
                      expandedIndex === index ? "−" : "+"
                    }}</span>
                  </div>
                  <div v-if="expandedIndex === index" class="operation-details">
                    <p>{{ op.details }}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </v-row>
    </v-card-text>
  </v-card>
  <UpdateModal
    :visible="dialogVisible"
    :current-text="currentText"
    current-page="HISTORY"
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
  name: "UpdateHISTORY",
  components: {
    UpdateModal,
  },
  setup() {
    const dataHistory = ref([
      {
        section_id: "HISTORY_01_EN",
        description: "HISTORY",
      },
      {
        section_id: "HISTORY_01_ES",
        description: "Historia",
      },
      {
        section_id: "HISTORY_02_EN",
        description: "Frontera Copper Corporation built the Piedras Verdes Mine and started commercial production in 2006.",
      },
      {
        section_id: "HISTORY_02_ES",
        description: "Frontera Copper Corporation construyó la mina Piedras Verdes e inició la producción comercial en 2006.",
      },
      {
        section_id: "HISTORY_03_EN",
        description:
          "The mine was capital-constrained, mining was subcontracted at a high cost, and leaching was undertaken on a run-of-mine basis with poor metallurgical recoveries. In the context of low copper prices prevailing during the financial crisis, the mine suspended operations in 2008.",
      },
      {
        section_id: "HISTORY_03_ES",
        description:
          "Tenía limitaciones de capital, la minería se subcontrataba a un alto coste y la lixiviación se realizaba a pie de mina con pobres recuperaciones metalúrgicas",
      },
      {
        section_id: "HISTORY_04_EN",
        description:
          "Invecture Group made a tender offer for Frontera that was successfully concluded in May 2009.",
      },
      {
        section_id: "HISTORY_04_ES",
        description:
          "En el contexto de los bajos precios del cobre que prevalecían durante la crisis financiera, suspendió sus operaciones en 2008. Invecture Group hizo una oferta pública de adquisición de todas las acciones de Frontera, que concluyó con éxito en mayo de 2009.",
      },
      {
        section_id: "HISTORY_05_EN",
        description:
          "Invecture Group invested over $450m to convert the Piedras Verdes Mine from a run-of-mine heap leach operation to multiple process streams, increasing production and reducing unit costs.",
      },
      {
        section_id: "HISTORY_05_ES",
        description:
          "Invecture Group invirtió más de 450 millones de dólares para convertir la mina de Piedras Verdes de una operación de lixiviación en pila en un proceso múltiple, aumentando la producción y reduciendo los costes unitarios.",
      },
      {
        section_id: "HISTORY_06_EN",
        description:
          "Kupari Metals built a floatation plant adjacent to the Piedras Verdes deposit and started operations in 4Q12, which allowed Frontera the ability to optimize the value of certain ore types which offering better economics when processed by flotation.",
      },
      {
        section_id: "HISTORY_06_ES",
        description:
          "Kupari Metals construyó una planta de flotación adyacente al yacimiento de Piedras Verdes y comenzó a operar en el 4T12, lo que proporcionó a Frontera la capacidad de monetizar ciertos tipos de mineral que ofrecen una mejor economía cuando se procesan por flotación",
      },
      {
        section_id: "HISTORY_07_EN",
        description: "From 1Q20 through 2Q21, Piedras Verdes was placed on Care and Maintenance in the context of the Covid pandemic and low copper prices. During this time, much test work was undertaken and significant operational improvements were identified, analyzed, and implemented.",
      },
      {
        section_id: "HISTORY_07_ES",
        description: "Desde el 4T19 hasta el 2T21, Piedras Verdes fue puesta bajo Cuidado y Mantenimiento en el contexto de los bajos precios del cobre. Durante este tiempo, se identificaron muchas mejoras operativas, se analizaron y realizaron pruebas. ",
      },
      {
        section_id: "HISTORY_08_EN",
        description:
          "As a result, over the past three years, Piedras Verdes has:",
      },
      {
        section_id: "HISTORY_08_ES",
        description:
          "Como resultado, en los últimos 18 meses, Piedras Verdes cuenta con:",
      },
      {
        section_id: "HISTORY_09_EN",
        description:
          "Expanded the mineral reserve from 628kt of contained copper to 934 kt with a combination of exploration drilling and developing an NSR-driven block model at $3.50/lb copper.",
      },
      {
        section_id: "HISTORY_09_ES",
        description:
          "Ampliamos la reserva mineral de 628 kt de cobre contenido a 934 kt con una combinación de perforaciones de exploración y el desarrollo de un modelo de bloques impulsado por el NSR a 3,50 $/lb de cobre ",
      },
      {
        section_id: "HISTORY_10_EN",
        description: "Grown and optimized operations by",
      },
      {
        section_id: "HISTORY_10_ES",
        description: "Crecimiento y optimización de las operaciones mediante:",
      },
    ]);
    const expandedIndex = ref(null);

    const operations = ref([
      {
        description: "Expanding the capacity...",
        details:
          "In 1Q22 we expanded the capacity of the leach crushing, screening, and conveying system to operate at 36 ktpd, enabling improved recoveries and kinetics, with higher throughput to agglomeration.",
        languaje: "EN",
      },
      {
        description: "Vat leaching of flotation tails...",
        details:
          "Developing the engineering for agitated tank leaching of 18Mt tails over ten years at an average CuSEQ grade of 0.13%.",
        languaje: "EN",
      },
      {
        description: "Installation of Aggolmerators...",
        details:
          "In 1Q21, we Installed two agglomerators with a capacity of 24 ktpd to improve metallurgical recoveries by creating robust agglomerate pellets with uniform leach characteristics from screened fines with acid and raffinate to enhance leach recoveries and kinetics, eliminate the loss of contained copper in slimes confined to tails by the screw slurry classification system, and reduce water consumption.",
        languaje: "EN",
      },
      {
        description: "Optimizing acid consumption...",
        details:
          "Optimizing acid consumption with continuous remote monitoring of heap leach solution chemistry and selective acid addition by section of the leach pad.",
        languaje: "EN",
      },
      {
        description: "Internally developing a mobile...",
        details:
          "Internally developing a mobile fleet dispatch system that optimizes operations, enables real time monitoring of equipment productivity and automates data capture for multiple systems.",
        languaje: "EN",
      },
      {
        description: "Dispatch System...",
        details:
          "We developed a mobile fleet dispatch system that optimizes operations, enables real-time monitoring of equipment productivity, and automates data capture for multiple systems.",
        languaje: "EN",
      },
      {
        description: "Optimization of heap leach practices...",
        details:
          "Selectively implement heap leach aeration, maximizing copper recovery, kinetics, and acid generation.",
        languaje: "EN",
      },
      {
        description: "Ampliación de la capacidad...",
        details:
          "Ampliación de la capacidad del sistema de trituración y cribado y transporte de la lixiviación en el 1T22 para operar a 40 ktpd y 45 ktpd by 3T22 permitiendo mejorar las recuperaciones y la cinética, con un mayor rendimiento hacia los aglomeradores.",
        languaje: "ES",
      },
      {
        description: "Desarrollar la ingeniería...",
        details:
          "Desarrollar la ingeniería para la lixiviación en tanque agitado de 18Mt de colas a lo largo de 10 años con una ley media de CuSEQ de 0,13% que comenzará a construirse a finales del 2T22 y se pondrá en marcha en el 4T22.",
        languaje: "ES",
      },
      {
        description: "Instalación de dos aglomeradores...",
        details:
          "Instalación de dos aglomeradores en el 1T21 con una capacidad de 24 ktpd para crear paneles robustos de aglomerado a partir de finos cribados con ácido y agua refinada para mejorar las recuperaciones de lixiviación y la cinética, eliminar la pérdida de cobre contenido en los lodos confinados en las colas por el sistema de clasificación de lodos de tornillo que reemplazó y reducir el consumo de agua.",
        languaje: "ES",
      },
      {
        description: "Optimizar el consumo de ácido...",
        details:
          "Optimizar el consumo de ácido con la continua supervisión remota de la pila de lixiviación de la solución química la adición selectiva de ácido por sección de la pila de lixiviación.",
        languaje: "ES",
      },
      {
        description: "Desarrollar internamente un sistema...",
        details:
          "Desarrollar internamente un sistema de envío de flotas móviles que optimice las operaciones, permita la supervisión en tiempo real de la productividad de los equipos y automatice la captura de datos para múltiples sistemas.",
        languaje: "ES",
      },
      {
        description: "Implementación selectiva de la aireación...",
        details:
          "Implementación selectiva de la aireación de la pila de lixiviación, maximizando la recuperación de cobre, la cinética y la generación de ácido.",
        languaje: "ES",
      },
      {
        description: "Desarrollo de un circuito para...",
        details:
          "Desarrollo de un circuito para recuperar el molibdeno que produce xxxlbs de metal contenido al mes.",
        languaje: "ES",
      },
    ]);

    const toggleExpand = (index) => {
      expandedIndex.value = expandedIndex.value === index ? null : index;
    };

    const filterData = (found_id) => {
      const filteredData = dataHistory.value.filter(
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
      const index = dataHistory.value.findIndex(
        (item) => item.section_id === id
      );
      if (index !== -1) {
        dataHistory.value[index].description = text;
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
          page: "HISTORY",
          language: getLanguageForUpdateContent(),
        };
        const response = await getSectionByPageandLanguaje(dataForm);
        if (response.status === 200) {
          if (parseInt(response.data.length) !== 0) {
            dataHistory.value = response.data;
          } else {
            showInfoToast("Watching for cache data");
          }
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
      operations,
      expandedIndex,
      toggleExpand,
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
    url("http://localhost:3000/api/public/img/bg-history.jpg") center/cover
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
.mining_process {
  font-family: "Arial", sans-serif;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 48px !important;
}

/* Cards */
.container-mining {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 48px !important;
}

.mining-cards {
  margin-top: 24px;
  padding: 80px 0;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)),
    url("http://localhost:3000/api/public/img/bg-tbu.jpg") center/cover
      no-repeat;
}

.mining-section {
  padding: 80px 0;
  margin-left: 48px;
  margin-right: 48px;
}

.mining-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Por defecto, una tarjeta por fila */
  gap: 30px;
  margin-left: 32px;
  margin-right: 32px;
}

.mining-card {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
}

.mining-card:hover {
  transform: translateY(-10px);
}

@media (min-width: 768px) {
  .mining-grid {
    grid-template-columns: repeat(
      2,
      1fr
    ); /* Dos tarjetas por fila en pantallas medianas */
  }
}

@media (min-width: 1024px) {
  .mining-grid {
    grid-template-columns: repeat(
      3,
      1fr
    ); /* Cuatro tarjetas por fila en pantallas grandes */
  }
}

/* Estilos del resultado section */
.results-section {
  padding: 80px;
  margin-left: 84px;
  margin-right: 84px;
  background-color: #d94f4f;
}
.results-section h2 {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: white !important;
}

/* Estilos del ampliation section */
.ampliation-section {
  padding: 80px;
  margin-left: 84px;
  margin-right: 84px;
}
.ampliation-section h3 {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333 !important;
}
.ampliation-section p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333 !important;
}

/* Estilos de la tabla expandable */
.container-table {
  margin-left: 56px;
  margin-right: 56px;
  margin-bottom: 24px;
}

.operations-table {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
}

.operation-row {
  border-bottom: 1px solid #e2e8f0;
  transition: all 0.3s ease;
}

.operation-row:last-child {
  border-bottom: none;
}

.operation-description {
  padding: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background-color: #fcf7f7;
  font-weight: 500;
}

.operation-description:hover {
  background-color: #ffebeb;
}

.expand-icon {
  font-weight: bold;
  font-size: 1.2rem;
  color: #ce3131;
}

.operation-details {
  padding: 1rem 1.2rem 1.5rem;
  background-color: white;
  border-top: 1px solid #edf2f7;
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
