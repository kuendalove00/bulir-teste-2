import React from "react";
import { useLocation } from "react-router-dom";
import { appMessages } from "../../../utils/messages";
import { useListServico } from "./state";

export const ListServico = () => {
  const { state } = useLocation();
  const { isUpdate = false } = state || {};

  

  const { data, setDeleteItem, totalData, handleUpdate} =
    useListServico();

 
  return (
    <div className="flex justify-center">
      <div className="flex flex-row gap-4 w-full">
        <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-300 flex-1">
        <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: "bolder",
        }}
      >
        <div className="flex items-center gap-x-3">
          <h2 className="h1 text-lg font-medium text-gray-800 dark:text-white">
            Servicos
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
            {`${totalData} Servicos`}
          </span>
        </div>
        <div className="flex justify-end items-center">
          <button
            //onClick={() => navigate(appRouteNames.corrector.registar)}
            className="flex items-center w-1/2 mx-2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-indigo-800 hover:bg-indigo-600 rounded-lg shrink-0 sm:w-auto gap-x-2 dark:hover:bg-green-500 dark:bg-green-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <span>Cadastrar Servico</span>
          </button>
        </div>
      </div>
      <hr className="mt-2" />

      <div className="overflow-hidden rounded-sm border  m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-indigo-500 text-white text-center">
            <tr>
              <th>Titulo</th>
              <th>Descricão</th>
              <th>Preço</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {
              console.log("DAAATA",data)
            }

            {data.map((servico, index) => {
              const { id, titulo, descricao, preco} = servico || {};

              return (
                <tr
                  key={index}
                  className={`${index % 2 == 0 ? "bg-gray-100" : "bg-gray-50"} ` }
                >
                  <td>
                    <i className="fa-solid fa-user icon-opacity mr-5"></i>
                    {titulo}
                  </td>
                  <td>
                    <i className="fa-solid fa-user icon-opacity mr-5"></i>
                    {descricao}
                  </td>
                  <td>
                    <i className="fa-solid fa-user icon-opacity mr-5"></i>
                    {preco}
                  </td>
                  <td className="table-options">
                    <span className="flex justify-center"> 
                      <button
                        className="flex items-center w-1/2 mx-2 my-1 px-2 py-1 text-sm tracking-wide text-white transition-colors duration-200 bg-gray-400 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-green-600 dark:hover:bg-green-500 dark:bg-green-600"
                        id={id}
                        onClick={() => {
                          handleUpdate(servico);
                        }}
                      >
                        <i className="fa-solid fa-pencil mx-2">Editar</i>
                      </button>
                      <button
                        id={id}
                        className="flex items-center w-1/2 mx-2 my-1 px-2 py-1 text-sm tracking-wide text-white transition-colors duration-200 bg-gray-400 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-green-600 dark:hover:bg-green-500 dark:bg-green-600"
                        onClick={() => setDeleteItem(servico)}
                      >
                        <i className="fa-solid fa-trash mx-2">Excluir</i>
                      </button>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
        </div>
      </div>
    </div>
  );
};
