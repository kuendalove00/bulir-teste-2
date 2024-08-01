import { useState, useRef, useEffect } from "react"
import { useApp } from "../app";
import { service } from "../../services";
import { responseStatus } from "../../utils/responseStatus";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import { useForm } from "../../hooks/forms";

export const useLogin = () => {

    const { appRoutesName, appMessages } = useApp();
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashboard";

    const { formData, setFormValue, clearForm } = useForm({});


    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
      userRef.current.focus();
    }, []);

    useEffect(() => {
      setErrMsg('');
    }, [email, password]);

    async function handleLogin()
    {
     
        setIsLoading(true);

        console.log({
          email,
          password,
          });

       const processingToastId = toast.loading("Processando...");
        const response = await service.auth.login({
            email,
            password,
            })
        setIsLoading(false);
         toast.dismiss(processingToastId);
        if (response?.status === responseStatus.OK) {

          console.log("OIII", response?.data);

          if(!response?.data?.access_token){
            toast.error("A sua conta foi desativada! Contacte o seu administrador");
            return;
          }
          
          const accessToken = response?.data?.access_token;
          //const roles = response?.data?.roles;
  
          setAuth({ email, password, accessToken});

          console.log()
          
          setEmail('');
          setPassword('');
          //dispatch(authActions.setIsLoggedUser(true));
            //dispatch(authActions.setLoggedUser(response?.data));
      
            //service.cache.setItem(cacheKeys.userData, response?.data);
      
          
            localStorage.setItem("access_token", response.data.access_token)
            toast.success("Logado com sucesso");
            navigate(from, { replace: true });
          } else if (response?.status === responseStatus.FORBIDDEN) {
            //toast.error(appMessage.login.invalidCredentials);
            console.log(appMessages.login.invalidCredentials);
          } else {
            //toast.error(appMessage.login.loginError);
           toast.error("Email ou senha incorreta");
            console.log(appMessages.login.loginError);
          }
    }

    return {
        email,
        password,
        isLoading,
        setEmail,
        setPassword,
        errRef,
        errMsg,
        userRef,
        handleLogin,
    };
}