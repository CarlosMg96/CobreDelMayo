<template>
    <v-card class="mx-auto" elevation="16" max-width="100hv">
      <v-card-item>
        <v-card-title> Secciones </v-card-title>
  
        <v-card-subtitle>
          Listado de Secciones
        </v-card-subtitle>
      </v-card-item>
      <v-card-text>
        <v-row class="gap-y-6">
        <v-col v-for="section in listNameSections" :key="section.id" cols="12" sm="6" md="4" lg="3">
          <div class="section-card">
            <div 
              class="card-background"
              :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
            ></div>
            
            <div class="card-content">
              <h3 class="section-title">{{ section.name }}</h3>
              <div class="button-group text-center">
                <button 
                  @click="goToUpdatePage(section.route)"
                  class="action-btn secondary-btn"
                >
                  <span class="language-tag">Update Content</span> Editar
                </button>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
  
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  import { defineComponent, ref} from "vue";
  import router from "@/router";

  
  export default defineComponent({
    name: "ListSections",
    setup() {
      const imageUrl = "https://www.rami-spare.it/media/images/cache/macchine-movimento-terra-cover_jpg_1024_0_cover_60.jpg";
      const listNameSections = ref([
        { id: 1, name: "About / Nosotros", route: "update-about" },
        { id: 2, name: "ESG", route: "update-esg" },
        { id: 3, name: "History / Historia", route: "update-history" },
        { id: 4, name: "Home / Inicio", route: "update-about" },
        { id: 5, name: "Location / Ubicación", route: "update-about" },
        { id: 6, name: "Operations / Operaciones", route: "update-about"}
      ]);
      const loading = ref(false);
      
  
      const goToUpdatePage = async (nameRoute) => {
        await router.push({ name: nameRoute });
      };

      return {
        listNameSections,
        loading,
        goToUpdatePage,
        imageUrl
      };
    },
  });
  </script>
  
  <style scoped>
  .sections-container {
    background: transparent !important;
  }
  
  .header {
    background: linear-gradient(45deg, #f8fafc 0%, #f1f5f9 100%);
  }
  
  .section-card {
    position: relative;
    height: 280px;
    border-radius: 16px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  .section-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
  
  .card-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    mix-blend-mode: multiply;
  }
  
  .card-content {
    position: relative;
    height: 100%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .section-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 1rem;
    text-shadow: 0 2px 4px rgba(255, 255, 255, 0.3);
  }
  
  .button-group {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
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
  
  .primary-btn {
    background: #3b82f6;
    color: white;
  }
  
  .primary-btn:hover {
    background: #2563eb;
    box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3);
  }
  
  .secondary-btn {
    background: #f59e0b;
    color: white;
  }
  
  .secondary-btn:hover {
    background: #d97706;
    box-shadow: 0 4px 6px rgba(245, 158, 11, 0.3);
  }
  
  .language-tag {
    font-size: 0.75rem;
    background: rgba(255, 255, 255, 0.2);
    padding: 2px 6px;
    border-radius: 4px;
  }
  </style>
  