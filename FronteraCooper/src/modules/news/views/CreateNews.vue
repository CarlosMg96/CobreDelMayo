<template>
  <v-card class="mx-auto" elevation="16" max-width="100hv">
    <v-card-item>
      <v-card-title> Nuevas noticias </v-card-title>
      <v-card-subtitle> Card subtitle secondary text </v-card-subtitle>
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

      <!-- Campo para el enlace -->
      <v-text-field v-model="link" label="Enlace" outlined></v-text-field>

      <!-- Campo para la fecha -->
      <v-date-picker
        v-model="date"
        label="Fecha"
        outlined
        :max="new Date().toISOString().substr(0, 10)"
      ></v-date-picker>

      <!-- Campo para el estatus -->
      <v-select
        v-model="status"
        :items="statusOptions"
        label="Estatus"
        outlined
      ></v-select>

      <!-- Input para agregar imágenes (máximo 2) -->
      <v-file-input
        v-model="images"
        label="Agregar imágenes"
        multiple
        outlined
        :rules="imageRules"
        accept="image/*"
        @change="handleImageUpload"
      ></v-file-input>

      <!-- Mostrar imágenes seleccionadas -->
      <div v-if="images.length > 0">
        <h4>Imágenes seleccionadas:</h4>
        <div v-for="(image, index) in images" :key="index" class="image-preview">
          <img :src="getImageUrl(image)" alt="Imagen seleccionada" width="100" />
          <v-btn @click="removeImage(index)" color="error" small>Eliminar</v-btn>
        </div>
      </div>

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
import { createNews } from '../services/news-service';
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
    const link = ref('');
    const date = ref(new Date()); // Inicializa con la fecha actual
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
        content,
        link: link.value,
        date: date.value.toISOString().substr(0, 10),
        year: date.value.getFullYear(),
        status: status.value,
        images: images.value,
        language: selectedLanguage.value,
      }

      try {
        const response = await createNews(dataForm);
        console.log('Noticia publicada:', response);
        if (response.code == 200 || response.code == 201) {
          // Redirigir a la lista de noticias
          showSuccessToast('Noticia publicada correctamente');
          await router.push({ name: 'list-news' });      
        }
      } catch (error) {
        console.error('Error al publicar la noticia:', error);
      }
    };

    return {
      selectedLanguage,
      languages,
      title,
      link,
      date,
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