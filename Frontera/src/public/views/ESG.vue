<template>
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
                    >Piedras Verdes funds the operating budget of the Instituto
                    Tecnológico de Cajeme, which provides undergraduate
                    education in engineering and management science</strong
                  >
                </p>
              </div>

              <p>
                Piedras Verdes funds and supports the Festival Alfonso Ortíz
                Tirado, an annual musical weekend in Alamos, Sonora, that
                attracts visitors from across the country, showcases the Sonora
                Symphony Orchestra, and combines classical music, jazz, and
                contemporary genres.
              </p>

              <div class="back-zone-image">
                <p class="lead-rigth-text left-text">
                  In cooperation with the municipality of Alamos, Piedras Verdes
                  funds a temporary employment program for the local fishing
                  communities.
                In cooperation with the municipality of Alamos, Piedras Verdes
                funds a temporary employment program for the local fishing
                communities.
              </p>

              <p class="lead-rigth-text right-text">
                We have created and managed various programs to support the
                health of local children. Likewise, we are actively
                participating in the management of the local food bank, which is
                accessible by anyone in need.
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
        <div class="section-header">
          <div class="number-circle">120</div>
          <h2>Water and Environment</h2>
        </div>

        <div class="content-with-image reverse">
          <div class="image-placeholder left">
            <img
              src="https://placehold.co/300x200/4b5563/fff?text=Water+Analysis"
              alt="Water Management"
            />
          </div>

          <div class="text-content">
            <ul class="bullet-list">
              <li>
                <strong>A</strong> Produce Workers are researching environmental
                inequalities in addition to operating in compliance with both
                national and international regulations, we focus on serving our
                local conditions.
              </li>
              <li>
                2022 has been included in how we work across our small towns and
                centres, and will EESG awareness for the benefit of the nation's
                world.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Divisor -->
      <div class="section-divider"></div>

      <!-- Sección Salud y Seguridad -->
      <section class="topic-section">
        <div class="section-header">
          <div class="number-circle">120</div>
          <h2>Health and Safety</h2>
        </div>

        <div class="two-column-content">
          <div class="column">
            <p>
              We promote the use of a lack of our people's fat and tolerance for
              safety controls across the world, against increased standards due
              to key factors that prevention will lead us down the path of new
              accidents.
            </p>
          </div>

          <div class="column">
            <p>
              We take risk assessments and job safety analyses at the home of
              our day-to-day work. The contractors' improvement of our
              procedures requires more than 50 employees and contractors receive
              assistance regarding training to ensure operational safety,
              emphasizing them who manage higher-risk locations.
            </p>

            <div class="image-placeholder full-width">
              <img
                src="https://placehold.co/600x200/4b5563/fff?text=Safety+Training"
                alt="Safety Procedures"
              />
            </div>

            <p>
              None of the types of our staff are of substance risk levels, and
              each being a je part of our core awareness, we integrate it to
              ensure a potential health site or an environment as a priority,
              recognizing that the resilience of work directly influences the
              success of any operations.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getLanguage, BASEURL } from "@/kernel/utils";

const languaje = ref(getLanguage());
</script>

<style scoped>
.esg-page {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 1.6;
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

/* Estilos de tipografía */
h1 {
  font-size: 2.2rem;
  color: #1a365d;
  margin-bottom: 1.8rem;
  border-bottom: 2px solid #e2e8f0;
  padding-bottom: 0.5rem;
}

h2 {
  font-size: 1.8rem;
  color: #2c5282;
  margin-left: 1rem;
}

.lead-text {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

/* Layout de secciones */
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

/* Componentes visuales */
.highlight-box {
  background-color: #ebf8ff;
  border-left: 4px solid #3182ce;
  padding: 1.2rem;
  margin: 1.5rem 0;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.number-circle {
  background-color: #2b6cb0;
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

/* Lista con viñetas especiales */
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
  color: #2b6cb0;
}

/* Placeholders de imágenes */
.image-placeholder {
  width: 100%; /* Asegura que la imagen ocupe todo el espacio disponible */
  height: auto; /* Mantiene la proporción de la imagen */
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

/* Estilos para el texto de la sección de comunidades */
.back-zone-image {
  display: flex;
  justify-content: space-between;
  gap: 3rem; /* Espacio mayor entre columnas */
  margin: 2rem 0;
  width: 220%; /* Hace que el contenedor sea más ancho */
  position: relative;
  z-index: 1;
}

.lead-rigth-text {
  font-size: 1.1rem;
  line-height: 1.8;
  flex: 1;
  min-width: 45%; /* Asegura que cada columna tenga buen espacio */
}

.left-text {
  padding-right: 1.5rem; /* Espacio interno derecho */
}

.right-text {
  padding-left: 1.5rem; /* Espacio interno izquierdo */
}


</style>
