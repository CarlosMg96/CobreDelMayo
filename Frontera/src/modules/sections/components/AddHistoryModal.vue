<template>
  <v-dialog
    v-model="dialogVisibleAddHistoryOp"
    max-width="600px"
  >
    <div class="custom-modal">
      <div class="modal-header">
        <h3>{{ translations[contentLanguage].title }}</h3>
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
            v-model="title"
            type="text"
            id="title"
            placeholder="Enter title"
            class="input-field"
          />
        </div>

        <!-- Campo para la descripción -->
        <div class="input-group">
          <label for="description" class="input-label">
            {{ translations[contentLanguage].descriptionLabel }}
          </label>
          <textarea
            v-model="description"
            id="description"
            placeholder="Enter description"
            class="input-field"
            maxlength="255"
            rows="4"
          ></textarea>
        </div>
      </div>
      <div class="modal-actions">
        <button class="save-btn" @click="saveText">
          {{ translations[contentLanguage].save }}
        </button>
        <button class="cancel-btn" @click="closeDialog">
          {{ translations[contentLanguage].cancel }}
        </button>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import { ref, computed, watch } from "vue";
import { showSuccessToast } from "@/kernel/alerts";
import { createHistoryOperation } from "../services/history-operations";
import { getLanguageForUpdateContent } from "@/kernel/utils";

export default {
  name: "AddHistoryModal",
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["update:visible", "save-text"],
  setup(props, { emit }) {
    const title = ref("");
    const description = ref("");
    const dialogVisibleAddHistoryOp = ref(props.visible);

    // Actualiza `dialogVisibleAddHistoryOp` cada vez que el prop `visible` cambie
    watch(() => props.visible, (newVal) => {
      dialogVisibleAddHistoryOp.value = newVal;
    });

    const contentLanguage = computed(() => {   
      return getLanguageForUpdateContent(); 
    });

    const translations = {
      EN: {
        title: "Add history operation content",
        editingContent: "Updating Content",
        save: "Save",
        cancel: "Cancel",
        titleLabel: "Title",
        descriptionLabel: "Description",
      },
      ES: {
        title: "Agregar contenido de operación de historia",
        editingContent: "Actualizando Contenido",
        save: "Guardar",
        cancel: "Cancelar",
        titleLabel: "Título",
        descriptionLabel: "Descripción",
      },
    };

    const closeDialog = () => {
      dialogVisibleAddHistoryOp.value = false;
      emit("update:visible", false);
    };

    const saveText = async() => {
     try {
      const dataForm = {
        title: title.value,
        description: description.value,
        language: contentLanguage.value,
      };

      const result = await createHistoryOperation(dataForm); 
      if (result.status == 200) {
        if (contentLanguage.value == 'EN') {
          showSuccessToast("Content saved successfully!"); // Muestra un mensaje de éxito
        }else{
          showSuccessToast("¡Contenido guardado con éxito!"); // Muestra un mensaje de éxito
        }       
      emit("save-text"); 
      closeDialog();
      }
     } catch (error) {
      console.error("Error saving text:", error);
     }
    };

    return {
      dialogVisibleAddHistoryOp,
      translations,
      contentLanguage,
      closeDialog,
      saveText,
      title,
      description,
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
