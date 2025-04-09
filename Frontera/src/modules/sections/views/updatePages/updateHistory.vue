<template>
  <v-card class="mx-auto" elevation="16" max-width="100hv">
    <v-card-item>
      <v-card-title> HISTORY / Historia </v-card-title>
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
        <div class="operations-page">
          <section class="about-hero">
            <div class="hero-overlay">
              <div>
                <h1
                  style="color: white !important"
                  @dblclick="openEditModal('HISTORY_01_' + language)"
                >
                  <span v-html="filterData('HISTORY_01_' + language)"></span>
                </h1>
              </div>
            </div>
          </section>

          <section class="mining_process">
            <div class="text-center">
              <h2 @dblclick="openEditModal('HISTORY_02_' + language)">
                <span v-html="filterData('HISTORY_02_' + language)"></span>
              </h2>
              <p @dblclick="openEditModal('HISTORY_03_' + language)">
                <span v-html="filterData('HISTORY_03_' + language)"></span>
              </p>
            </div>
            <div class="container-mining">
              <div class="mining-grid">
                <div class="mining-card">
                  <div>
                    <p @dblclick="openEditModal('HISTORY_04_' + language)">
                      <span
                        v-html="filterData('HISTORY_04_' + language)"
                      ></span>
                    </p>
                  </div>
                </div>

                <div class="mining-card">
                  <div>
                    <p @dblclick="openEditModal('HISTORY_05_' + language)">
                      <span
                        v-html="filterData('HISTORY_05_' + language)"
                      ></span>
                    </p>
                  </div>
                </div>

                <div class="mining-card">
                  <div>
                    <p @dblclick="openEditModal('HISTORY_06_' + language)">
                      <span
                        v-html="filterData('HISTORY_06_' + language)"
                      ></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mining-section text-center">
              <div>
                <p @dblclick="openEditModal('HISTORY_07_' + language)">
                  <span v-html="filterData('HISTORY_07_' + language)"></span>
                </p>
              </div>
            </div>
          </section>

          <section class="results-section text-center">
            <div>
              <h2 @dblclick="openEditModal('HISTORY_08_' + language)">
                <span v-html="filterData('HISTORY_08_' + language)"></span>
              </h2>
            </div>
          </section>

          <section class="ampliation-section text-center">
            <div>
              <div>
                <p @dblclick="openEditModal('HISTORY_09_' + language)">
                  <span v-html="filterData('HISTORY_09_' + language)"></span>
                </p>
              </div>

              <div @dblclick="openEditModal('HISTORY_10_' + language)">
                <h3>
                  <span v-html="filterData('HISTORY_10_' + language)"></span>
                </h3>
              </div>
            </div>
          </section>

          <section class="container-table">
            <div class="operations-table">
              <div v-if="language == 'EN'">
                <table class="operations-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Details</th>
                      <th>
                        <button
                          class="btn-table btn-add-op"
                          @click="addOperation()"
                        >
                          <v-icon class="fa-solid fa-plus"></v-icon>
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(op, index) in operations.filter(
                        (op) => op.language === 'EN'
                      )"
                      :key="index"
                    >
                      <td>{{ op.description }}</td>
                      <td>
                        <span>{{ op.details }}</span>
                      </td>
                      <td>
                        <button
                          class="btn-table btn-edit-op"
                          @click="editOperation(op)"
                        >
                          <v-icon class="fa-solid fa-pencil"></v-icon>
                        </button>
                        <button
                          class="btn-table btn-delete-op"
                          @click="deleteOperation(op)"
                        >
                          <v-icon class="fa-solid fa-trash"></v-icon>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div v-else>
                <table class="operations-table">
                  <thead>
                    <tr>
                      <th>Título</th>
                      <th>Detalle</th>
                      <th>
                        <button
                          class="btn-table btn-add-op"
                          @click="addOperation()"
                        >
                          <v-icon class="fa-solid fa-plus"></v-icon>
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(op, index) in operations.filter(
                        (op) => op.language === 'ES'
                      )"
                      :key="index"
                    >
                      <td>{{ op.description }}</td>
                      <td>
                        <span>{{ op.details }}</span>
                      </td>
                      <td>
                        <button
                          class="btn-table btn-edit-op"
                          @click="editOperation(op)"
                        >
                          <v-icon class="fa-solid fa-pencil"></v-icon>
                        </button>
                        <button
                          class="btn-table btn-delete-op"
                          @click="deleteOperation(op)"
                        >
                          <v-icon class="fa-solid fa-trash"></v-icon>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
  <UpdateHistoryOpModal
      :visible="modalEditHistoryOp"
      @update:visible="modalEditHistoryOp = $event"
      :currentContent="currentDataHistoryOp"
      @save-changes="getHistoryOperationsData"
    />
  <AddHistoryModal
    :visible="modalAddHistoryOp"
    @update:visible="modalAddHistoryOp = $event"
    @save-text="getHistoryOperationsData"
  />
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import {
  BASEURL,
  getLanguageForUpdateContent,
  setLanguageForUpdateContent,
} from "@/kernel/utils";
import { showInfoToast, showSuccessToast } from "@/kernel/alerts";
import UpdateModal from "../../components/UpdateModal.vue";
import { getSectionByPageandlanguage } from "../../services/sections-service";
import {
  getHistoryOperations,
  deleteHistoryOperation,
} from "../../services/history-operations";
import UpdateHistoryOpModal from "../../components/UpdateHistoryOpModal.vue";
import AddHistoryModal from "../../components/AddHistoryModal.vue";

