import { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "../../api/axios"
import { Dados, Resposta } from "./types";

async function salvar(dados: Dados): Promise<AxiosResponse<Resposta> | undefined>
{
    try{
        const response: AxiosResponse<Resposta> = await axiosInstance.post("/servico", dados);

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
        const response: AxiosResponse<Resposta[]> = await axiosInstance.get("/servico");
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
        const response: AxiosResponse<Resposta> = await axiosInstance.get(`/servico/${id}`);
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

async function atualizar(dados: Dados, id: number): Promise<AxiosResponse<Resposta> | undefined>
{
    try{
        const response: AxiosResponse<Resposta> = await axiosInstance.patch(`/servico/${id}`, dados);
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

async function excluir(id: number): Promise<AxiosResponse<Resposta> | undefined>
{
    try{
        const response: AxiosResponse<Resposta> = await axiosInstance.delete(`/servico/${id}`);
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

export const servico = {salvar, listar, consultarPorId, atualizar, excluir}