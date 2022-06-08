import React, { useEffect, useState } from 'react'
import Button from '../../components/Button';
import api from '../../services/axios'
import style from './Usuarios.module.scss'
import { AiFillDelete } from 'react-icons/ai'
import { AiFillEdit } from 'react-icons/ai'
import {HiUserAdd} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';

function Usuarios() {

	const [usuarios, setUsuarios] = useState([])
	const [loading, setLoading] = useState(false)

	const navigate = useNavigate()

	const obtemUsuarios = async () => {
		try {
			setLoading(true)
			const response = await api.get('/usuarios')
			const listaUsuarios = response.data
			setUsuarios([...listaUsuarios])
			setLoading(false)
		} catch (error) {
			console.log(error);
		}
	}

	const deletarUsuario = async (id) => {
		await api.delete(`/usuarios/${id}`)
		obtemUsuarios()
	}

	const novoUsuario = () => {
		navigate('novo')
	}

	const editarUsuario = (id) => {
		navigate(`${id}`)
	}

	useEffect(() => {
		obtemUsuarios()
	}, [])

	return (
		<main className={style.principal}>
			<div className={style.usuario__novo}>
				<Button adicionar={true} onClick={() => novoUsuario()}>
				<HiUserAdd size='18px' style={{ marginRight: '5px' }} />
					Adicionar um novo usuário
				</Button>
			</div>
			{loading &&
			<h2 className={style.loading}>Estamos carregando...</h2>
			}
			<div className={style.usuarios}>
			{usuarios.map(usuario => (
				<div key={usuario.id} className={style.usuario}>
					<div className={style.header}>
						<h2>{usuario.nome}</h2>
					</div>
					<div className={style.body}>
						<p><span>Email: </span>{usuario.email}</p>
						<p><span>Endereço: </span>{usuario.endereco}</p>
						<p><span>Cidade: </span>{usuario.cidade}, {usuario.estado}</p>
					</div>
					<div className={style.footer}>
						<Button deletar={true} onClick={() => deletarUsuario(usuario.id)}>
							<AiFillDelete color='white' size='18px' style={{ marginRight: '5px' }} />
							Deletar
						</Button>
						<Button onClick={() => editarUsuario(usuario.id)}>
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