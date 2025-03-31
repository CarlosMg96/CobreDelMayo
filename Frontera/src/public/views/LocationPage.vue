<template>
  <div class="location-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="hero-overlay">
        <div v-if="languaje == 'EN'">
          <h1>Location</h1>
        </div>
        <div v-else>
          <h1>Ubicación y acceso</h1>
        </div>
      </div>
    </section>

    <!-- Historia del Hotel -->
    <section class="history-section container">
      <div class="section-header">
        <div v-if="languaje == 'EN'">
          <h2>
            The Piedras Verdes Mine is located near Alamos and Navojoa towns in
            Sonora, in a safe, politically stable, and developed historic mining
            region.
          </h2>
        </div>
        <div v-else>
          <h2>
            La mina Piedras Verdes está situada cerca de las localidades de
            Álamos y Navojoa en Sonora, es segura, políticamente estable y
            desarrollo histórico en una región minera.
          </h2>
        </div>
        <div class="divider"></div>
      </div>

      <!-- History -->
      <section class="philosophy-section">
        <div class="container">
          <div class="philosophy-grid">
            <div class="philosophy-card">
              <div v-if="languaje == 'EN'">
                <p>
                  It benefits from several direct access roads to public
                  highways, and the proximity to the main north-south railway
                  and two deep-water ports (Guaymas 255 km and Topolobampo 248
                  km).
                </p>
              </div>
              <div v-else>
                <p>
                  Se beneficia de varias vías de acceso directo a las carreteras
                  públicas y de la proximidad a la principal línea ferroviaria
                  norte-sur y a dos puertos de agua profunda (Guaymas 255 km y
                  Topolobampo 248 km)
                </p>
              </div>
            </div>

            <div class="philosophy-card">
              <div v-if="languaje == 'EN'">
                <p>
                  Mexico is a member of the Organization for Economic
                  Cooperation and Development ("OECD") and the World Trade
                  Organization and has free trade agreements in place with 48
                  countries (including the EU and all TPP member countries).
                </p>
              </div>
              <div v-else>
                <p>
                  México es miembro de la Organización para la Cooperación y el
                  Desarrollo Económico ("OCDE") y de la Organización Mundial del
                  Comercio y tiene acuerdos de libre comercio con 48 países
                  (incluyendo la UE y todos los países miembros del TPP)
                </p>
              </div>
            </div>

            <div class="philosophy-card">
              <div v-if="languaje == 'EN'">
                <p>
                  Mexico is a stable mining jurisdiction with a modern legal and
                  regulatory framework. These factors differentiate Mexico from
                  other major copper-producing countries that have experienced
                  greater economic, political, and labor relations and similar
                  risks.
                </p>
              </div>
              <div v-else>
                <p>
                  México es estable a la jurisdicción minera con un marco legal
                  y regulatorio moderno. Estos factores diferencian a México de
                  otros grandes países productores de cobre que han
                  experimentado mayores riesgos económicos, políticos, laborales
                  y similares
                </p>
              </div>
            </div>

            <div class="philosophy-card">
              <div v-if="languaje == 'EN'">
                <p>
                  Its advantaged location allows our management and front-line
                  employees to live in attractive surroundings with access to
                  excellent schools and universities. This provides a
                  significant competitive advantage in recruiting and retaining
                  competent management and a skilled labor force.
                </p>
              </div>
              <div v-else>
                <p>
                  Su ventajosa ubicación ofrece a nuestros directivos y
                  empleados de primera línea la oportunidad de vivir en un
                  entorno atractivo con acceso a excelentes escuelas y
                  universidades. Esto nos proporciona una importante ventaja
                  competitiva a la hora de contratar y retener a directivos
                  competentes y a una mano de obra cualificada.
                </p>
              </div>
            </div>

            <div class="philosophy-card">
              <div v-if="languaje == 'EN'">
                <p>
                  Sonora is the largest copper-producing state in Mexico,
                  accounting for 75.6% of copper production in 2022. Total
                  copper production in Mexico was ~ 753 kt in 2022.
                </p>
              </div>
              <div v-else>
                <p>
                  Sonora es el mayor estado productor de cobre en México, con el
                  81% de la producción de cobre en 2020. La producción de cobre
                  en México fue de ~ 730kt en 2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section class="image-section">
      <div class="image-content-blue">
        <img
          :src="`${BASEURL}/img/bg-location.jpg`"
          alt="Location Map"
          class="location-map"
        />
      </div>
    </section>

    <section>
      <div v-if="languaje == 'EN'">
        <div class="location-info">
          <div class="location-header">
            <h3>21 km from Alamos and 50 km from Navojoa</h3>
          </div>

          <div class="transport-grid">
            <div class="transport-item">
              <div class="icon-container">
                <span class="icon">✈️</span>
              </div>
              <div class="transport-details">
                <h4>Air</h4>
                <p>
                  Ciudad Obregón International Airport is located<br />111 km
                  (~75 min drive) from the mine
                </p>
              </div>
            </div>

            <div class="transport-item">
              <div class="icon-container">
                <span class="icon">🚂</span>
              </div>
              <div class="transport-details">
                <h4>Rail</h4>
                <p>50 km to the mainline north-south railway in Navojoa</p>
              </div>
            </div>

            <div class="transport-item">
              <div class="icon-container">
                <span class="icon">🛣️</span>
              </div>
              <div class="transport-details">
                <h4>Road</h4>
                <p>Connected by a 14 km access road to a paved highway</p>
              </div>
            </div>

            <div class="transport-item">
              <div class="icon-container">
                <span class="icon">⚓</span>
              </div>
              <div class="transport-details">
                <h4>Port</h4>
                <p>
                  ~250 km from the deep-water ports of Guaymas and Topolobampo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="location-info">
          <div class="location-header">
            <h3>A 21 km de Álamos y a 50 km de Navojoa</h3>
          </div>

          <div class="transport-grid">
            <div class="transport-item">
              <div class="icon-container">
                <span class="icon">✈️</span>
              </div>
              <div class="transport-details">
                <h4>Aire</h4>
                <p>
                  El aeropuerto internacional de Ciudad Obregón se encuentra a
                  111 km (~75 minutos en coche) del sitio
                </p>
              </div>
            </div>

            <div class="transport-item">
              <div class="icon-container">
                <span class="icon">🚂</span>
              </div>
              <div class="transport-details">
                <h4>Fedocarril</h4>
                <p>
                  A 50 km de la línea principal de ferrocarril norte-sur en
                  Navojoa
                </p>
              </div>
            </div>

            <div class="transport-item">
              <div class="icon-container">
                <span class="icon">🛣️</span>
              </div>
              <div class="transport-details">
                <h4>Carretera</h4>
                <p>
                  Conectado por una carretera de acceso de 14 km a una autopista
                  pavimentada
                </p>
              </div>
            </div>

            <div class="transport-item">
              <div class="icon-container">
                <span class="icon">⚓</span>
              </div>
              <div class="transport-details">
                <h4>Puerto</h4>
                <p>
                  A unos ~250 km de los puertos de aguas profundas de Guaymas y
                  Topolobampo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container_infrastructure">
        <div v-if="languaje == 'EN'">
          <div class="text-section_infrastructure">
            <h1>Infrastructure</h1>
            <p>
              All infrastructure is in place and located close to the mine. PV
              is easily accessible by all modes of transport, including air
              transport from the Ciudad Obregón International Airport and Alamos
              domestic airport, road transport, rail transport through Sonora’s
              mainline north-south railway that passes through Navojoa, and
              ocean transport at the port of Guaymas and Topolobampo from which
              copper concentrate is blended and exported by both trading and
              mining companies.
            </p>
            <p class="highlight_infrastructure">
              The PV Mine has ten titled water concessions that grant its access
              to water resources.
            </p>
            <p>
              It has direct access to the Mexican Federal Electricity Commission
              (Comisión Federal de Electricidad) high-voltage grid, with a
              continuous capacity of 25 MW of electricity at a current cost of
              approximately $0.06/kWh purchased on the renewable Wholesale
              Electricity Market.
            </p>
            <p>
              Sulfuric acid used for heap leaching is purchased from the Grupo
              México smelter, but it is also available from other sources.
            </p>
          </div>
        </div>
        <div v-else>
          <div class="text-section_infrastructure">
            <h1>Infraestructura</h1>
            <p>
              Toda la infraestructura está en su lugar y ubicada cerca de la
              mina. PV es fácilmente accesible por todos los modos de
              transporte, incluido el transporte aéreo desde el aeropuerto
              internacional de Ciudad Obregón y el aeropuerto nacional de
              Alamos, transporte por carretera, transporte ferroviario a través
              de la línea principal norte-sur de Sonora que pasa por Navojoa y
              transporte marítimo en el puerto de Guaymas y Topolobampo desde
              donde se mezcla y exporta concentrado de cobre tanto por empresas
              comerciales como mineras.
            </p>
            <p class="highlight_infrastructure">
              La mina PV tiene diez concesiones de agua tituladas que le otorgan
              acceso a recursos hídricos.
            </p>
            <p>
              Tiene acceso directo a la red de alta tensión de la Comisión
              Federal de Electricidad (Comisión Federal de Electricidad), con
              una capacidad continua de 25 MW de electricidad a un costo actual
              de aproximadamente $0.06/kWh comprada en el Mercado Eléctrico
              Mayorista renovable.
            </p>
            <p>
              El ácido sulfúrico utilizado para el lixiviado en pilas se compra
              a la fundición del Grupo México, pero también está disponible en
              otras fuentes.
            </p>
          </div>
        </div>
        <div class="image-section_infrastructure">
          <img
            :src="`${BASEURL}/img/location-infrastructure.png`"
            alt="Infrastructure"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getLanguage, BASEURL } from "@/kernel/utils";

