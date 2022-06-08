import React from 'react'
import Header from './components/Header'
import Usuarios from './pages/Usuarios'
import Pecas from './pages/Pecas'
import EditarPeca from './pages/Pecas/EditarPeca'
import Home from './pages/Home'
import NovoUsuario from './pages/Usuarios/NovoUsuario'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditarUsuario from './pages/Usuarios/EditarUsuario'
import Footer from './components/Footer'

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
					<Route path='/pecas' element={<Pecas />}></Route>
					<Route path='/pecas/:id' element={<EditarPeca />}></Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App
