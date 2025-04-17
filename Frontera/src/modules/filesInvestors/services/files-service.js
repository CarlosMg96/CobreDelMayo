import api from "@/config/http-client-gateway";
import { showErrorToast } from '@/kernel/alerts';
import { BASEURLAPI, getRoleByToken, getTokenDecrypted } from "@/kernel/utils";

export const uploadFile = async (fileData) => {
    try {
      const token = await getTokenDecrypted();
      const url = `${BASEURLAPI}/upload`;
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: fileData,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error uploading file:', error);
      showErrorToast('Error uploading file');
    }
  };
  

export const getFiles = async (params) => {
  try {
    const role = await getRoleByToken();
    let url = '/files';
    if(role === 'INVESTORS'){
      url = '/files/investor';
    }
    const response = await api.doGet(url, params);
    return response?.data;
  } catch (error) {
    console.log('Error fetching files:', error);
    showErrorToast('Error trayendo los archivos');
  }
};