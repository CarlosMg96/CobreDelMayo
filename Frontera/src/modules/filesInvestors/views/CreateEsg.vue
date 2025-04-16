<template>
  <v-card class="mx-auto" elevation="16" max-width="100hv">
    <v-card-item>
      <v-card-title> Nuevo ESG </v-card-title>
    </v-card-item>

    <v-card-text>
      <!-- Selector de idioma -->
      <v-select
        v-model="selectedLanguage"
        :items="languages"
        item-title="text"
        item-value="value"
        label="Selecciona el idioma"
        outlined
      ></v-select>

      <!-- Campo de título -->
      <v-text-field v-model="title" label="Título" outlined></v-text-field>

      <!-- Editor Quill -->
      <div id="editor">
        <p>Hello World!</p>
        <p>Some initial <strong>bold</strong> text</p>
        <p><br /></p>
      </div>

      <!-- Botón de envío -->
      <v-btn color="primary" @click="submitNews"> Publicar </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { createEsg } from '../services/files-service';
import { showSuccessToast } from '@/kernel/alerts';
import router from '@/router';

export default defineComponent({
  name: 'CreateNews',
  setup() {
    const selectedLanguage = ref('es');
    const languages = ref([
      { text: 'Español', value: 'es' },
      { text: 'Inglés', value: 'en' },
    ]);
    const title = ref('');
    const status = ref('Activo');
    const statusOptions = ref(['Activo', 'Inactivo']);
    const images = ref([]);
    let quill;

    // Reglas para las imágenes
    const imageRules = [
      (value) => {
        if (value.length > 2) {
          return 'Solo se permiten hasta 2 imágenes.';
        }
        return true;
      },
    ];

    // Manejar la carga de imágenes
    const handleImageUpload = (files) => {
      if (files.length > 2) {
        alert('Solo se permiten hasta 2 imágenes.');
        images.value = files.slice(0, 2); // Limitar a 2 imágenes
      } else {
        images.value = files;
      }
    };

    // Obtener la URL de la imagen para previsualización
    const getImageUrl = (image) => {
      return URL.createObjectURL(image);
    };

    // Eliminar una imagen
    const removeImage = (index) => {
      images.value.splice(index, 1);
    };

    onMounted(() => {
      quill = new Quill('#editor', {
        theme: 'snow',
      });
    });

    const submitNews = async() => {
      const content = quill.root.innerHTML;

      const dataForm = {
        title: title.value,
        description: content,
        status: status.value,
        language: selectedLanguage.value,
      }

      try {
        const response = await createEsg(dataForm);
        console.log('ESG:', response);
        if (response.status == 200 || response.status == 201) {
          // Redirigir a la lista de noticias
          showSuccessToast('El ESG se agrego correctamente');
          await router.push({ name: 'list-esg' });      
        }
      } catch (error) {
        console.error('Error al publicar el esg:', error);
      }
    };

    return {
      selectedLanguage,
      languages,
      title,
      status,
      statusOptions,
      images,
      imageRules,
      handleImageUpload,
      getImageUrl,
      removeImage,
      submitNews,
    };
  },
});
</script>

<style scoped>
.image-preview {
  margin: 10px 0;
  display: flex;
  align-items: center;
}
.image-preview img {
  margin-right: 10px;
}
</style>