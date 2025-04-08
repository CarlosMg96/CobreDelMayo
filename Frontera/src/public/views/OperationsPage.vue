<template>
  <div class="operations-page">
    <section class="about-hero">
      <div class="hero-overlay">
        <div>
          <h1 style="color: white !important"><span v-html="filterData('OPERATIONS_01_' + language)"></span></h1>
        </div>
      </div>
    </section>

    <section class="mining_process">
      <div class="text-center">
        <h1><span v-html="filterData('OPERATIONS_02_' + language)"></span></h1>
        <h3><span v-html="filterData('OPERATIONS_03_' + language)"></span></h3>
        <p><span v-html="filterData('OPERATIONS_04_' + language)"></span></p>
      </div>
    </section>

    <section class="mining-cards">
      <section class="mining-section">
        <div class="container-mining">
          <div class="mining-grid">
            <div class="mining-card">
              <div>
                <p>
                  <span v-html="filterData('OPERATIONS_05_' + language)"></span>
                </p>
              </div>
            </div>

            <div class="mining-card">
              <div>
                <p>
                  <span v-html="filterData('OPERATIONS_06_' + language)"></span>
                </p>
              </div>
            </div>

            <div class="mining-card">
              <div>
                <p>
                  <span v-html="filterData('OPERATIONS_07_' + language)"></span>
                </p>
              </div>
            </div>

            <div class="mining-card">
              <div>
                <p>
                  <span v-html="filterData('OPERATIONS_08_' + language)"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section class="only-mining-container">
      <div class="only-mining-content">
        <div>
          <h1 class="only-mining-title"><span v-html="filterData('OPERATIONS_09_' + language)"></span></h1>
          <p class="only-mining-intro"><span v-html="filterData('OPERATIONS_10_' + language)"></span></p>
        </div>

        <div class="only-mining-layout">
          <!-- Círculo central con imagen de fondo -->
          <div class="only-mining-circle">
            <img
              class="only-mining-background"
              src="https://via.placeholder.com/400"
              alt="Mining site"
            />
          </div>

          <!-- Imagen de la máquina Terex a la izquierda -->
          <div class="only-mining-machine only-mining-machine-left">
            <img
              src="http://localhost:3000/api/public/img/terex.png"
              alt="Terex Machine"
            />
          </div>

          <!-- Imagen de la máquina Caterpillar a la derecha -->
          <div class="only-mining-machine only-mining-machine-right">
            <img
              src="http://localhost:3000/api/public/img/caterpillar.png"
              alt="Caterpillar Machine"
            />
          </div>

          <div>
            <!-- Elementos posicionados alrededor del círculo -->
            <div class="only-mining-item only-mining-trucks">
              <h2><span v-html="filterData('OPERATIONS_11_' + language)"></span></h2>
            </div>

            <div class="only-mining-item only-mining-shovels">
              <h3><span v-html="filterData('OPERATIONS_12_' + language)"></span></h3>
            </div>

            <div class="only-mining-item only-mining-loaders">
              <h3><span v-html="filterData('OPERATIONS_14_' + language)"></span></h3>
            </div>

            <div class="only-mining-item only-mining-drills">
              <h3>
                <span v-html="filterData('OPERATIONS_15_' + language)"></span>
              </h3>
            </div>

            <div class="only-mining-item only-mining-vehicles">
              <h2>
                <span v-html="filterData('OPERATIONS_16_' + language)"></span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div
        class="text-center"
        style="margin-top: 256px; margin-left: 56px; margin-right: 56px"
      >
        <p>
          <span v-html="filterData('OPERATIONS_17_' + language)"></span>
        </p>
      </div>
    </section>

    <div class="esg-section">
      <div style="margin-left: 24px; margin-bottom: 24px">
        <div>
          <h1><span v-html="filterData('OPERATIONS_18_' + language)"></span></h1>
          <div class="divider"></div>
          <p>
            <span v-html="filterData('OPERATIONS_19_' + language)"></span>
          </p>
        </div>
      </div>

      <div>
        <div class="esg-container">
          <!-- Tarjeta Comunidades -->
          <div class="esg-card">
            <div class="esg-image-placeholder">
              <img
                :src="`${BASEURL}/img/process-01.jpg`"
                alt="minerals"
                width="400px"
                height="200px"
              />
            </div>
            <div class="esg-content">
              <h3><span v-html="filterData('OPERATIONS_20_' + language)"></span></h3>
              <p>
                <span v-html="filterData('OPERATIONS_21_' + language)"></span>
              </p>
            </div>
          </div>

          <!-- Tarjeta Salud y Seguridad -->
          <div class="esg-card">
            <div class="esg-image-placeholder">
              <img
                :src="`${BASEURL}/img/process-02.jpg`"
                alt="chalcopyrite"
                width="400px"
                height="200px"
              />
            </div>
            <div class="esg-content">
              <h3><span v-html="filterData('OPERATIONS_22_' + language)"></span></h3>
              <p>
                <span v-html="filterData('OPERATIONS_23_' + language)"></span>
              </p>
            </div>
          </div>

          <!-- Tarjeta Agua y Medio Ambiente -->
          <div class="esg-card">
            <div class="esg-image-placeholder">
              <img
                :src="`${BASEURL}/img/process-04.jpg`"
                alt="ore-for-tolling"
                width="400px"
                height="200px"
              />
            </div>
            <div class="esg-content">
              <h3><span v-html="filterData('OPERATIONS_24_' + language)"></span></h3>
              <p>
                <span v-html="filterData('OPERATIONS_25_' + language)"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getLanguage, BASEURL } from "@/kernel/utils";
