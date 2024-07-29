import { AxiosResponse, AxiosError } from "axios";
import { axiosInstance } from "../../api/axios"
import { Dados, Resposta } from "./types";


async function salvar(dados: Dados): Promise<AxiosResponse<Resposta> | undefined>
{
    try{
        const response: AxiosResponse<Resposta> = await axiosInstance.post("/usuario", dados);

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
        const response: AxiosResponse<Resposta[]> = await axiosInstance.get("/usuario");
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
        const response: AxiosResponse<Resposta> = await axiosInstance.get(`/usuario/${id}`);
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

async function consultarPorNif(nif: string): Promise<AxiosResponse<Resposta> | undefined>
{
    try{
        const response: AxiosResponse<Resposta> = await axiosInstance.get(`/usuario/${nif}`);
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

async function consultarPorEmail(email: string): Promise<AxiosResponse<Resposta> | undefined>
{
    try{
        const response: AxiosResponse<Resposta> = await axiosInstance.get(`/usuario/${email}`);
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
        const response: AxiosResponse<Resposta> = await axiosInstance.patch(`/usuario/${id}`, dados);
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
        const response: AxiosResponse<Resposta> = await axiosInstance.delete(`/usuario/${id}`);
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

export const usuario = {salvar, listar, consultarPorId, consultarPorNif, consultarPorEmail, atualizar, excluir}