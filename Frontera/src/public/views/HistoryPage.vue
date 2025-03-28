<template>
    <div class="piedras-verdes-container">
      <!-- Sección histórica -->
      <div class="history-section">
        <h1>Frontera Copper Corporation built the Piedras Verdes Mine and started commercial production in 2006.</h1>
        
        <div class="image-placeholder right-image">
          <img src="https://placehold.co/300x200/2d3748/fff?text=Mine+Photo" alt="Piedras Verdes Mine">
        </div>
        
        <p>The mine was capital-constrained, mining was subcontracted at a high cost, and leaching was undertaken on a run-of-mine basis with poor metallurgical recoveries. In the context of low copper prices prevailing during the financial crisis, the mine suspended operations in 2008.</p>
        
        <p>Invecture Group made a tender offer for Frontera that was successfully concluded in May 2009.</p>
        
        <div class="image-placeholder left-image">
          <img src="https://placehold.co/250x150/2d3748/fff?text=Investment" alt="Investment">
        </div>
        
        <p>Invecture Group invested over $450m to convert the Piedras Verdes Mine from a run-of-mine heap leach operation to multiple process streams, increasing production and reducing unit costs.</p>
        
        <p>Kupari Metals built a floatation plant adjacent to the Piedras Verdes deposit and started operations in 4012, which allowed Frontera the ability to optimize the value of certain ore types which offering better economics when processed by flotation.</p>
        
        <p>From 1Q20 through 2Q21, Piedras Verdes was placed on Care and Maintenance in the context of the Covid pandemic and low copper prices. During this time, much test work was undertaken and significant operational improvements were identified, analyzed, and implemented.</p>
      </div>
  
      <!-- Divider -->
      <div class="divider-line"></div>
  
      <!-- Sección de resultados -->
      <div class="results-section">
        <h2>As a result, over the past three years, Piedras Verdes has:</h2>
        
        <p class="reserve-expansion">Expanded the mineral reserve from 628kt of contained copper to 934 kt with a combination of exploration drilling and developing an NSR-driven block model at $3.50/lb copper.</p>
        
        <h3>Grown and optimized operations by</h3>
        
        <!-- Tabla expandible -->
        <div class="operations-table">
          <div 
            v-for="(op, index) in operations" 
            :key="index" 
            class="operation-row"
            @click="toggleExpand(index)"
          >
            <div class="operation-description">
              <span>{{ op.description }}</span>
              <span class="expand-icon">{{ expandedIndex === index ? '−' : '+' }}</span>
            </div>
            <div v-if="expandedIndex === index" class="operation-details">
              <p>{{ op.details }}</p>
              <img 
                v-if="op.image" 
                :src="op.image" 
                :alt="'Diagram of ' + op.description"
                class="detail-image"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const expandedIndex = ref(null);
  
  const operations = ref([
    { 
      description: "Expanding the capacity...", 
      details: "Increased processing capacity from 15,000 to 25,000 tons per day through optimized circuit design.",
      image: "https://placehold.co/400x200/4a5568/fff?text=Capacity+Diagram"
    },
    { 
      description: "Developing the engineering for agitated tank leaching of 18Mt tails over ten years at an average CoSEQ grade of 0.13%.",
      details: "Implemented innovative tailings reprocessing technology to recover residual copper.",
      image: "https://placehold.co/400x200/4a5568/fff?text=Leaching+Process"
    },
    // ... otros items con la misma estructura
  ]);
  
  const toggleExpand = (index) => {
    expandedIndex.value = expandedIndex.value === index ? null : index;
  };
  </script>
  
  <style scoped>
  .piedras-verdes-container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #2d3748;
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    margin-top: 92px !important;
  }
  
  h1 {
    font-size: 1.8rem;
    color: #1a365d;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
  
  h2 {
    font-size: 1.5rem;
    color: #1a365d;
    margin: 2rem 0 1rem;
  }
  
  h3 {
    font-size: 1.3rem;
    color: #2b6cb0;
    margin: 1.5rem 0;
  }
  
  p {
    margin-bottom: 1.2rem;
    line-height: 1.6;
  }
  
  .reserve-expansion {
    background-color: #ebf8ff;
    padding: 1rem;
    border-left: 4px solid #3182ce;
    margin: 1.5rem 0;
  }
  
  .divider-line {
    border-top: 2px solid #cbd5e0;
    margin: 2.5rem 0;
  }
  
  /* Estilos para imágenes */
  .image-placeholder {
    margin: 1.5rem 0;
    border: 1px dashed #cbd5e0;
    padding: 5px;
  }
  
  .right-image {
    float: right;
    margin-left: 1.5rem;
  }
  
  .left-image {
    float: left;
    margin-right: 1.5rem;
  }
  
  /* Tabla de operaciones */
  .operations-table {
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    overflow: hidden;
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
    background-color: #f7fafc;
    font-weight: 500;
  }
  
  .operation-description:hover {
    background-color: #ebf8ff;
  }
  
  .expand-icon {
    font-weight: bold;
    font-size: 1.2rem;
    color: #3182ce;
  }
  
  .operation-details {
    padding: 1rem 1.2rem 1.5rem;
    background-color: white;
    border-top: 1px solid #edf2f7;
  }
  
  .detail-image {
    margin-top: 1rem;
    width: 100%;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
  }
  </style>