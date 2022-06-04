import React from 'react'
import Header from './components/Header'
import Usuarios from './pages/Usuarios'
import Home from './pages/Home'
import NovoUsuario from './pages/Usuarios/NovoUsuario'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/usuarios' element={<Usuarios />} />
					<Route path='/usuarios/novo' element={<NovoUsuario />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
