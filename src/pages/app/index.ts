
import { useNavigate } from "react-router-dom";
import { nomeRotas } from "../../routes/nomeRotas";
import { appMessages } from "../../utils/messages";

export const useApp = () => {
  const navigate = useNavigate();

  const navigateGoBack = () => {
    navigate(-1);
  };

  const navigateGoForward = () => {
    navigate(1);
  };

  return {
    navigateGoForward,
    navigateGoBack,
    navigate,
    nomeRotas,
    appMessages,
  };
};