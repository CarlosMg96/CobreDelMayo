<template>
  <v-dialog v-model="dialogVisible" max-width="600px">
    <div class="custom-modal">
      <div class="modal-header">
        <h3>{{ translations[contentLanguage].title }}</h3>
      </div>
      <div class="modal-content">
        <label class="input-label">
          {{ translations[contentLanguage].editingContent }}
          {{ pageNames[contentLanguage][currentPage] }}
        </label>
        <textarea
          v-model="editedText"
          class="custom-textarea"
          rows="4"
        ></textarea>
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
import { ref, watch, computed } from "vue";
import { getLanguageForUpdateContent } from "@/kernel/utils";
import { updateSection } from "../services/sections-service"; 
import { showSuccessToast } from "@/kernel/alerts";

export default {
  name: "EditTextModal",
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    currentText: {
      type: String,
      required: true,
    },
    textId: {
      type: String,
      required: true,
    },
    currentPage: {
      type: String,
      required: true,
      validator: (value) =>
        ["ABOUT", "ESG", "HISTORY", "HOME", "LOCATION", "OPERATIONS"].includes(
          value
        ),
    },
  },
  emits: ["update:visible", "save-text"],
  setup(props, { emit }) {
    const translations = {
      EN: {
        title: "Edit Text",
        editingContent: "Updating Content for",
        save: "Save",
        cancel: "Cancel",
      },
      ES: {
        title: "Editar Texto",
        editingContent: "Actualizando Contenido de",
        save: "Guardar",
        cancel: "Cancelar",
      },
    };

    const pageNames = {
      EN: {
        ABOUT: "About",
        ESG: "ESG",
        HISTORY: "History",
        HOME: "Home",
        LOCATION: "Location",
        OPERATIONS: "Operations",
      },
      ES: {
        ABOUT: "Nosotros",
        ESG: "ESG",
        HISTORY: "Historia",
        HOME: "Inicio",
        LOCATION: "Ubicación",
        OPERATIONS: "Operaciones",
      },
    };

    const contentLanguage = computed(() => {
      return getLanguageForUpdateContent(props.textId);
    });

    const dialogVisible = ref(props.visible);
    const editedText = ref(props.currentText);
    const currentLanguage = ref(getLanguageForUpdateContent());

    watch(
      () => props.visible,
      (newValue) => {
        dialogVisible.value = newValue;
      }
    );

    watch(
      () => props.currentText,
      (newValue) => {
        editedText.value = newValue;
      }
    );

    const closeDialog = () => {
      dialogVisible.value = false;
      emit("update:visible", false);
    };

    const saveText = async() => {
      emit("save-text", { id: props.textId, text: editedText.value });
        const updatedText = {
          section_id: props.textId,
          description: editedText.value,
        };
        let result = await updateSection(updatedText);
        if (result.status === 200) {
            if(currentLanguage.value === "EN") {
                showSuccessToast("Text updated successfully");
            } else {
                showSuccessToast("Texto actualizado con éxito");
            }
        }
      closeDialog();
    };

    return {
      dialogVisible,
      editedText,
      translations,
      pageNames,
      contentLanguage,
      closeDialog,
      saveText,
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

.custom-textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid #bdc3c7;
  border-radius: 6px;
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
  transition: border-color 0.3s ease;
}

.custom-textarea:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
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
