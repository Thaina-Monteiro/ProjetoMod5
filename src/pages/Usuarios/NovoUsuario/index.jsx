import React, { useState } from 'react';
import './NovoUsuario.css';
import api from '../../../services/axios';

function NovoUsuario() {
	const [nome, setNome] = useState('')
	const [email, setEmail] = useState('')
	const [endereco, setEndereco] = useState('')
	const [cidade, setCidade] = useState('')
	const [estado, setEstado] = useState('')

	const enviarDados = async (e) => {
		e.preventDefault()
		const response = await api.post('/usuarios', {
			nome,
			email,
			endereco,
			cidade,
			estado
		})
		console.log(response)
	}	
	return (
		<main>
			<form action="" onSubmit={enviarDados}>
				<section className='form__secao'>
					<label htmlFor="">Digite seu nome</label>
					<input type="text" onChange={(e) => setNome(e.target.value)}/>
				</section>
				<section className='form__secao'>
					<label htmlFor="">Digite seu email</label>
					<input type="email"onChange={(e) => setEmail(e.target.value)} />
				</section>
				<section className='form__secao'>
					<label htmlFor="">Digite seu endereco</label>
					<input type="text" onChange={(e) => setEndereco(e.target.value)}/>
				</section>
				<section className='form__secao'>
					<label htmlFor="">Digite sua cidade</label>
					<input type="text" onChange={(e) => setCidade(e.target.value)}/>
				</section>
				<section className='form__secao'>
					<label htmlFor="">Digite seu estado</label>
					<input type="text" onChange={(e) => setEstado(e.target.value)}/>
				</section>
				<button type="submit">Enviar</button>
			</form>
		</main>
	)
}

export default NovoUsuario