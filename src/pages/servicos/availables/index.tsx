import { useLocation } from "react-router-dom";
import { useAvailableServico } from "./state";
import { Servicos } from "../../../components/Servicos";
import Card from "../../../components/Card";
import contractImage from '../assets/imagens/contrato.jpg';


export default function AvailableServico() {

  const { state } = useLocation();
  const { isUpdate = false } = state || {};

  

  const {
    data,
    totalData
  } = useAvailableServico({ navigationState: state });

  return (
    <div className='servicos bg-gray-100'>
        <h1>Serviços Disponíveis</h1>
        <p></p>
        <body className='h-screen  flex items-center justify-center gap-10'>
        {data.map((servico, index) => {
              const { id, titulo, preco, prestadorId} = servico || {};

              return (
                <Card
                key={index}
                serviceImage={contractImage}
                prestador={prestadorId}
                titulo={titulo}
                preco={preco}
            />
              );
            })}
       

        
        </body>
        

    </div>
  )
}