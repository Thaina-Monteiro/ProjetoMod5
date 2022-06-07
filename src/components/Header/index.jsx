import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
function Header() {
	const itensNav = [
		{
			label: 'Peças',
			id: 0,
			rota: '/'
		},
		{
			label: 'Seguros',
			id: 1,
			rota: '/'
		},
		{
			label: 'Usuarios',
			id: 2,
			rota: '/usuarios'
		},
		{
			label: 'Fornecedores',
			id: 3,
			rota: '/'
		},
		{
			label: 'Funcionario',
			id: 4,
			rota: '/funcionario '
		},
		{
			label: 'Vendas',
			id: 5,
			rota: '/'
		}
	]
	
	return (
		<header className='cabecalho'>
			<h1 className='cabecalho__titulo'>Oficina mecânica</h1>
			<nav>
				<ul>
					{itensNav.map(item => (
						<li key={item.id}>
							<Link to={item.rota}>
								{item.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default Header