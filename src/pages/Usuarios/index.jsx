import React, { useEffect, useState } from 'react'
import api from '../../services/axios'
import './Usuarios.css';

function Usuarios() {

	const [usuarios, setUsuarios] = useState([])

	useEffect(() => {
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

		obtemUsuarios()
	}, [])
	return (
		<main>
			{/* <ul></ul> */}
			{usuarios.map(usuario => (
				<div key={usuario.id} className='usuario'>
					<div className='header'>
						<div>{usuario.nome}</div>
					</div>
					<div className='body'>
						<div>{usuario.email}</div>
						<div>{usuario.endereco}</div>
						<div>{usuario.cidade}</div>
						<div>{usuario.estado}</div>
					</div>
					<div className='footer'>
						<button>escolher</button>
						<button>escolher</button>
					</div>
				</div>
			))}
		</main>
	)
}

export default Usuarios