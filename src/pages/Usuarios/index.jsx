import React, { useEffect, useState } from 'react'
import Button from '../../components/Button';
import api from '../../services/axios'
import './Usuarios.css';
import { AiFillDelete } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai'
import {HiUserAdd} from 'react-icons/hi'

function Usuarios() {

	const [usuarios, setUsuarios] = useState([])

	const obtemUsuarios = async () => {
		try {
			const response = await api.get('/usuarios')
			const listaUsuarios = response.data
			console.log(response.data)
			setUsuarios([...listaUsuarios])
		} catch (error) {
			console.log(error);
		}
	}

	const deletarUsuario = async (id) => {
		await api.delete(`/usuarios/${id}`)
		obtemUsuarios()
	}

	useEffect(() => {
		obtemUsuarios()
	}, [])

	return (
		<main>
			<div className='usuario__novo'>
				<Button adicionar={true} onClick={() => console.log('novo ein')}>
				<HiUserAdd size='18px' style={{ marginRight: '5px' }} />
					Adicionar um novo usuário
				</Button>
			</div>
			<div className='usuarios'>
			{usuarios.map(usuario => (
				<div key={usuario.id} className='usuario'>
					<div className='header'>
						<h2>{usuario.nome}</h2>
					</div>
					<div className='body'>
						<p><span>Email: </span>{usuario.email}</p>
						<p><span>Endereço: </span>{usuario.endereco}</p>
						<p><span>Cidade: </span>{usuario.cidade}, {usuario.estado}</p>
						<p>{usuario.id}</p>
					</div>
					<div className='footer'>
						<Button deletar={true} onClick={() => deletarUsuario(usuario.id)}>
							<AiFillDelete color='white' size='18px' style={{ marginRight: '5px' }} />
							Deletar
						</Button>
						<Button>
							<AiFillEdit color='white' size='18px' style={{ marginRight: '5px' }} />
							Editar
						</Button>
					</div>
				</div>
			))}
			</div>
		</main>
	)
}

export default Usuarios