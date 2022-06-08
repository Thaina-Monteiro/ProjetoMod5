import React from 'react'
import style from './Header.module.scss';
import Logo from '../../Asset/logo.png';
import { useNavigate } from 'react-router-dom';

function Header() {
	const navigate = useNavigate()
	return (
		<header className={style.cabecalho}>
			<div className={style.logo} onClick={() => navigate('/')}>
				<img className={style.img} src={Logo} alt="" />
				<h1>Oficina mecânica</h1>
			</div>
		</header>
	)
}

export default Header