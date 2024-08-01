import { useEffect, useState } from "react";
//import { toast } from "react-toastify";
//import { useApp } from "../../../hooks/app";
import { useForm } from "../../hooks/forms";
import { service } from "../../service";
import { responseStatus } from "../../utils/responseStatus";
import {
  formDataInitialState,
  getPreparedFormData,
  //isValidForm,
} from "./util";


export const useRegisto = () => {
  
    //const { navigateGoBack, appMessage } = useApp();
    const { formData, setFormValue, clearForm } = useForm({
      initalState: formDataInitialState,
    });
  
    const handleSave = async () => {
      //if (!isValidForm(formData)) return;
  
      
      const data = getPreparedFormData(formData);
  
      alert(JSON.stringify(data));
      const response = await service.usuario.salvar(data);
  
      alert(JSON.stringify(response));

      if (response?.status === responseStatus.CREATED) {
        clearForm();
  
        /*toast.success(
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

    return {
        handleSave,
        setFormValue,
        //navigateGoBack,
        formData,
    };
}