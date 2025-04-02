import api from "@/config/http-client-gateway";
import { showErrorToast } from '@/kernel/alerts';

export const createNews = async (dataForm) => {
    try {
        const { data } = await api.doPost('/news/create', dataForm);
        return data;
    } catch (error) {
        showErrorToast("No se pudo crear la noticia");
        return error;
    }
}

export const getESG = async (params) => {
    try {
        const { data } = await api.doGet('/esg', params);
        return data;
    } catch (error) {
        showErrorToast("No se pudo obtener los datos de ESG");
        return error;
    }
}

export const updateNews = async (dataForm) => {
    try {
        const { data } = await api.doPut('/news/update', dataForm);
        return data;
    } catch (error) {
        showErrorToast("No se pudo actualizar la noticia");
        return error;
    }
}

export const deleteNews = async (id) => {
   let dataForm = {
        id: id
   }
    try {
        const { data } = await api.doDelete('/news/delete', dataForm);
        return data;
    } catch (error) {
        console.log("Error: ",error);
        showErrorToast("No se pudo desactivar o eliminar la noticia");
        return error;
    }
}