import { getSectionByPageandlanguage } from "@/modules/sections/services/sections-service";

const language = ref(getLanguage());

const dataOperations = ref([
  {
    section_id: "OPERATIONS_01_EN",
    description: "Operations",
  },
  {
    section_id: "OPERATIONS_01_ES",
    description: "Operaciones",
  },
  {
    section_id: "OPERATIONS_02_EN",
    description: "Mining and Process",
  },
  {
    section_id: "OPERATIONS_02_ES",
    description: "Minería y Procesos",
  },
  {
    section_id: "OPERATIONS_03_EN",
    description:
      "Conventional Open Pit Mine",
  },
  {
    section_id: "OPERATIONS_03_ES",
    description:
      "Mina convencional a cielo abierto",
  },
  {
    section_id: "OPERATIONS_04_EN",
    description:
      "The PV deposit is mined by conventional open-pit mining methods.",
  },
  {
    section_id: "OPERATIONS_04_ES",
    description:
      "El yacimiento de PV se explota mediante métodos convencionales de minería a cielo abierto ",
  },
  {
    section_id: "OPERATIONS_05_EN",
    description:
      "The pit is 4x2 km and operates 4 to 6 simultaneous faces; the Cerro Chato satellite pit is 1.5km west of the main pit.",
  },
  {
    section_id: "OPERATIONS_05_ES",
    description:
      "El tajo es de 4x2 km y opera de 4 a 6 fases simultáneas, el tajo satélite Cerro Chato está ubicado a 1,5 km al oeste del tajo principal",
  },
  {
    section_id: "OPERATIONS_06_EN",
    description:
      "Mining follows a traditional drill, blast, load, haul, and dump sequence.",
  },
  {
    section_id: "OPERATIONS_06_ES",
    description:
      "La minería sigue una secuencia tradicional de perforación, voladura, carga, acarreo y vertido",
  },
  {
    section_id: "OPERATIONS_07_EN",
    description: "Waste is hauled to dumps located north and northeast of the current pit configuration.",
  },
  {
    section_id: "OPERATIONS_07_ES",
    description: "Los residuos se transportan a vertederos situados al norte y al noreste de la configuración actual del pozo",
  },
  {
    section_id: "OPERATIONS_08_EN",
    description:
      "Mining Rate Life of Mine (LOM): ~200ktpd of material moved (~60 ktpd of ore) LoM average.",
  },
  {
    section_id: "OPERATIONS_08_ES",
    description:
      "Ritmo de extracción Vida útil de la mina (LOM): ~200 ktpd de material movido (~60 ktpd de mineral) promedio de LOM ",
  },
  {
    section_id: "OPERATIONS_09_EN",
    description:
      "Mining",
  },
  {
    section_id: "OPERATIONS_09_ES",
    description:
      "Minería",
  },
  {
    section_id: "OPERATIONS_10_EN",
    description: "The PV mobile mining fleet includes:",
  },
  {
    section_id: "OPERATIONS_10_ES",
    description: "La flota minera móvil de PV incluye:",
  },
  {
    section_id: "OPERATIONS_11_EN",
    description:
      "26 Caterpillar 789 and<br />10 777 haul trucks",
  },
  {
    section_id: "OPERATIONS_11_ES",
    description:
      "26 Caterpillar 789 y<br />10 camionetas 777 de arrastre",
  },
  {
    section_id: "OPERATIONS_12_EN",
    description:
      "2 Terex RH200 and one<br />Caterpillar 6040 shovel",
  },
  {
    section_id: "OPERATIONS_12_ES",
    description:
      "2 Terex RH200 y una pala<br />Caterpillar 6040",
  },
  {
    section_id: "OPERATIONS_14_EN",
    description:
      "3 Caterpillar 994 and<br />one 992 front end loaders",
  },
  {
    section_id: "OPERATIONS_15_EN",
    description:
      "4 Sandvick D75KS<br />conventional blast hole drills<br />and 1 Powerrock D60 truck drill",
  },
  {
    section_id: "OPERATIONS_16_EN",
    description:
      "22 smaller loaders, bulldozers,<br />graders and water trucks",
  },
  {
    section_id: "OPERATIONS_17_EN",
    description:
      "TThe mobile fleet maintenance facility is staffed by 130 highly experienced employees. The facility can perform all major component overhauls except engines.",
  },
  {
    section_id: "OPERATIONS_18_EN",
    description:
      "Process Streams",
  },
  {
    section_id: "OPERATIONS_19_EN",
    description:
      "The ore is selectively mined and processed as a function of its grade, mineralization, acid consumption, leaching, and flotation characteristics:",
  },
  {
    section_id: "OPERATIONS_20_EN",
    description:
      "Oxide and Supergene Crushed Ore",
  },
  {
    section_id: "OPERATIONS_21_EN",
    description:
      "Medium-grade oxides and supergene leachable ores are hauled to a 50+ ktpd primary crusher that feeds screens and secondary crushers with a capacity of 45ktpd. Ore is transported to leach pads by conveyor stacking systems to minimize cost and compaction. Screened fines are drum agglomerated with fresh water and concentrated sulfuric acid by two Feeco agglomerators with a combined capacity of 24ktpd.",
  },
  {
    section_id: "OPERATIONS_22_EN",
    description:
      "ROM and Crushed Chalcopyrite Ore",
  },
  {
    section_id: "OPERATIONS_23_EN",
    description:
      "Leached at 40ºC to 65ºC to reduce passivation on engineered pads insulated against wind, with automated forced aeration and temperature control.",
  },
  {
    section_id: "OPERATIONS_24_EN",
    description:
      "Ore for Tolling:",
  },
  {
    section_id: "OPERATIONS_25_EN",
    description:
      "When the expected NSR from the sale of primary and to a lesser degree, secondary sulfide ores is greater than that might be achieved by leaching, chalcopyrite ore (typically with lower pyrite and higher acid consumption) and selected high-grade chalcocite ore is crushed by a dedicated system and sold to Kupari for floatation.",
  },
  {
    section_id: "OPERATIONS_14_ES",
    description:
      "3 cargadoras frontales Caterpillar 994 y<br />una 992",
  },
  {
    section_id: "OPERATIONS_15_ES",
    description:
      "4 perforadoras convencionales Sandvick D75KS<br />y 1 Powerrock D60",
  },
  {
    section_id: "OPERATIONS_16_ES",
    description:
      "22 cargadoras, bulldozers,<br />motoniveladoras y camiones de agua más pequeños",
  },
  {
    section_id: "OPERATIONS_17_ES",
    description:
      "La instalación de mantenimiento de la flota móvil cuenta con 130 empleados altamente experimentados. Las instalaciones pueden realizar todas las revisiones de los componentes principales, excepto los motores.",
  },
  {
    section_id: "OPERATIONS_18_ES",
    description:
      "Flujos de Proceso",
  },
  {
    section_id: "OPERATIONS_19_ES",
    description:
      "El mineral se extrae selectivamente y se procesa en función de su ley, mineralización, consumo de ácido, lixiviación y características de flotación:",
  },
  {
    section_id: "OPERATIONS_20_ES",
    description:
      "Óxido y mineral triturado supergénico",
  },
  {
    section_id: "OPERATIONS_21_ES",
    description:
      "Los óxidos de grado medio y los minerales lixiviables supergénicos se transportan a una trituradora primaria de una capacidad de 50+ ktpd que alimenta cribas y trituradoras secundarias con una capacidad de 40ktpd (en una expansión de 45 ktdp). El mineral se transporta a las plataformas de lixiviación mediante un sistema de apilamiento por cinta transportadora para minimizar los costes y la compactación. Los finos cribados se aglomeran en tambor con agua fresca y ácido sulfúrico concentrado mediante dos aglomeradores de Feeco con una capacidad combinada de 24ktpd.",
  },
  {
    section_id: "OPERATIONS_22_ES",
    description:
      "ROM y mineral de calcopirita triturado",
  },
  {
    section_id: "OPERATIONS_23_ES",
    description:
      "Lixiviado a 40ºC a 65ºC para reducir la pasivación en plataformas de ingeniería aisladas contra el viento, con aireación forzada automatizada y control de temperatura",
  },
  {
    section_id: "OPERATIONS_24_ES",
    description:
      "Mineral para maquila:",
  },
  {
    section_id: "OPERATIONS_25_ES",
    description:
      "Cuando la expectativa NSR para la venta es mayor que el que podría lograrse por lixiviación, el mineral de calcopirita (normalmente con menor pirita y mayor consumo de ácido) y el mineral de calcocita seleccionado de alta ley se tritura mediante un sistema dedicado y se vende a Kupari para su flotación. Los subproductos incluyen oro, plata y molibdeno.",
  },
]);