const languaje = ref(getLanguage());
</script>

<style scoped>
.location-map {
  width: 100%;
  height: 100%;
}
/* Estilos base */
.location-page {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 2.2rem;
  color: #2c3e50;
}

.divider {
  width: 80px;
  height: 3px;
  background-color: #e67e22;
  margin: 15px auto 20px;
}

/* Hero Section */
.about-hero {
  height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("http://localhost:3000/api/public/img/bg-location.jpg") center/cover
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
}

/* Historia Section */
.history-section {
  padding: 80px 0;
}

/* Filosofía Section */
.philosophy-section {
  background-color: #f9f9f9;
  padding: 80px 0;
}

.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.philosophy-card {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
}

.philosophy-card:hover {
  transform: translateY(-10px);
}

/* Image Section */
.image-content-blue {
  height: 80%;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Location Info */
.location-info {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  color: #333;
  margin-top: 48px !important;
  margin-bottom: 48px !important;
}

.location-header h3 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 1.2rem;
  color: #555;
}

.transport-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.transport-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.icon-container {
  background-color: #f0f0f0;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon {
  font-size: 24px;
}

.transport-details h4 {
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  color: #222;
}

.transport-details p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.4;
  color: #666;
}

/* Responsive */
@media (max-width: 768px) {
  .philosophy-grid {
    grid-template-columns: 1fr;
  }

  .transport-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .about-hero h1 {
    font-size: 2.5rem;
  }

  .section-header h2 {
    font-size: 1.8rem;
  }
}

.container_infrastructure {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
  padding-left: 200px;
  padding-right: 200px;
}

.text-section_infrastructure {
  margin-right: 100px;
  font-family: Arial, sans-serif;
  color: #333;
}

.text-section_infrastructure h1 {
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 2rem;
  font-weight: bold;
}

.text-section_infrastructure p {
  font-size: 1rem;
  line-height: 1.5;
}

.text-section .highlight_infrastructure {
  color: red;
  font-weight: bold;
}

.image-section_infrastructure {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-section_infrastructure img {
  width: 400px;
}

.image-section_infrastructure img:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

@media screen and (max-width: 768px) {
  .container_infrastructure {
    flex-direction: column;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
  }

  .text-section_infrastructure,
  .image-section_infrastructure {
    width: 100%;
    padding: 0 20px;
  }

  .image-section_infrastructure img {
    margin-top: 36px;
  }
}
</style>
