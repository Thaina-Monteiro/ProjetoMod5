import React from 'react'
import style from './Home.module.scss';

function Home() {

		const itens = [
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
			rota: '/'
		},
		{
			label: 'Vendas',
			id: 5,
			rota: '/'
		}
	]


	return (
		<main className={style.principal}>
			<h2>Administrativo</h2>
			<section className={style.secoes}>
				{itens.map(item => (
					<div key={item.id} className={style.secao}>
						{item.label}
					</div>
				))}
			</section>
		</main>
	)
}

export default Home