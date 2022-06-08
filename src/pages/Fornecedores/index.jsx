import {React} from "react";
import api from "../../services/axios";

export default () => { 

    

    const ListaFornecer = async () => {

		const req = await api.get('/fornecedor');
		const res =  req.data;
        console.log(res);		
	}




    return ( 
       <main>
           <h1>Lista de Fornecedores</h1>
           <input type="button" value="lista" onClick={()=>{ListaFornecer()}} />

       </main>
    )
}