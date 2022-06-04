import React, { useEffect, useState } from 'react';
import './EditarUsuario.css';
import api from '../../../services/axios';
import { useParams } from 'react-router-dom';

function EditarUsuario() {

	const {id} = useParams()

	const [nome, setNome] = useState('')
	const [email, setEmail] = useState('')
	const [endereco, setEndereco] = useState('')
	const [cidade, setCidade] = useState('')
	const [estado, setEstado] = useState('')

	const enviarDadosAtualizados = async (e) => {
		e.preventDefault()
		const response = await api.put(`/usuarios/${id}`, {
			nome,
			email,
			endereco,
			cidade,
			estado
		})
		console.log(response)
	}
	
	useEffect(() => {
		const obtemDados = async() => {
			const response = await api.get(`/usuarios/${id}`)
			const {nome, email, endereco, cidade, estado } = response.data
			setNome(nome)
			setEmail(email)
			setEndereco(endereco)			
			setCidade(cidade)
			setEstado(estado)
		}
		obtemDados()
	}, [])
	
	return (
		<main>
			<form action="" onSubmit={enviarDadosAtualizados}>
				<section className='form__secao'>
					<label htmlFor="">Digite seu nome</label>
					<input type="text" 
					value={nome} 
					onChange={(e) => setNome(e.target.value)}/>
				</section>
				<section className='form__secao'>
					<label htmlFor="">Digite seu email</label>
					<input type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)} />
				</section>
				<section className='form__secao'>
					<label htmlFor="">Digite seu endereco</label>
					<input type="text"
					value={endereco}
					onChange={(e) => setEndereco(e.target.value)}/>
				</section>
				<section className='form__secao'>
					<label htmlFor="">Digite sua cidade</label>
					<input type="text" 
					value={cidade}
					onChange={(e) => setCidade(e.target.value)}/>
				</section>
				<section className='form__secao'>
					<label htmlFor="">Digite seu estado</label>
					<input type="text" 
					value={estado}
					onChange={(e) => setEstado(e.target.value)}/>
				</section>
				<button type="submit">Enviar</button>
			</form>
		</main>
	)
}

export default EditarUsuario