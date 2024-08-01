//import { toast } from "react-toastify";
import { appMessages } from "../../utils/messages";

export const formDataInitialState = {
  id: "",
  nome_completo: "",
  nif: "",
  email: "",
  senha: "",
  confirmar_senha: "",
  tipo: "",
  saldo: 0,
};

export const getPreparedFormData = (data = {}) => {
  const {
    nome_completo,
    nif,
    email,
    senha,
    tipo,
    confirmar_senha,
    saldo,
  } = data;

  const response = {
    nome_completo,
    nif,
    email,
    senha,
    tipo,
    saldo,
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
  utilizador
}) => {
  return {
    nome_completo: utilizador?.nome_completo,
    nif: utilizador?.nif,
    email: utilizador.email,
    senha: utilizador.senha,
    tipo: utilizador.tipo,

  };
};
