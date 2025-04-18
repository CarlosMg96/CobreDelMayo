<template>
  <v-card class="mx-auto" elevation="16" max-width="100vw">
    <v-card-item>
      <v-card-title> Documentos</v-card-title>
      <v-card-subtitle>
        <v-row>
          <v-col cols="12"> Administración de Documentos </v-col>
        </v-row>

        <v-row style="margin-left: 16px; margin-right: 16px">
          <v-col cols="6">
            <v-field-label
              v-model="search"
              append-icon="fa-solid fa-search"
              label="Buscar"
              single-line
              hide-details
            ></v-field-label>
          </v-col>

          <v-col cols="6" class="text-right">
            <div v-if="role === 'ADMIN' || role === 'SUPERADMIN'">
              <v-btn class="btn-add-user" @click="newFile">
              <v-icon class="fa-solid fa-plus"></v-icon>
              Nuevo Documento
            </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card-subtitle>
    </v-card-item>
    <v-card-text>
      <v-data-table
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="filesContent"
        :loading="loading"
        :search="search"
        item-value="name"
        @update:options="loadItems"
      >
        <template #item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>{{ item.file_name }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.quarter }}</td>
            <td>{{ item.year }}</td>
            <td>{{ item.author}}</td>
            <td>{{ item.created_at }}</td>
            <td>
              <v-tooltip text="Ver pdf" location="top">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      v-bind="props"
                      class="btn-accion"
                      icon
                      @click="seeMore(item)"
                    >
                      <v-icon class="fa-solid fa-file"></v-icon>
                    </v-btn>
                  </template>
                </v-tooltip>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
  <ModalAddFile
    :isVisiblePdf="showModalAddFile"
    @update:visible="showModalAddFile = $event"
    @update:files="loadItems()"
  />
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { getFiles } from "../services/files-service";
import  ModalAddFile  from "../components/ModalAddDocument.vue";
import { BASEURL, getRoleByToken } from "@/kernel/utils";

const files = ref({
  content: [],
  totalElements: 0,
  page: 0,
  size: 25,
});

const itemsPerPage = ref(25);
const loading = ref(false);
const search = ref("");
const showModalAddFile = ref(false);
const role = ref(null);
// const showModalEditFile = ref(false);
// const selectedFile = ref(null);

const headers = ref([
  { title: "#", key: "id" },
  { title: "Nombre del archivo", key: "file_name" },
  { title: "Categoría", key: "category" },
  { title: "Trimestre", key: "quarter" },
  { title: "Año", key: "year" },
  { title: "Subido por", key: "author" },
  { title: "Subido el", key: "created_at" },
  { title: "", key: "actions", sortable: false },
]);

const filesContent = computed(() => files.value.content);

onMounted(async() => {
  loadItems();
  role.value = await getRoleByToken();
});

const loadItems = async () => {
  loading.value = true;
  try {
    const params = {
      page: files.value.page,
      size: itemsPerPage.value,
      search: search.value,
    };
    const result = await getFiles(params);

    if (result && result.status === 200) {

      if (Array.isArray(result.data.content)) {
        files.value = result.data;
      } else {
        files.value.content = result.data;
      }
    }
  } catch (error) {
    console.log("Error al cargar archivos:", error);
  } finally {
    loading.value = false;
  }
};

const seeMore = (file) => {
  let url = BASEURL + file.file_path;
  window.open(url, "_blank");
};


// const deleteFile = async (params) => {
//   console.log(params);
//   // const user_status = params.status === "ACTIVE" ? "se desactivo" : "se activo";
//   // const data  = {
//   //   id: params.id,
//   //   status: params.status
//   // }
//   // const result = await deleteUserService(data);
//   // if (result.status === 200) {
//   //   loadItems();
//   //   showSuccessToast(`El usuario ${user_status} correctamente`);
//   // }
// };

// const editFile = (user) => {
//   selectedFile.value = user;
//   showModalEditFile.value = true;
// };

const newFile = async () => {
  showModalAddFile.value = true;
};

</script>

<style scoped>
.badge-active {
  background-color: yellowgreen;
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
}

.badge-inactive {
  background-color: red;
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
}

.badge-unknown {
  background-color: orange;
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
}

.badge-default {
  background-color: blue;
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
}

.btn-accion {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 4px;
  color: orange;
}
.fa-trash:hover {
  color: red;
}
.fa-file:hover {
  color: rgb(34, 99, 127);
}
.fa-eye:hover {
  color: rgb(79, 127, 34);
}
.fa-circle-check:hover {
  color: green;
}
.btn-add-user {
  background-color: black;
  color: white;
}

.btn-add-user:hover {
  background-color: orange;
  color: #000;
}
</style>
