import api from "@/config/http-client-gateway";
import { showErrorToast } from '@/kernel/alerts';

export const createEsg = async (dataForm) => {
    try {
        const { data } = await api.doPost('/create-esg', dataForm);
        return data;
    } catch (error) {
        showErrorToast("No se pudo crear el ESG");
        return error;
    }
}

export const getAllESG = async (params) => {
    try {
        const { data } = await api.doGet('/all-esg', params);
        return data;
    } catch (error) {
        showErrorToast("No se pudo obtener los datos de ESG");
        return error;
    }
}

export const updateEsg = async (dataForm) => {
    try {
        const { data } = await api.doPut('/update-esg', dataForm);
        return data;
    } catch (error) {
        showErrorToast("No se pudo actualizar el Esg");
        return error;
    }
}

export const deleteEsg = async (id) => {
   let dataForm = {
        id: id
   }
    try {
        const { data } = await api.doDelete('/delete-esg', dataForm);
        return data;
    } catch (error) {
        console.log("Error: ",error);
        showErrorToast("No se pudo desactivar el Esg");
        return error;
    }
}
