enum Tipo {
    PRESTADOR,
    CLIENTE
}

export interface Dados {
    nome_completo: string;
    nif: string;
    email: string;
    senha: string;
    tipo: Tipo;
    saldo: number;
}

export interface Resposta {
    id: number;
    nome_completo: string;
    nif: string;
    email: string;
    senha: string;
    tipo: Tipo;
    saldo: number;
}
