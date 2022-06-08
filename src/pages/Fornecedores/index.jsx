import { React, useEffect, useState } from "react";
import api from "../../services/axios";



export default () => {
    const [fornecedor, setFornecedor] = useState([])


    const GetFornecer = async () => {

        const req = await api.get('/fornecedor');
        const res = req.data;
        setFornecedor([...res]);
    }

    const DeleteFornecer = async (id) => {

        await api.delete(`/usuarios/${id}`);
		GetFornecer(); 
    }

    const UpdateFornecer = (id) => {
		navigate(`${id}`)
	}
   

    useEffect(() => {
        GetFornecer();
    }, [])


    return (
        <main>
            <h1>Lista de Fornecedores</h1>
            <table>
                <tr>
                    <td>Id</td>
                    <td>Fornecedor</td>
                    <td>Marca</td>
                    <td>Pedido</td>
                    <td>Qtd</td>
                    <td>Vencimento</td>
                </tr>
                {fornecedor.map((fornecedor, index) => {
                    return (
                        <tr key={index}>
                            <td>{fornecedor.id}</td>
                            <td>{fornecedor.nome}</td>
                            <td>{fornecedor.marca}</td>
                            <td>{fornecedor.pedido}</td>
                            <td>{fornecedor.qtd}</td>
                            <td>{fornecedor.vencimento}</td>
                        </tr>
                    )
                })}
            </table>
            
            
        </main>
    )
}