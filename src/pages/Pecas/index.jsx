import { useEffect, useState } from 'react'
import api from '../../services/axios'
import { useNavigate } from 'react-router-dom';
import style from './Pecas.module.scss'
import Button from '../../components/Button';
import { AiFillDelete } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai'
import axios from 'axios';
import {HiUserAdd} from 'react-icons/hi'

function Pecas() {
    const [pecas, setPecas] = useState([])
    // const [mostraBotao, setMostraBotao] = useState(false)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

	const obtemPecas = async () => {
		try {
			const response = await api.get('/pecas')
			const listaPecas = response.data
			setPecas([...listaPecas])
		} catch (error) {
			console.log(error);
		}
	}


    const editarPeca = (id) => {
		navigate(`${id}`)
	}

    const deletarPeca = async (id) => {
        await axios({
            method: 'delete',
            url: 'https://oficina-mecanica-resilia.herokuapp.com/pecas',
            data: {
                id: id
            }
        });

        obtemPecas()
	}

    const novaPeca = () => {
		navigate('novo')
	}

    useEffect(() =>{
        obtemPecas()
    }, [])


    return(
            <div className={style.pecas}>
            <h1>Controle de Peças</h1>
            <Button adicionar={true} onClick={() => novaPeca()}>
				<HiUserAdd size='18px' style={{ marginRight: '5px' }} />
					Adicionar Peça
			</Button>
            <tbody>
                <table >
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Qtd</th>
                        <th>Marca</th>                        
                        <th>Garantia</th>
                        <th>Categoria</th>
                        <th>Preço</th>
                    </tr>
                
                {pecas.map( (peca, index) => {
                    return(
                        <tr key={index}>
                            <td>{peca.id}</td>
                            <td>{peca.nome ?? peca.nome.toUpperCase() }</td>
                            <td>{peca.quantidade}</td>
                            <td>{peca.marca}</td>
                            <td>{peca.garantia}</td>
                            <td>{peca.categoria ?? peca.categoria.toUpperCase() }</td>
                            <td>R${peca.preço},00</td>
                            <Button btnPecas = {true} onClick={() => editarPeca(peca.id)}>
                                <AiFillEdit color='white' size='18px' style={{ marginRight: '5px' }} />
                                Editar
                            </Button>
                            <Button btnPecas = {true} deletar={true} onClick={() => deletarPeca(peca.id)}>
                                <AiFillDelete color='white' size='18px' style={{ marginRight: '5px' }} />
                                Deletar 
                            </Button>
                        </tr>
                )})}
                </table>
            </tbody>
        </div>  
    )
}

export default Pecas