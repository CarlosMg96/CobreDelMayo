<template>
  <div class="operations-page">
    <section class="about-hero">
      <div class="hero-overlay">
        <div v-if="languaje == 'EN'">
          <h1>Operations</h1>
        </div>
        <div v-else>
          <h1>Operaciones</h1>
        </div>
      </div>
    </section>

    <section class="mining_process">
      <div v-if="languaje == 'EN'" class="text-center">
        <h1>Mining and Process</h1>
        <h3>Conventional Open Pit Mine</h3>
        <p>The PV deposit is mined by conventional open-pit mining methods.</p>
      </div>
      <div v-else class="text-center">
        <h1>Minería y Proceso</h1>
        <h3>Mina convencional a cielo abierto</h3>
        <p>
          El yacimiento de PV se explota mediante métodos convencionales de
          minería a cielo abierto
        </p>
      </div>
    </section>

    <section class="mining-cards">
      <section class="mining-section">
        <div class="container-mining">
          <div class="mining-grid">
            <div class="mining-card">
              <div v-if="languaje == 'EN'">
                <p>
                  The pit is 4x2 km and operates 4 to 6 simultaneous faces; the
                  Cerro Chato satellite pit is 1.5km west of the main pit.
                </p>
              </div>
              <div v-else>
                <p>
                  El tajo es de 4x2 km y opera de 4 a 6 fases simultáneas, el
                  tajo satélite Cerro Chato está ubicado a 1,5 km al oeste del
                  tajo principal
                </p>
              </div>
            </div>

            <div class="mining-card">
              <div v-if="languaje == 'EN'">
                <p>
                  Mining follows a traditional drill, blast, load, haul, and
                  dump sequence.
                </p>
              </div>
              <div v-else>
                <p>
                  La minería sigue una secuencia tradicional de perforación,
                  voladura, carga, acarreo y vertido
                </p>
              </div>
            </div>

            <div class="mining-card">
              <div v-if="languaje == 'EN'">
                <p>
                  Waste is hauled to dumps located north and northeast of the
                  current pit configuration.
                </p>
              </div>
              <div v-else>
                <p>
                  Los residuos se transportan a vertederos situados al norte y
                  al noreste de la configuración actual del pozo
                </p>
              </div>
            </div>

            <div class="mining-card">
              <div v-if="languaje == 'EN'">
                <p>
                  Mining Rate Life of Mine (LOM): ~200ktpd of material moved
                  (~60 ktpd of ore) LoM average.
                </p>
              </div>
              <div v-else>
                <p>
                  Ritmo de extracción Vida útil de la mina (LOM): ~200 ktpd de
                  material movido (~60 ktpd de mineral) promedio de LOM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section class="only-mining-container">
      <div class="only-mining-content">
        <div v-if="languaje == 'EN'">
          <h1 class="only-mining-title">Mining</h1>
          <p class="only-mining-intro">The PV mobile mining fleet includes:</p>
        </div>
        <div v-else>
          <h1 class="only-mining-title">Minería</h1>
          <p class="only-mining-intro">La flota minera móvil de PV incluye::</p>
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

          <div v-if="languaje == 'EN'">
            <!-- Elementos posicionados alrededor del círculo -->
            <div class="only-mining-item only-mining-trucks">
              <h2>26 Caterpillar 789 and<br />10 777 haul trucks</h2>
            </div>

            <div class="only-mining-item only-mining-shovels">
              <h3>2 Terex RH200 and one<br />Caterpillar 6040 shovel</h3>
            </div>

            <div class="only-mining-item only-mining-loaders">
              <h3>3 Caterpillar 994 and<br />one 992 front end loaders</h3>
            </div>

            <div class="only-mining-item only-mining-drills">
              <h3>
                4 Sandvick D75KS<br />conventional blast hole drills<br />and 1
                Powerrock D60 truck drill
              </h3>
            </div>

            <div class="only-mining-item only-mining-vehicles">
              <h2>
                22 smaller loaders, bulldozers,<br />graders and water trucks
              </h2>
            </div>
          </div>

          <div v-else>
            <!-- Elementos posicionados alrededor del círculo -->
            <div class="only-mining-item only-mining-trucks">
              <h2>26 camiones de acarreo Caterpillar 789 y<br />10 777</h2>
            </div>

            <div class="only-mining-item only-mining-shovels">
              <h3>2 excavadoras Terex RH200 y una<br />Caterpillar 6040</h3>
            </div>

            <div class="only-mining-item only-mining-loaders">
              <h3>3 cargadoras frontales Caterpillar 994 y<br />una 992</h3>
            </div>

            <div class="only-mining-item only-mining-drills">
              <h3>
                4 perforadoras convencionales Sandvick D75KS<br />y 1
                Powerrock D60
              </h3>
            </div>

            <div class="only-mining-item only-mining-vehicles">
              <h2>
                22 cargadoras, bulldozers,<br />motoniveladoras y camiones de
                agua más pequeños
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
          The mobile fleet maintenance facility is staffed by 130 highly
          experienced employees. The facility can perform all major component
          overhauls except engines.
        </p>
      </div>
    </section>

    <div class="esg-section">
      <div style="margin-left: 24px; margin-bottom: 24px">
        <div v-if="languaje === 'EN'">
          <h1>Process Streams</h1>
          <div class="divider"></div>
          <p>
            The ore is selectively mined and processed as a function of its
            grade, mineralization, acid consumption, leaching, and flotation
            characteristics:
          </p>
        </div>
        <div v-else>
          <h1>Flujos de Proceso</h1>
          <div class="divider"></div>
          <p>
            El mineral se extrae selectivamente y se procesa en función de su
            ley, mineralización, consumo de ácido, lixiviación y características
            de flotación:
          </p>
        </div>
      </div>

      <div v-if="languaje === 'EN'">
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
              <h3>Oxide and Supergene Crushed Ore</h3>
              <p>
                Medium-grade oxides and supergene leachable ores are hauled to a
                50+ ktpd primary crusher that feeds screens and secondary
                crushers with a capacity of 45ktpd. Ore is transported to leach
                pads by conveyor stacking systems to minimize cost and
                compaction. Screened fines are drum agglomerated with fresh
                water and concentrated sulfuric acid by two Feeco agglomerators
                with a combined capacity of 24ktpd.
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
              <h3>ROM and Crushed Chalcopyrite Ore</h3>
              <p>
                Leached at 40ºC to 65ºC to reduce passivation on engineered pads
                insulated against wind, with automated forced aeration and
                temperature control.
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
              <h3>Ore for Tolling:</h3>
              <p>
                When the expected NSR from the sale of primary and to a lesser
                degree, secondary sulfide ores is greater than that might be
                achieved by leaching, chalcopyrite ore (typically with lower
                pyrite and higher acid consumption) and selected high-grade
                chalcocite ore is crushed by a dedicated system and sold to
                Kupari for floatation.
              </p>
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
                :src="`${BASEURL}/img/process-01.jpg`"
                alt="minerales"
                width="400px"
                height="200px"
              />
            </div>
            <div class="esg-content">
              <h3>Óxido y mineral triturado supergénico</h3>
              <p>
                Los óxidos de grado medio y los minerales lixiviables
                supergénicos se transportan a una trituradora primaria de una
                capacidad de 50+ ktpd que alimenta cribas y trituradoras
                secundarias con una capacidad de 40ktpd (en una expansión de 45
                ktdp). El mineral se transporta a las plataformas de lixiviación
                mediante un sistema de apilamiento por cinta transportadora para
                minimizar los costes y la compactación. Los finos cribados se
                aglomeran en tambor con agua fresca y ácido sulfúrico
                concentrado mediante dos aglomeradores de Feeco con una
                capacidad combinada de 24ktpd.
              </p>
            </div>
          </div>

          <!-- Tarjeta Salud y Seguridad -->
          <div class="esg-card">
            <div class="esg-image-placeholder">
              <img
                :src="`${BASEURL}/img/process-02.jpg`"
                alt="calpopirita"
                width="400px"
                height="200px"
              />
            </div>
            <div class="esg-content">
              <h3>ROM y mineral de calcopirita triturado</h3>
              <p>
                Lixiviado a 40ºC a 65ºC para reducir la pasivación en
                plataformas de ingeniería aisladas contra el viento, con
                aireación forzada automatizada y control de temperatura
              </p>
            </div>
          </div>

          <!-- Tarjeta Agua y Medio Ambiente -->
          <div class="esg-card">
            <div class="esg-image-placeholder">
              <img
                :src="`${BASEURL}/img/process-04.jpg`"
                alt="mineral-para-maquila"
                width="400px"
                height="200px"
              />
            </div>
            <div class="esg-content">
              <h3>Mineral para maquila:</h3>
              <p>
                Cuando la expectativa NSR para la venta es mayor que el que
                podría lograrse por lixiviación, el mineral de calcopirita
                (normalmente con menor pirita y mayor consumo de ácido) y el
                mineral de calcocita seleccionado de alta ley se tritura
                mediante un sistema dedicado y se vende a Kupari para su
                flotación. Los subproductos incluyen oro, plata y molibdeno.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { BASEURL, getLanguage } from "@/kernel/utils";

const languaje = ref(getLanguage());
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
  color: #222;
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
