import api from "@/config/http-client-gateway";
import { showErrorToast } from '@/kernel/alerts';

export const getPublicNews = async () => {
    try {
        const { data } = await api.doGet('/news/active');
        return data;
    } catch (error) {
        showErrorToast("Error al obtener las noticias");
        return error;
    }
}