export default defineComponent({
  name: "UpdateHISTORY",
  components: {
    UpdateModal,
    AddHistoryModal,
    UpdateHistoryOpModal,
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
        description:
          "Frontera Copper Corporation built the Piedras Verdes Mine and started commercial production in 2006.",
      },
      {
        section_id: "HISTORY_02_ES",
        description:
          "Frontera Copper Corporation construyó la mina Piedras Verdes e inició la producción comercial en 2006.",
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
        description:
          "From 1Q20 through 2Q21, Piedras Verdes was placed on Care and Maintenance in the context of the Covid pandemic and low copper prices. During this time, much test work was undertaken and significant operational improvements were identified, analyzed, and implemented.",
      },
      {
        section_id: "HISTORY_07_ES",
        description:
          "Desde el 4T19 hasta el 2T21, Piedras Verdes fue puesta bajo Cuidado y Mantenimiento en el contexto de los bajos precios del cobre. Durante este tiempo, se identificaron muchas mejoras operativas, se analizaron y realizaron pruebas. ",
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

    const operations = ref([
      {
        description: "Expanding the capacity...",
        details:
          "In 1Q22 we expanded the capacity of the leach crushing, screening, and conveying system to operate at 36 ktpd, enabling improved recoveries and kinetics, with higher throughput to agglomeration.",
        language: "EN",
      },
      {
        description: "Vat leaching of flotation tails...",
        details:
          "Developing the engineering for agitated tank leaching of 18Mt tails over ten years at an average CuSEQ grade of 0.13%.",
        language: "EN",
      },
      {
        description: "Installation of Aggolmerators...",
        details:
          "In 1Q21, we Installed two agglomerators with a capacity of 24 ktpd to improve metallurgical recoveries by creating robust agglomerate pellets with uniform leach characteristics from screened fines with acid and raffinate to enhance leach recoveries and kinetics, eliminate the loss of contained copper in slimes confined to tails by the screw slurry classification system, and reduce water consumption.",
        language: "EN",
      },
      {
        description: "Optimizing acid consumption...",
        details:
          "Optimizing acid consumption with continuous remote monitoring of heap leach solution chemistry and selective acid addition by section of the leach pad.",
        language: "EN",
      },
      {
        description: "Internally developing a mobile...",
        details:
          "Internally developing a mobile fleet dispatch system that optimizes operations, enables real time monitoring of equipment productivity and automates data capture for multiple systems.",
        language: "EN",
      },
      {
        description: "Dispatch System...",
        details:
          "We developed a mobile fleet dispatch system that optimizes operations, enables real-time monitoring of equipment productivity, and automates data capture for multiple systems.",
        language: "EN",
      },
      {
        description: "Optimization of heap leach practices...",
        details:
          "Selectively implement heap leach aeration, maximizing copper recovery, kinetics, and acid generation.",
        language: "EN",
      },
      {
        description: "Ampliación de la capacidad...",
        details:
          "Ampliación de la capacidad del sistema de trituración y cribado y transporte de la lixiviación en el 1T22 para operar a 40 ktpd y 45 ktpd by 3T22 permitiendo mejorar las recuperaciones y la cinética, con un mayor rendimiento hacia los aglomeradores.",
        language: "ES",
      },
      {
        description: "Desarrollar la ingeniería...",
        details:
          "Desarrollar la ingeniería para la lixiviación en tanque agitado de 18Mt de colas a lo largo de 10 años con una ley media de CuSEQ de 0,13% que comenzará a construirse a finales del 2T22 y se pondrá en marcha en el 4T22.",
        language: "ES",
      },
      {
        description: "Instalación de dos aglomeradores...",
        details:
          "Instalación de dos aglomeradores en el 1T21 con una capacidad de 24 ktpd para crear paneles robustos de aglomerado a partir de finos cribados con ácido y agua refinada para mejorar las recuperaciones de lixiviación y la cinética, eliminar la pérdida de cobre contenido en los lodos confinados en las colas por el sistema de clasificación de lodos de tornillo que reemplazó y reducir el consumo de agua.",
        language: "ES",
      },
      {
        description: "Optimizar el consumo de ácido...",
        details:
          "Optimizar el consumo de ácido con la continua supervisión remota de la pila de lixiviación de la solución química la adición selectiva de ácido por sección de la pila de lixiviación.",
        language: "ES",
      },
      {
        description: "Desarrollar internamente un sistema...",
        details:
          "Desarrollar internamente un sistema de envío de flotas móviles que optimice las operaciones, permita la supervisión en tiempo real de la productividad de los equipos y automatice la captura de datos para múltiples sistemas.",
        language: "ES",
      },
      {
        description: "Implementación selectiva de la aireación...",
        details:
          "Implementación selectiva de la aireación de la pila de lixiviación, maximizando la recuperación de cobre, la cinética y la generación de ácido.",
        language: "ES",
      },
      {
        description: "Desarrollo de un circuito para...",
        details:
          "Desarrollo de un circuito para recuperar el molibdeno que produce xxxlbs de metal contenido al mes.",
        language: "ES",
      },
    ]);

    const currentDataHistoryOp = ref(null);
    const modalAddHistoryOp = ref(false);
    const modalEditHistoryOp = ref(false);

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

    const getHistoryOperationsData = async () => {
      try {
        const response = await getHistoryOperations(
          getLanguageForUpdateContent()
        );
        if (response.status === 200) {
          operations.value = response.data;
        }
      } catch (error) {
        console.error("Error fetching history operations:", error);
      }
    };

    const fetchData = async () => {
      try {
        const dataForm = {
          page: "HISTORY",
          language: getLanguageForUpdateContent(),
        };
        const response = await getSectionByPageandlanguage(dataForm);
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
      getHistoryOperationsData();
    });

    const editOperation = (op) => {
      currentDataHistoryOp.value = op;
      modalEditHistoryOp.value = true;

      showInfoToast("Edit the text: " + op.description);
    };

    const deleteOperation = async (op) => {
      try {
        const response = await deleteHistoryOperation(op.id);
        if (response.status === 200) {
          operations.value = operations.value.filter(
            (operation) => operation.id !== op.id
          );
          if (getLanguageForUpdateContent() === "EN") {
            showSuccessToast("Operation deleted successfully");
          } else {
            showSuccessToast("Operación eliminada con éxito");
          }
        }
      } catch (error) {
        console.error("Error deleting operation:", error);
      }
    };

    const addOperation = () => {
      modalAddHistoryOp.value = true;
    };

    return {
      BASEURL,
      language: getLanguageForUpdateContent(),
      changeLanguage,
      filterData,
      operations,
      openEditModal,
      updateDialogVisible,
      updateText,
      dialogVisible,
      currentText,
      currentTextId,
      editOperation,
      deleteOperation,
      currentDataHistoryOp,
      modalAddHistoryOp,
      modalEditHistoryOp,
      addOperation,
      getHistoryOperationsData
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

.operations-table {
  width: 100%;
  border-collapse: collapse;
}

.operations-table th,
.operations-table td {
  padding: 8px 12px;
  border: 1px solid #ddd;
}

.expand-icon {
  cursor: pointer;
}

/* Botones de editar y eliminar */
.btn-table {
  margin-right: 8px;
  padding: 12px 12px;
  border-radius: 50%;
  max-width: 40px;
  max-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-edit-op {
  background-color: #ed8739;
  color: white;
  border: none;
}
.btn-edit-op:hover {
  background-color: #943b0e;
}
.btn-delete-op {
  background-color: #f44336;
  color: white;
  border: none;
}
.btn-delete-op:hover {
  background-color: #941c1a;
}

.btn-add-op {
  background-color: #4caf50;
  color: white;
  border: none;
}
.btn-add-op:hover {
  background-color: #2e7d32;
}
</style>
