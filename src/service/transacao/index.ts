import { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "../../api/axios"
import { Dados, Resposta } from "./types";

async function salvar(dados: Dados): Promise<AxiosResponse<Resposta> | undefined>
{
    try{
        const response: AxiosResponse<Resposta> = await axiosInstance.post("/transacao", dados);

        return response;

    }catch(error)
    {
        if(error instanceof AxiosError)
        {
            console.error('Erro ao salvar:', error.response)
            return error.response;
        }else
        {
            console.error('Erro desconhecido:', error);
        }
    }
}

async function listar(): Promise<AxiosResponse<Resposta[]> | undefined>
{
    try{
        const response: AxiosResponse<Resposta[]> = await axiosInstance.get("/transacao");
        return response;
    }catch(error)
    {
        if(error instanceof AxiosError)
            {
                console.error('Erro ao salvar:', error.response)
                return error.response;
            }else
            {
                console.error('Erro desconhecido:', error);
            }
    }
}

async function consultarPorId(id: number): Promise<AxiosResponse<Resposta> | undefined>
{
    try{
        const response: AxiosResponse<Resposta> = await axiosInstance.get(`/transacao/${id}`);
        return response;
    }catch(error)
    {
        if(error instanceof AxiosError)
            {
                console.error('Erro ao salvar:', error.response)
                return error.response;
            }else
            {
                console.error('Erro desconhecido:', error);
            }
    }
}

async function consultarPorData(data: Date): Promise<AxiosResponse<Resposta> | undefined>
{
    try{
        const response: AxiosResponse<Resposta> = await axiosInstance.get(`/transacao/${data}`);
        return response;
    }catch(error)
    {
        if(error instanceof AxiosError)
            {
                console.error('Erro ao salvar:', error.response)
                return error.response;
            }else
            {
                console.error('Erro desconhecido:', error);
            }
    }
}



export const transacao = {salvar, listar, consultarPorId, consultarPorData}