<template>
    <div v-if="isVisiblePdf" class="modal-overlay">
      <div class="modal-content">
        <h3 class="title">Subir Archivo PDF</h3>
        <form @submit.prevent="submitPdf">

          <div class="form-group">
            <label for="fileName" >Nombre del Archivo</label>
            <input
              type="text"
              id="fileName"
              v-model="fileName"
              placeholder="Nombre del archivo"
              required
            />
            <div v-if="!fileName" class="text-red"></div>
          </div>

          <div class="form-group">
            <label for="category">Categoría</label>
            <select id="category" v-model="category" required>
              <option value="" disabled selected>Selecciona un tipo de archivo</option>
              <option value="CDM Overview">CDM Overview</option>
              <option value="Conference Call">Conference Call</option>
              <option value="Presentation">Presentation</option>
              <option value="Offering Memorandum">Offering Memorandum</option>
              <option value="Financial Statements">Financial Statements</option>
              <option value="Ratings">Ratings</option>
            </select>
            <div v-if="!category" class="text-red">Debe de seleccionar una categoría</div>
          </div>

          <div class="form-group">
            <label for="quarter">Trimestre</label>
            <select id="quarter" v-model="quarter" required>
              <option value="" disabled selected>Selecciona un trimestre</option>
              <option value="Q1">1</option>
              <option value="Q2">2</option>
              <option value="Q3">3</option>
              <option value="Q4">4</option>
            </select>
            <div v-if="!quarter" class="text-red">Debe de ingresar un trimestre</div>
          </div>

          <div class="form-group">
            <label for="year">Año</label>
            <input
              type="number"
              id="year"
              v-model="year"
              placeholder="Año"
              required
            />
            <div v-if="!year" class="text-red">Debe de ingresar un año</div>
          </div>

          <div class="form-group">
            <label for="pdf">Archivo PDF</label>
            <input
              type="file"
              id="pdf"
              accept="application/pdf"
              @change="handleFileChange"
              required
            />
            <div v-if="file" class="text-green">Archivo seleccionado: {{ fileName }}</div>
          </div>
  
          <div style="display: flex; justify-content: flex-end;">
            <button type="submit" :disabled="!pdfFile">Subir</button>
            <button type="button" @click="closeModal">Cerrar</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { showErrorToast, showSuccessToast} from "@/kernel/alerts";
  import { uploadFile } from "../services/files-service";
  
  export default {
    props: {
      isVisiblePdf: {
        type: Boolean,
        required: true,
      },
    },
    data() {
      return {
        pdfFile: null,
        fileName: "",
        category: "",
        quarter: "",
        year: "",
        file: "",
      };
    },
    methods: {
      handleFileChange(event) {
        const file = event.target.files[0];
        if (file && file.type === "application/pdf") {
          this.pdfFile = file;
          this.file = file.name;
        } else {
          alert("Solo se permiten archivos PDF.");
          this.pdfFile = null;
          this.file = "";
        }
      },
      closeModal() {
        this.pdfFile = null;
        this.fileName = "";
        this.$emit("update:visible", false);
      },
      async submitPdf() {
        if (!this.pdfFile) {
          showErrorToast("Por favor, selecciona un archivo PDF.");
          return;
        }

        if (!this.fileName || !this.category || !this.quarter || !this.year) {
          showErrorToast("Por favor, completa todos los campos.");
          return;
        }
        const formData = new FormData();
        formData.append("file", this.pdfFile);
        formData.append("fileName", this.fileName);
        formData.append("category", this.category);
        formData.append("quarter", this.quarter);
        formData.append("year", this.year);

        try {
            const result = await uploadFile(formData);
            if (result.status === 200) {
                showSuccessToast("Archivo subido correctamente.");
                this.$emit("update:files");
                this.closeModal();
            } else {
                showErrorToast("Error al subir el archivo.");
            }
        } catch (error) {
          console.error("Error en la solicitud:", error);
            showErrorToast("Error en la solicitud");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    max-width: 100%;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input,
  select {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  button {
    padding: 10px 15px;
    margin-top: 10px;
    cursor: pointer;
    background-color: orange;
    color: white;
    border: none;
    border-radius: 16px;
  }
  
  button[type="submit"]:hover {
    background-color: yellowgreen;
  }
  
  button[type="button"] {
    margin-left: 16px;
    background-color: darkgray;
  }
  
  button[type="button"]:hover {
    background-color: gray;
  }
  
  .title {
    margin-top: 0;
    color: orange;
  }
  
  .text-green {
    color: green;
    font-weight: bold;
    margin-top: 8px;
  }
  </style>
  