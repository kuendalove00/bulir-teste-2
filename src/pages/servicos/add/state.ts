import { useEffect, useState } from "react";
//import { toast } from "react-toastify";
//import { useApp } from "../../../hooks/app";
import { useForm } from "../../../hooks/forms";
import { service } from "../../../service";
import { responseStatus } from "../../../utils/responseStatus";
import {
  formDataInitialState,
  getEditData,
  getPreparedFormData,
  isValidForm,
} from "./util";


export const useAddServico = ({ navigationState }) => {
    const { servico, isUpdate = false } = navigationState || {};
  
    //const { navigateGoBack, appMessage } = useApp();
    const { formData, setFormValue, clearForm } = useForm({
      initalState: formDataInitialState,
    });
  
    const handleSave = async () => {
      //if (!isValidForm(formData)) return;

      let response;
      const data = getPreparedFormData(formData);

      alert(JSON.stringify(data));
  
      if (isUpdate) {
        response = await service.servico.atualizar(data, servico.id)
      } else {
        response = await service.servico.salvar(data);
      }
  
      if (response?.status === responseStatus.OK) {
        clearForm();
  
       /* toast.success(
          isUpdate
            ? appMessage.employee.add.updateSuccess
            : appMessage.employee.add.registerSuccess
        );
  
        if (isUpdate) navigateGoBack();
      } else {
        toast.error(
          isUpdate
            ? appMessage.employee.add.updateError
            : appMessage.employee.add.registerError
        );*/
      }
    };

    useEffect(() => {
        if (!servico?.id) return;
    
        setFormValue(
          getEditData({
            servico,
          })
        );
      }, [servico]);

    return {
        handleSave,
        setFormValue,
        //navigateGoBack,
        formData,
    };
}