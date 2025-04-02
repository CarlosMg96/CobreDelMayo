<template>
  <v-card class="mx-auto" elevation="16" max-width="100hv">
    <v-card-item>
      <v-card-title> ESG </v-card-title>

      <v-card-subtitle>
        Listado de ESG
        <v-btn color="primary" @click="goToCreateNews" class="ml-3">
          Agregar Noticia
        </v-btn>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-text-field
        v-model="search"
        label="Buscar noticia"
        outlined
        dense
        clearable
      ></v-text-field>

      <v-data-table
        v-model:items-per-page="size"
        :headers="headersSelected"
        :items="filteredNews"
        :loading="loading"
        fixed-header
        @update:page="fetchNews"
      >
        <template #item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>
              <v-chip
                :color="item.status === 'Activo' ? 'success' : 'error'"
                label
                outlined
              >
                {{ item.status === "Activo" ? "Activa" : "Inactiva" }}
              </v-chip>
            </td>
            <td>{{ item.title }}</td>
            <td>{{ item.date }}</td>
            <td>
              <template v-if="item.status === 'Activo'">
                <v-tooltip text="Eliminar" location="top">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      v-bind="props"
                      @click="deleteNewsFuntion(item)"
                      class="btn-accion"
                      icon
                    >
                      <v-icon class="fa-solid fa-trash"></v-icon>
                    </v-btn>
                  </template>
                </v-tooltip>
              </template>

              <template v-else>
                <v-tooltip text="Activar" location="top">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      v-bind="props"
                      @click="deleteNewsFuntion(item)"
                      class="btn-accion"
                      icon
                    >
                      <v-icon class="fa-solid fa-circle-check"></v-icon>
                    </v-btn>
                  </template>
                </v-tooltip>
              </template>

              <v-tooltip text="Editar" location="top">
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    class="btn-accion"
                    icon
                    @click="editNews(item)"
                    disabled
                  >
                    <v-icon class="fa-solid fa-pencil"></v-icon>
                  </v-btn>
                </template>
              </v-tooltip>

              <v-tooltip text="Ver más" location="top">
                <template v-slot:activator="{ props }">
                  <v-btn
                    v-bind="props"
                    class="btn-accion"
                    icon
                    @click="showNewsInfo(item)"
                    disabled
                  >
                    <v-icon class="fa-solid fa-eye"></v-icon>
                  </v-btn>
                </template>
              </v-tooltip>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from "vue";
import router from "@/router";
import { getNews, deleteNews } from "../services/news-service";
import { showSuccessToast } from "@/kernel/alerts";

export default defineComponent({
  name: "ListNews",
  setup() {
    const news = ref([]);
    const search = ref("");
    const page = ref(1);
    const size = ref(10);
    const totalElements = ref(0);
    const loading = ref(false);

    // Definimos los encabezados (sin la columna "content")
    const headersSelected = ref([
      { text: "#", value: "id" },
      { text: "Estado", value: "status" },
      { text: "Título", value: "title" },
      { text: "Fecha", value: "date" },
      { text: "Acciones", sortable: false },
    ]);

    const fetchNews = async () => {
      loading.value = true;
      try {
        const response = await getNews({ page: page.value, size: size.value });
        news.value = response.data.content;
        totalElements.value = response.data.totalElements;
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        loading.value = false;
      }
    };

    // Filtro de noticias con búsqueda
    const filteredNews = computed(() => {
      return news.value.filter((newsItem) => {
        return newsItem.title
          .toLowerCase()
          .includes(search.value.toLowerCase());
      });
    });

    const goToCreateNews = async () => {
      await router.push({ name: "create-news" });
    };

    const editNews = (item) => {
      console.log("Edit news:", item);
      // router.push({ name: 'edit-news', params: { id: item.id } });
    };

    const deleteNewsFuntion = async (item) => {
        let message = item.status === "Activo" ? "desactivar" : "activar";
        let status = item.status === "Activo" ? "Inactivo" : "Activo";
      if (confirm(`¿Estás seguro de ${message} la noticia "${item.title}"?`)) {
        try {
          let result = await deleteNews(item.id);
          if (result.code === 200) {
            await fetchNews();
            showSuccessToast(`Noticia "${item.title}" se ${status} correctamente`);
            item.status = status;
          }
        } catch (error) {
          console.error("Error deleting news:", error);
        }
      }
    };

    onMounted(fetchNews);

    return {
      news,
      search,
      page,
      size,
      totalElements,
      loading,
      headersSelected,
      filteredNews,
      goToCreateNews,
      editNews,
      deleteNewsFuntion,
      fetchNews,
    };
  },
});
</script>

<style scoped>
.btn-accion {
  margin: 0 5px;
}
</style>
