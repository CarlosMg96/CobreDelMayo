<template>
    <div class="news-container">
        <h1 class="news-title">Noticias</h1>
        <div class="news-grid">
            <div v-for="news in newsList" :key="news.id" class="news-card">
                <!-- Imagen de la noticia -->
                <div class="news-card-image">
                    <img :src="news.image || 'https://placehold.co/600x400.png'" :alt="news.title" />
                </div>
                <h2 class="news-card-title">{{ news.title }}</h2>
                <div class="news-card-content" v-html="news.content"></div>
                <div class="news-card-footer">
                    <span class="news-date">{{ formatDate(news.date) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { getPublicNews } from '../services/public-services';

export default defineComponent({
    name: 'NewsPage',
    setup() {
        const newsList = ref([]);

        const fetchNews = async () => {
            try {
                const response = await getPublicNews();
                newsList.value = response.data;
            } catch (error) {
                console.error(error);
            }
        };

        const formatDate = (dateString) => {
            const date = new Date(dateString);
            return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
        };

        onMounted(() => {
            fetchNews();
        });

        return {
            newsList,
            formatDate,
        };
    },
});
</script>

<style scoped>
.news-container {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.news-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
}

.news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.news-card {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.news-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.news-card-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.news-card-title {
    font-size: 1.5rem;
    padding: 1rem;
    background: #007bff;
    color: #fff;
    margin: 0;
}

.news-card-content {
    padding: 1rem;
    color: #555;
    line-height: 1.6;
}

.news-card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #f9f9f9;
    border-top: 1px solid #eee;
}

.news-date {
    font-size: 0.9rem;
    color: #777;
}
</style>