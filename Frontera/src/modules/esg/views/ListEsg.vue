<template>
  <v-card class="mx-auto" elevation="16" max-width="100hv">
    <v-card-item>
      <v-card-title> ESG </v-card-title>

      <v-card-subtitle>
        Listado de ESG
        <v-btn color="primary" @click="goToCreateEsg" class="ml-3">
          Nuevo ESG
        </v-btn>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-text-field
        v-model="search"
        label="Buscar ESG"
        outlined
        dense
        clearable
      ></v-text-field>

      <v-data-table
        v-model:items-per-page="size"
        :headers="headersSelected"
        :items="filteredEsg"
        :loading="loading"
        fixed-header
        @update:page="fetchEsg"
      >
        <template #item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>
              <v-chip
                :color="item.status === 'active' ? 'success' : 'error'"
                label
                outlined
              >
                {{ item.status === "active" ? "Activo" : "Inactivo" }}
              </v-chip>
            </td>
            <td>{{ item.language }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.created_at }}</td>
            <td>
              <template v-if="item.status === 'active'">
                <v-tooltip text="Eliminar" location="top">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      v-bind="props"
                      @click="deleteEsgFuntion(item)"
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
                      @click="deleteEsgFuntion(item)"
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
                    @click="editEsg(item)"
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
                    @click="showEsgInfo(item)"
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
import { getAllESG, deleteEsg } from "../services/esg-service";
import { showSuccessToast } from "@/kernel/alerts";

export default defineComponent({
  name: "ListEsg",
  setup() {
    const listEsg = ref([]);
    const search = ref("");
    const page = ref(1);
    const size = ref(10);
    const totalElements = ref(0);
    const loading = ref(false);

    // Definimos los encabezados (sin la columna "content")
    const headersSelected = ref([
      { text: "#", value: "id" },
      { text: "Estado", value: "status" },
      { text: "Idioma", value: "language" },
      { text: "Título", value: "title" },
      {text: "Creado el", value: "created_at"},
      { text: "Fecha", value: "date" },
      { text: "Acciones", sortable: false },
    ]);

    const fetchEsg = async () => {
      loading.value = true;
      try {
        const response = await getAllESG({ page: page.value, size: size.value });
        console.log("Response ESG:", response);
        listEsg.value = response.data.content;
        totalElements.value = response.data.totalElements;
      } catch (error) {
        console.error("Error fetching esg:", error);
      } finally {
        loading.value = false;
      }
    };

    // Filtro de noticias con búsqueda
    const filteredEsg = computed(() => {
      return listEsg.value.filter((esgItem) => {
        return esgItem.title
          .toLowerCase()
          .includes(search.value.toLowerCase());
      });
    });

    const goToCreateEsg = async () => {
      await router.push({ name: "create-esg" });
    };

    const editEsg = (item) => {
      console.log("Edit esg:", item);
      // router.push({ name: 'edit-esg', params: { id: item.id } });
    };

    const deleteEsgFuntion = async (item) => {
        let message = item.status === "active" ? "desactivar" : "activar";
        let status = item.status === "active" ? "Inactivo" : "Activo";
      if (confirm(`¿Estás seguro de ${message} la noticia "${item.title}"?`)) {
        try {
          const data = {
            id: item.id,
            status: item.status === "active" ? "inactive" : "active",
          };
          let result = await deleteEsg(data);
          console.log("Response delete Esg:", result);
          if (result.status === 200) {
            await fetchEsg();
            showSuccessToast(`Noticia "${item.title}" se ${status} correctamente`);
            item.status = status;
          }
        } catch (error) {
          console.error("Error deleting esg:", error);
        }
      }
    };

    onMounted(fetchEsg);

    return {
      listEsg,
      search,
      page,
      size,
      totalElements,
      loading,
      headersSelected,
      filteredEsg,
      goToCreateEsg,
      editEsg,
      deleteEsgFuntion,
      fetchEsg,
    };
  },
});
</script>

<style scoped>
.btn-accion {
  margin: 0 5px;
}
</style>
