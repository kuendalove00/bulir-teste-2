import { Component } from "react";

interface HorizontalCardProps {
    serviceImage: string;
    prestador: string;
    titulo: string;
    preco: number;
    data: string
}

class HorizontalCard extends Component<HorizontalCardProps> {
    render(){
        return (
            <div className="bg-slate-600 grid grid-cols-3 gap-2 w-1/2
            shadow-lg rounded-md   ">
                <div className="col-span-1">
                    <img 
                    src={this.props.serviceImage} alt="" 
                    className="rounded-md w-full h-28 object-cover"
                    />
                </div>
                <div className="col-span-2 flex flex-col justify-between">
                    <h2 className="text-xl font-semibold">{this.props.titulo}</h2>
                    <p className="text-gray-500 text-base">{this.props.data}</p>
                    <p className="text-gray-500 text-base">Prestador: {this.props.prestador}</p>
                    <p className="text-gray-500 text-base">Preço: {this.props.preco}</p>
                </div>
            </div>
        )
    }
}

export default HorizontalCard;