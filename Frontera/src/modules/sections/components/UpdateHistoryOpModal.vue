<template>
  <!-- Usamos v-model en vez de :value para manejar la visibilidad del modal -->
  <v-dialog v-model="isDialogVisible" max-width="600px">
    <div class="custom-modal">
      <div class="modal-header">
        <h3>{{ translations[contentLanguage].editTitle }}</h3>
      </div>
      <div class="modal-content">
        <label class="input-label">
          {{ translations[contentLanguage].editingContent }}
        </label>

        <!-- Campo para el título -->
        <div class="input-group">
          <label for="title" class="input-label">
            {{ translations[contentLanguage].titleLabel }}
          </label>
          <input
            v-model="editedTitle"
            type="text"
            id="title"
            placeholder="Enter title"
            class="input-field"
            required
          />
        </div>

        <!-- Campo para la descripción -->
        <div class="input-group">
          <label for="description" class="input-label">
            {{ translations[contentLanguage].descriptionLabel }}
          </label>
          <textarea
            v-model="editedDescription"
            id="description"
            placeholder="Enter description"
            class="input-field"
            maxlength="255"
            rows="4"
            required
          ></textarea>
        </div>
      </div>
      <div class="modal-actions">
        <button class="save-btn" @click="saveChanges">
          {{ translations[contentLanguage].save }}
        </button>
        <button class="cancel-btn" @click="closeModal">
          {{ translations[contentLanguage].cancel }}
        </button>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import { ref, computed, watch } from "vue";
import { showSuccessToast } from "@/kernel/alerts";
import { getLanguageForUpdateContent } from "@/kernel/utils"; // Asume que tienes un método para obtener el idioma
import { updateHistoryOperation } from "../services/history-operations";

export default {
  name: "UpdateHistoryOpModal",
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    currentContent: {
      type: Object,
      default: null, // Esto asegura que nunca sea null si no se pasa el valor
    },
  },
  emits: ["update:visible", "save-changes"],
  setup(props, { emit }) {
    // Usar valores predeterminados si currentContent es null
    const editedTitle = ref(props.currentContent?.title || "");
    const editedDescription = ref(props.currentContent?.description || "");

    const contentLanguage = computed(() => getLanguageForUpdateContent()); // Obtener el idioma del contenido

    const translations = {
      EN: {
        editTitle: "Edit Content",
        editingContent: "Editing the content",
        save: "Save Changes",
        cancel: "Cancel",
        titleLabel: "Title",
        descriptionLabel: "Description",
      },
      ES: {
        editTitle: "Editar Contenido",
        editingContent: "Editando el contenido",
        save: "Guardar Cambios",
        cancel: "Cancelar",
        titleLabel: "Título",
        descriptionLabel: "Descripción",
      },
    };

    // Para cambiar el estado del dialogo
    const isDialogVisible = computed({
      get() {
        return props.visible;
      },
      set(value) {
        emit("update:visible", value); // Emitir un evento para cambiar la visibilidad
      },
    });

    // Cerrar el modal
    const closeModal = async () => {
      isDialogVisible.value = false; // Esto actualizará el valor de `visible` en el componente padre
    };

    // Método para guardar los cambios
    const saveChanges = async () => {
      try {
        const updatedContent = {
          id: props.currentContent?.id, // Asegúrate de que currentContent no sea null
          description: editedTitle.value,
          details: editedDescription.value,
          language: getLanguageForUpdateContent(),
        };

        const result = await updateHistoryOperation(updatedContent);
        if (result.status === 200) {
          console.log("Content updated successfully:", result.data);
          if (updatedContent.id) {
            emit("save-changes", updatedContent);
            showSuccessToast(
              contentLanguage.value === "EN"
                ? "Content updated successfully!"
                : "¡Contenido actualizado con éxito!"
            );
            closeModal(); // Cerrar modal después de guardar
          } else {
            console.error("ID is missing. Cannot update content.");
          }
        }
      } catch (error) {
        console.error("Error updating content:", error);
      }
    };

    // Verificar cuando currentContent cambia
    watch(
      () => props.currentContent,
      (newContent) => {
        if (newContent) {
          editedTitle.value = newContent.description;
          editedDescription.value = newContent.details;
        }
      },
      { immediate: true }
    );

    return {
      editedTitle,
      editedDescription,
      contentLanguage,
      translations,
      isDialogVisible,
      closeModal,
      saveChanges,
    };
  },
};
</script>

<style scoped>
.custom-modal {
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.modal-header {
  padding-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 20px;
}

.modal-header h3 {
  margin: 0;
  font-size: 1.5rem;
  color: #2c3e50;
}

.input-label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #34495e;
  font-size: 0.875rem;
}

.input-group {
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

.textarea {
  resize: none;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 20px;
}

.cancel-btn,
.save-btn {
  padding: 10px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.cancel-btn {
  background-color: #f5f6fa;
  color: #7f8c8d;
}

.cancel-btn:hover {
  background-color: #e0e0e0;
}

.save-btn {
  background-color: #3498db;
  color: white;
}

.save-btn:hover {
  background-color: #2980b9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
