import api from "@/config/http-client-gateway";
import { showErrorToast } from '@/kernel/alerts';

export const createSection = async (dataForm) => {
    try {
        const { data } = await api.doPost('/create-section', dataForm);
        return data;
    } catch (error) {
        showErrorToast("No se pudo crear la sección");
        return error;
    }
}

export const getSectionByPageandLanguaje = async (params) => {
    try {
        const { data } = await api.doGet('/section', params);
        return data;
    } catch (error) {
        showErrorToast("No se pudo obtener los datos de la sección");
        return error;
    }
}

export const updateSection = async (dataForm) => {
    try {
        const { data } = await api.doPut('/update-section', dataForm);
        return data;
    } catch (error) {
        showErrorToast("No se pudo actualizar la sección");
        return error;
    }
}