const fetchData = async () => {
  try {
    const dataForm = {
      page: "OPERATIONS",
      language: language.value,
    };
    const response = await getSectionByPageandlanguage(dataForm);
    if (response.status === 200) {
      if (parseInt(response.data.length) !== 0) {
        dataOperations.value = response.data;
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const filterData = (found_id) => {
  const filteredData = dataOperations.value.filter(
    (item) => item.section_id === found_id
  );
  return filteredData.length > 0 ? filteredData[0].description : null;
};

onMounted(() => {
  fetchData();
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
    url("http://localhost:3000/api/public/img/bg-tbu.jpg") center/cover
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
  margin-bottom: 48px !important;
}

/* Cards */
.container-mining {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
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
      4,
      1fr
    ); /* Cuatro tarjetas por fila en pantallas grandes */
  }
}

/* Mining Section */
.only-mining-container {
  padding: 80px 20px;
  background-color: #f4f4f4;
  text-align: start;
  height: 1220px;
}

.only-mining-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: orange;
  margin-left: 32px;
}

.only-mining-intro {
  font-size: 1.2rem;
  color: #444;
  margin-bottom: 40px;
  margin-left: 32px;
}

.only-mining-layout {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: auto;
}

.only-mining-circle {
  width: 100%;
  padding-top: 100%;
  border-radius: 50%;
  background-image: url("http://localhost:3000/api/public/img/bg-tbu.jpg");
  position: relative;
  overflow: hidden;
}

.only-mining-background {
  position: absolute;
  width: 5%;
  height: 1%;
  object-fit: cover;
}

.only-mining-item {
  position: absolute;
  width: 256px;
  text-align: center;
  font-weight: bold;
  color: #222;
}

.only-mining-trucks {
  top: 10px;
  left: -15%;
  transform: translateX(-50%);
}
.only-mining-shovels {
  left: -190px;
  top: 90%;
  transform: translateY(-50%);
}
.only-mining-loaders {
  right: -190px;
  top: 10%;
  transform: translateY(-50%);
}
.only-mining-drills {
  bottom: -20px;
  left: 120%;
  transform: translateX(-50%);
}
.only-mining-vehicles {
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
}
.only-mining-machine {
  position: absolute;
  width: 120px;
  height: auto;
}

.only-mining-machine-left {
  left: -160px;
  top: 50%;
  transform: translateY(-50%);
}

/* Animación de entrada */
.only-mining-machine.visible.only-mining-machine-left {
  transform: translateY(-50%) translateX(80px);
}

.only-mining-machine.visible.only-mining-machine-right {
  transform: translateY(-50%) translateX(-80px);
}

.only-mining-machine-right {
  right: -160px;
  top: 50%;
  transform: translateY(-50%);
}

.only-mining-machine img {
  width: 100%;
  height: auto;
  object-fit: contain;
}
.only-mining-machine-left img {
  transform: rotate(10deg);
}
.only-mining-machine-right img {
  transform: rotate(-10deg);
}
.only-mining-machine img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* Estilos de la sección ESG */
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
  margin-top: 48px !important;
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
</style>
