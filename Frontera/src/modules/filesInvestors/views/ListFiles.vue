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
            <v-btn class="btn-add-user" @click="newUser">
              <v-icon class="fa-solid fa-plus"></v-icon>
              Nuevo Documento
            </v-btn>
          </v-col>
        </v-row>
      </v-card-subtitle>
    </v-card-item>
    <v-card-text>
      <v-data-table
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="usersContent"
        :loading="loading"
        :search="search"
        item-value="name"
        @update:options="loadItems"
      >
        <template #item="{ item }">
          <tr>
            <td>{{ item.id }}</td>
            <td>
              <span :class="getStatusBadge(item.status).badgeClass">
                {{ getStatusBadge(item.status).text }}
              </span>
            </td>
            <td>{{ item.area }}</td>
            <td>{{ item.role }}</td>
            <td>{{ item.fullname }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.updated_at }}</td>
            <td>
              <template v-if="item.status === 'ACTIVE'">
                <v-tooltip text="Eliminar" location="top">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      v-bind="props"
                      @click="deleteUser(item)"
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
                      @click="deleteUser(item)"
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
                    @click="editUser(item)"
                  >
                    <v-icon class="fa-solid fa-pencil"></v-icon>
                  </v-btn>
                </template>
              </v-tooltip>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
<!-- <ModalAddUser :is-visible-user="showModalAddUser" @update:visible="showModalAddUser = $event" @update:users="loadItems()"  /> -->
<!-- <ModalEditUser :is-visible="showModalEditUser" :user="selectedUser"  @update:visible="showModalEditUser = $event" @update:users="loadItems()"  /> -->
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
// import { getUsersService, deleteUserService } from "../services/user-service";
// import ModalAddUser from "../components/ModalAddUser.vue";
// import ModalEditUser from "../components/ModalEditUser.vue";
// import { showSuccessToast } from "@/kernel/alerts";

const users = ref({
  content: [],
  totalElements: 0,
  page: 0,
  size: 25,
});

const itemsPerPage = ref(25);
const loading = ref(false);
const search = ref("");
const showModalAddUser = ref(false);
const showModalEditUser = ref(false);
const selectedUser = ref(null);

const headers = ref([
  { title: "#", key: "id" },
  { title: "File", key: "status" },
  { title: "Author", key: "area" },
  { title: "Subido el", key: "role" },
  { title: "", key: "actions", sortable: false },
]);

const usersContent = computed(() => users.value.content);

onMounted(() => {
  loadItems();
});

const loadItems = async () => {
  loading.value = true;
  // try {
  //   const params = {
  //     page: users.value.page,
  //     size: itemsPerPage.value,
  //     search: search.value,
  //   };
  //   const result = await getUsersService(params);
  //   users.value = result.data;
  // } catch (error) {
  //   console.log(error);
  // } finally {
  //   loading.value = false;
  // }
};

const deleteUser = async (params) => {
  console.log(params);
  // const user_status = params.status === "ACTIVE" ? "se desactivo" : "se activo";
  // const data  = {
  //   id: params.id,
  //   status: params.status
  // }
  // const result = await deleteUserService(data);
  // if (result.status === 200) {
  //   loadItems();
  //   showSuccessToast(`El usuario ${user_status} correctamente`);
  // }
};

const editUser = (user) => {
  selectedUser.value = user;
  showModalEditUser.value = true;
};

const newUser = async () => {
  showModalAddUser.value = true;
};

const getStatusBadge = (status) => {
  if (!status) {
    return {
      text: "Desconocido",
      badgeClass: "badge-unknown",
    };
  }

  let text = "";
  let badgeClass = "";

  switch (status.toUpperCase()) {
    case "ACTIVE":
      text = "Activo";
      badgeClass = "badge-active";
      break;
    case "INACTIVE":
      text = "Inactivo";
      badgeClass = "badge-inactive";
      break;
    default:
      text = status;
      badgeClass = "badge-default";
      break;
  }

  return {
    text,
    badgeClass,
    showModalAddUser,
  };
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
.fa-pencil:hover {
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
