<template>
    <div class="communities-container">
      <!-- Sección Principal -->
      <section class="main-section">
        <h1>Local Communities</h1>
        
        <div class="content-with-image">
          <div class="text-content">
            <p class="lead-text">The social development of the surrounding communities of the decentralized supervisors in PK's stores is the opportunity, motivation to open dialogue and dialogue for all of them in its communities.</p>
            
            <div class="highlight-box">
              <p><strong>Produce leaders from the upcoming budget of the Institute Investigator & Cigarette, which provides undergraduate education on engineering and management centers.</strong></p>
            </div>
            
            <p>Produce leaders from the next year are the crucial drivers to the Institute, an overall mental reminder in Business Science, that organizations have access the country. Moreover this fosters simplicity, creativity, and consistent cultural mixes, jazz, and contemporary genres.</p>
            
            <p>In cooperation with the municipality of Albany, Produce leaders have been planning employment programs for the local labor communities.</p>
            
            <p>We have extended our thorough service programs to support the needs of local students. However, we are excited by a welcoming path to management of the local labor schools to contribute for anyone in need.</p>
          </div>
          
          <div class="image-placeholder right">
            <img src="https://placehold.co/350x250/4b5563/fff?text=Community+Engagement" alt="Community Activities">
          </div>
        </div>
      </section>
  
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
            <img src="https://placehold.co/300x200/4b5563/fff?text=Water+Analysis" alt="Water Management">
          </div>
          
          <div class="text-content">
            <ul class="bullet-list">
              <li>
                <strong>A</strong> Produce Workers are researching environmental inequalities in addition to operating in compliance with both national and international regulations, we focus on serving our local conditions.
              </li>
              <li>
                2022 has been included in how we work across our small towns and centres, and will EESG awareness for the benefit of the nation's world.
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
            <p>We promote the use of a lack of our people's fat and tolerance for safety controls across the world, against increased standards due to key factors that prevention will lead us down the path of new accidents.</p>
          </div>
          
          <div class="column">
            <p>We take risk assessments and job safety analyses at the home of our day-to-day work. The contractors' improvement of our procedures requires more than 50 employees and contractors receive assistance regarding training to ensure operational safety, emphasizing them who manage higher-risk locations.</p>
            
            <div class="image-placeholder full-width">
              <img src="https://placehold.co/600x200/4b5563/fff?text=Safety+Training" alt="Safety Procedures">
            </div>
            
            <p>None of the types of our staff are of substance risk levels, and each being a je part of our core awareness, we integrate it to ensure a potential health site or an environment as a priority, recognizing that the resilience of work directly influences the success of any operations.</p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  // Lógica Vue opcional puede ir aquí
  </script>
  
  <style scoped>
  .communities-container {
    font-family: 'Arial', sans-serif;
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
    border: 1px dashed #cbd5e0;
    padding: 8px;
    background-color: #f8fafc;
  }
  
  .image-placeholder.right {
    margin-left: 2rem;
    flex: 0 0 35%;
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
  </style>