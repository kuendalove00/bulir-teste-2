import { service } from '../../../service';
import { appMessages } from '../../../utils/messages';
import { responseStatus } from '../../../utils/responseStatus';
import { useApp } from '../../app';
import {useState, useEffect} from 'react';
//import {toast} from "react-toastify";


export const useAvailableServico = () => {
    const { nomeRotas, navigate, navigateGoBack } = useApp();

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [deleteItem, setDeleteItem] = useState(null);
    const [totalData, setTotalData] = useState(0);

    const getInitialData = async () => {
        setIsLoading(true);
        const response = await service.servico.listar();
        setIsLoading(false);
    
        if (response?.status === responseStatus.OK) {
          setData(response.data);
          setTotalData(response.data.length);
        } else {
          setData([]);
          setTotalData(0);
        }
      };

      useEffect(() => {
        getInitialData();
      }, []);


      return {
        data,
        deleteItem,
        setDeleteItem,
        isLoading,
        totalData,
        nomeRotas,
        navigate,
        navigateGoBack,
      };
}