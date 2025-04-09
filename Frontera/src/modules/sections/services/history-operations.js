import api from "@/config/http-client-gateway";
import { showErrorToast } from '@/kernel/alerts';

export const getHistoryOperations = async (language) => {
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

export const createHistoryOperation = async (dataForm) => {
    try {
        const { data } = await api.doPost('/create-history-operation', dataForm);
        return data;
    } catch (error) {
        showErrorToast("No se pudo crear el historial de operaciones");
        return error;
    }
}

export const updateHistoryOperation = async (dataForm) => {
    try {
        const { data } = await api.doPut('/update-history-operation', dataForm);
        return data;
    } catch (error) {
        showErrorToast("No se pudo actualizar el historial de operaciones");
        return error;
    }
}

export const deleteHistoryOperation = async (id) => {
    try {
        const historyOpId = id;
        const { data } = await api.doDelete('/delete-history-operation', {historyOpId});
        return data;
    } catch (error) {
        showErrorToast("No se pudo eliminar el historial de operaciones");
        return error;
    }
}