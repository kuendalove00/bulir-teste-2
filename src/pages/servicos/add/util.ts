//import { toast } from "react-toastify";
import { appMessages } from "../../../utils/messages";

export const formDataInitialState = {
  id: "",
  titulo: "",
  descricao: "",
  preco: 0,
  prestadorId: 5,
};


export const getPreparedFormData = (data) => {
  const {
    titulo,
    descricao,
    preco,
    prestadorId,
  } = data;

  const response = {
    titulo,
    descricao,
    preco: parseInt(preco),
    prestadorId
  };

  return response;
};

/*export const isValidForm = (formData) => {
  if (!formData?.titulo) {
    //toast.error(appMessage.employee.emptyName);
    return false;
  }

  if (!formData?.preco) {
    //toast.error(appMessage.employee.emptyBi);
    return false;
  }

  if (!formData?.prestadorId) {
    //toast.error(appMessage.employee.emptyOffice);
    return false;
  }

  return true;
};*/

export const getEditData = ({
  servico
}) => {
  return {
    titulo: servico?.titulo,
    descricao: servico?.descricao,
    preco: servico.preco,
    prestadorId: servico.prestadorId,

  };
};
