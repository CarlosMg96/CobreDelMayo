<template>
  <v-dialog
    v-model="dialogVisible"
    max-width="600px"
    @after-enter="initializeQuill"
  >
    <div class="custom-modal">
      <div class="modal-header">
        <h3>{{ translations[contentLanguage].title }}</h3>
      </div>
      <div class="modal-content">
        <label class="input-label">
          {{ translations[contentLanguage].editingContent }}
          {{ pageNames[contentLanguage][currentPage] }}
        </label>

        <!-- Contenedor para el editor Quill con dos partes: toolbar y contenido -->
        <div class="quill-editor-full">
          <div ref="quillToolbar" class="quill-toolbar">
            <!-- Barra de herramientas definida de forma explícita -->
            <span class="ql-formats">
              <button class="ql-bold"></button>
              <button class="ql-italic"></button>
              <button class="ql-underline"></button>
            </span>
          </div>

          <!-- Contenedor para el editor, separado de la barra de herramientas -->
          <div ref="quillEditor" class="quill-editor-container"></div>
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
import { ref, watch, computed, onMounted } from "vue";
import { getLanguageForUpdateContent } from "@/kernel/utils";
import { updateSection } from "../services/sections-service";
import { showSuccessToast } from "@/kernel/alerts";
import Quill from "quill";
import "quill/dist/quill.snow.css";

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
    let quill = null;
    const quillEditor = ref(null);
    const quillToolbar = ref(null);
    const editedText = ref(props.currentText);
    const dialogVisible = ref(props.visible);
    const isQuillInitialized = ref(false);

    const contentLanguage = computed(() => {
      return getLanguageForUpdateContent(props.textId);
    });

    const currentLanguage = ref(getLanguageForUpdateContent());

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

    // Monitorear cambios en visible para sincronizar dialogVisible
    watch(
      () => props.visible,
      (newValue) => {
        dialogVisible.value = newValue;
        if (newValue && !isQuillInitialized.value) {
          // Inicializar Quill con un pequeño retraso para asegurar que el DOM esté listo
          setTimeout(() => {
            initializeQuill();
          }, 300);
        }
      }
    );

    // Monitorear cambios en currentText para actualizar el editor
    watch(
      () => props.currentText,
      (newValue) => {
        editedText.value = newValue;
        if (quill && isQuillInitialized.value) {
          quill.root.innerHTML = newValue;
        }
      }
    );

    // Método para inicializar Quill cuando el diálogo esté visible
    const initializeQuill = () => {
      if (isQuillInitialized.value || !quillEditor.value) return;

      // console.log("Inicializando Quill...");

      try {
        // Creamos una configuración más detallada para Quill
        quill = new Quill(quillEditor.value, {
          modules: {
            toolbar: quillToolbar.value || [
              ["bold", "italic", "underline"],
            ],
          },
          theme: "snow",
          placeholder: "Escribe tu contenido aquí...",
          readOnly: false,
          bounds: quillEditor.value,
        });

        // Cargar el contenido inicial
        if (props.currentText && props.currentText.trim() !== "") {
          quill.clipboard.dangerouslyPasteHTML(props.currentText);
        }

        // Evento para actualizar el texto cuando cambia
        quill.on("text-change", () => {
          editedText.value = quill.root.innerHTML;
        });

        isQuillInitialized.value = true;
        console.log("Quill inicializado correctamente.");
      } catch (error) {
        console.error("Error al inicializar Quill:", error);
      }
    };

    const closeDialog = () => {
      if (quill) {
        // Limpiar el editor Quill
        quill = null; 
        isQuillInitialized.value = false; 
      }
      dialogVisible.value = false;
      emit("update:visible", false);
    };

    const saveText = async () => {
    //const cleanedText = editedText.value.replace(/<p>/g, "").replace(/<\/p>/g, "");

      emit("save-text", { id: props.textId, text: editedText.value });
      const updatedText = {
        section_id: props.textId,
        description: editedText.value,
      };
      let result = await updateSection(updatedText);
      if (result.status === 200) {
        const successMessage =
          currentLanguage.value === "EN"
            ? "Text updated successfully"
            : "Texto actualizado con éxito";
        showSuccessToast(successMessage);
      }
      closeDialog();
    };

    onMounted(() => {
      // Si el modal está visible al montar, intentamos inicializar Quill
      if (props.visible) {
        setTimeout(() => {
          initializeQuill();
        }, 300);
      }
    });

    return {
      dialogVisible,
      translations,
      pageNames,
      contentLanguage,
      closeDialog,
      saveText,
      quillEditor,
      quillToolbar,
      initializeQuill,
    };
  },
};
</script>

<style>
/* Estilos para el editor Quill - deben ser globales para funcionar correctamente */
.quill-editor-full {
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  overflow: hidden;
}

.quill-toolbar {
  border-bottom: 1px solid #ccc;
  padding: 8px;
  background-color: #f8f8f8;
}

.quill-editor-container {
  height: 300px;
  overflow-y: auto;
  background-color: white;
}

/* Aseguramos que los botones de la barra de herramientas sean visibles */
.ql-formats {
  display: inline-flex !important;
  margin-right: 10px;
}

.ql-editor {
  min-height: 250px;
  font-size: 16px;
  line-height: 1.5;
}

/* Aseguramos que todos los componentes de Quill sean visibles */
.ql-container,
.ql-editor,
.ql-toolbar {
  position: relative !important;
  display: block !important;
}
</style>

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

.modal-content {
  margin-bottom: 20px;
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
