import React from 'react'
import Header from './components/Header'
import Usuarios from './pages/Usuarios'
import Home from './pages/Home'
import NovoUsuario from './pages/Usuarios/NovoUsuario'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditarUsuario from './pages/Usuarios/EditarUsuario'

function App() {

	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/usuarios' element={<Usuarios />} />
					<Route path='/usuarios/novo' element={<NovoUsuario />} />
					<Route path='/usuarios/:id' element={<EditarUsuario />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
