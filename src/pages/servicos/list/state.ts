import { service } from '../../../service';
import { appMessages } from '../../../utils/messages';
import { responseStatus } from '../../../utils/responseStatus';
import { useApp } from '../../app';
import {useState, useEffect} from 'react';
//import {toast} from "react-toastify";


export const useListServico = () => {
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
    
      const handleDelete = async () => {
        setIsLoading(true);

        console.log(deleteItem?.id);
    
        
        const response = await service.servico.excluir(deleteItem?.id);

        setIsLoading(false);
    
        if (response?.status === responseStatus.OK) {
          //toast.success(`Corrector removido com sucesso!`);
          getInitialData();
        } else {
          /*toast.error(
            `Falha ao remover o corrector, tente novamente mais tarde!`
          );*/
        }

        getInitialData();
    
       
      };
    
      const handleUpdate = (servico) => {
        navigate(nomeRotas.servicos.atualizar, {
          state: { servico, isUpdate: true },
        });
      };

      useEffect(() => {
        getInitialData();
      }, []);
    
      useEffect(() => {
        if (deleteItem?.id) handleDelete();
      }, [deleteItem]);

      return {
        data,
        deleteItem,
        setDeleteItem,
        isLoading,
        totalData,
        nomeRotas,
        handleUpdate,
        handleDelete,
        navigate,
        navigateGoBack,
      };
}