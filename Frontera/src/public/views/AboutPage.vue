<template>
  <div class="frontiba-container">
    <!-- Header con logo y navegación -->
    <header class="header">
      <div class="logo-container">
        <h1>FRONTIBA</h1>
        <p class="subtitle">CORPORATION CORPORATION</p>
      </div>
      
      <nav class="navigation">
        <a href="#" class="nav-link">HOME</a>
        <a href="#" class="nav-link">ABOUT US</a>
        <a href="#" class="nav-link">HISTORY</a>
        <a href="#" class="nav-link">LOCATION</a>
        <a href="#" class="nav-link">OPERATIONS</a>
        <a href="#" class="nav-link">ESQ</a>
        <a href="#" class="nav-link">ES</a>
      </nav>
    </header>

    <!-- Divider -->
    <div class="divider"></div>

    <!-- Contenido principal -->
    <main class="content">
      <section class="about-section">
        <h2>About Us</h2>
        
        <div class="company-info">
          <h3>Frontera Copper Corporation</h3>
          <p>Frontera is a copper mining company that operates the Padras Vardes mine. The mine is located in southern Sonora, 25 minutes from Alamos and 35 minutes from Navojoa, where most employees live.</p>
        </div>
        
        <div class="main-image-placeholder">
          <img src="https://placehold.co/800x300.png" alt="Main Image" width="800" height="300">
        </div>
        
        <div class="mine-details">
          <div class="mine-title-container">
            <h4>Padras Vardes</h4>
            <div class="mine-icon-placeholder">
              <div class="divider"></div>
            </div>
          </div>
          
          <p>is an open-pit copper mine that operates on a conventional basis with a mining rate of ~135ktpd and processes it ore by heap leaching and Solvent Extraction & Electrowinning.</p>
          
          <p>PV mines and processes sulfide and oxide ores, produces London Metals Exchange Grade "A" copper cathodes, and sells primarily hypogene ore that cannot be economically processed by heap leaching to Kupari Metals, an independently-owned tolling company that produces and sells copper concentrates.</p>
        </div>
      </section>
      
      <!-- Sección inferior con logo y columnas -->
      <section class="info-section">
        <div class="footer-logo-placeholder">
          <img src="https://placehold.co/100x100.png" alt="" width="100" height="100">
        </div>
        
        <div class="info-columns">
          <div class="strategy-column">
            <h5>Strategy</h5>
            <p>PV prioritizes safety, care for the community, and sustainability. It will continue to optimize capacity and recovery rates by maximizing the productivity of the mining fleet, minimizing mining dilution as the deposit becomes more highly disseminated, and selectively investing in enhanced processes focused on increasing crushing capacity, the proportion of crushed leach ore that is agglomerated and ore sorting. Investment decisions are driven by payback, internal rates of return, and their carbon footprint. As and when copper prices continue to increase, such investments will become increasingly compelling.</p>
            <p>This will occur while prioritizing safety, care for the community and sustainability.</p>
          </div>
          
          <div class="values-column">
            <h5>Values</h5>
            <p>Our core values are focussed on the health, safety and wellbeing of our employees, contractors and other stakeholders, we operate to world-class environmental, social, and governance standards.</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// Lógica del componente si es necesaria
</script>

<style scoped>
.frontiba-container {
  font-family: Arial, sans-serif;
  color: #333;
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.logo-container h1 {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
}

.subtitle {
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
}

.navigation {
  display: flex;
  gap: 20px;
}

.nav-link {
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.divider {
  height: 1px;
  background-color: #ddd;
  margin: 0 20px;
}

.content {
  padding: 20px;
}

.about-section h2 {
  font-size: 1.8rem;
  margin-bottom: 30px;
}

.company-info h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.main-image-placeholder {
  width: 100%;
  height: 300px;
  background-color: #e0e0e0;
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
}

.mine-details h4 {
  display: inline-block;
  font-size: 1.3rem;
  margin-right: 10px;
}

.mine-title-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.mine-icon-placeholder {
  width: 40px;
  height: 40px;
  background-color: #e0e0e0;
  display: inline-block;
}

.footer-logo-placeholder {
  width: 100%;
  height: 100px;
  background-color: #f0f0f0;
  margin: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
}

.info-columns {
  display: flex;
  gap: 40px;
}

.strategy-column,
.values-column {
  flex: 1;
}

.strategy-column {
  border-right: 1px solid #ddd;
  padding-right: 20px;
}

.values-column {
  padding-left: 20px;
}

h5 {
  font-size: 1.2rem;
  margin-bottom: 15px;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .navigation {
    margin-top: 15px;
    flex-wrap: wrap;
  }
  
  .info-columns {
    flex-direction: column;
  }
  
  .strategy-column {
    border-right: none;
    border-bottom: 1px solid #ddd;
    padding-right: 0;
    padding-bottom: 20px;
  }
  
  .values-column {
    padding-left: 0;
    padding-top: 20px;
  }
}
</style>