import api from "@/config/http-client-gateway";
import { showErrorToast } from '@/kernel/alerts';

export const getPublicHistoryOperations = async (language) => {
    try {
        const params = {
            language: language,
        }
        const { data } = await api.doGet('/history-operation-by-language', {params});
        return data;
    } catch (error) {
        showErrorToast("Error al obtener el historial de operaciones");
        return error;
    }
}