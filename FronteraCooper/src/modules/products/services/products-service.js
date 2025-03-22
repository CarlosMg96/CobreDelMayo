import api from "@/config/http-client-gateway";
import { showErrorToast } from '@/kernel/alerts';

export const getProductsService = async () => {
    try {
        const { data } = await api.doGet('/products/get_products');
        return data;
    } catch (error) {
        showErrorToast("Error al obtener los productos");
        return error;
    }
}