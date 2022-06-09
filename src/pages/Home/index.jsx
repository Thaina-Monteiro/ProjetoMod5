import React, { useEffect, useState } from 'react'
import style from './Home.module.scss';
import imagemPecas from '../../Asset/AdobeStock_302108098_Preview.jpeg'
import imagemSeguros from '../../Asset/AdobeStock_412460677_Preview.jpeg'
import imagemUsuarios from '../../Asset/AdobeStock_122836383_Preview.jpeg'
import imagemFornecedores from "../../Asset/AdobeStock_321333404_Preview.jpeg"
import imagemFuncionarios from '../../Asset/AdobeStock_306875857_Preview.jpeg'
import imagemVendas from "../../Asset/AdobeStock_308328093_Preview.jpeg"
import { useNavigate } from 'react-router-dom';
import Animacao from '../../components/Animacao';

function Home() {

	const navigate = useNavigate()

	const [loading, setLoading] = useState(false)

	const itens = [
		{
			label: 'Peças',
			id: 0,
			rota: '/pecas',
			imagem: imagemPecas
		},
		{
			label: 'Seguros',
			id: 1,
			rota: '/seguros',
			imagem: imagemSeguros
		},
		{
			label: 'Usuários',
			id: 2,
			rota: '/usuarios',
			imagem: imagemUsuarios
		},
		{
			label: 'Fornecedores',
			id: 3,
			rota: '/fornecedores',
			imagem: imagemFornecedores
		},
		{
			label: 'Funcionários',
			id: 4,
			rota: '/funcionario',
			imagem: imagemFuncionarios
		},
		{
			label: 'Vendas',
			id: 5,
			rota: '/vendas',
			imagem: imagemVendas
		}
	]

	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 2000)
	}, [])

	return (
		<>
			{loading ?
				<Animacao /> :
				<main className={style.principal}>
					<h2>Bem-vindo ao seu painel administrativo!</h2>
					<section className={style.secoes}>
						{itens.map(item => (
							<div key={item.id} className={style.secao} onClick={() => navigate(`${item.rota}`)}>
								<div className={style.secao__img}>
									<img src={item.imagem} alt="" />
								</div>
								<h4 className={style.secao__titulo}>{item.label}</h4>
							</div>
						))}
					</section>
				</main>
			}
		</>
	)
}

export default Home