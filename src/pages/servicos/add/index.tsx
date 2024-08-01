import { useLocation } from "react-router-dom";
import { useAddServico } from "./state";

export default function AddServico() {

  const { state } = useLocation();
  const { isUpdate = false } = state || {};


  const {
    formData,
    handleSave,
    setFormValue,
    //navigateGoBack,
  } = useAddServico({ navigationState: state });

  return (
    <div className='min-h-screen bg-neutral-100 flex items-center justify-center'>
        <div className="max-w-md w-full bg-neutral-50 px-10 py-8 rounded-lg shadow-xl space-y-2">
            <div className='space-y-2 mb-5'>
                <h2 className="text-3xl font-bold text-neutral-800">
                {!isUpdate ? `Cadastrar` : `Atualizar`} Serviço
                </h2>
                <p className='text-sm text-neutral-500'>
                    Seja Bem Vindo de volta!
                </p>
            </div>

            <form action="" className="space-y-7">
                
                <div className="space-y-4 ">
                    <div className='space-y-1.5'>
                        <label htmlFor="nome" className="block text-sm font-medium text-neutral-500">
                            Titulo
                        </label>
                        <input 
                        value={formData?.titulo}
                        onChange={(e) => setFormValue({ titulo: e?.target?.value })}
                        name="nome"
                        type="text" id='nome' placeholder='' className="w-full bg-neutral-50 ring-1 ring-neutral-200 text-neutral-900 rounded-md text-base h-11 p-4 outline-none focus:ring-2 focus:ring-red-600 focus:outline-none ease-in-out duration-700 " />
                    </div>
                    <div className='space-y-1.5'>
                        <label htmlFor="nif" className="block text-sm font-medium text-neutral-500">
                            Preço
                        </label>
                        <input 
                        value={formData?.preco}
                        onChange={(e) => setFormValue({ preco: e?.target?.value })}
                        name="nome"
                        type="number" id='nif' min={0} placeholder='' className="w-full bg-neutral-50 ring-1 ring-neutral-200 text-neutral-900 rounded-md text-base h-11 p-4 outline-none focus:ring-2 focus:ring-red-600 focus:outline-none ease-in-out duration-700 " />
                    </div>
                    <div className='space-y-1.5'>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-500">
                            Descrição
                        </label>
                        <textarea 
                        value={formData?.descricao}
                        onChange={(e) => setFormValue({ descricao: e?.target?.value })}
                        name="descricao"
                        id="" rows={3}  className="w-full block bg-neutral-50 ring-1 ring-neutral-200 text-neutral-900 rounded-md text-base h-11 p-4 outline-none focus:ring-2 focus:ring-red-600 focus:outline-none ease-in-out duration-700 "></textarea>
                    </div>
                </div>

                
                <button type="button" onClick={handleSave} className="w-full py-2 px-4 bg-red-600 text-neutral-50 rounded-md">
                {!isUpdate ? `Cadastrar` : `Atualizar`}
                </button>

            </form>
        </div>
    </div>
  )
}