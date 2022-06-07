import React from 'react'
import Header from './components/Header'
import Usuarios from './pages/Usuarios'
import Funcionario from './pages/Funcionario'
import Home from './pages/Home'
import NovoUsuario from './pages/Usuarios/NovoUsuario'
import NovoFuncionario from './pages/Funcionario/NovoFuncionario'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditarUsuario from './pages/Usuarios/EditarUsuario'
import EditFuncionario from './pages/Funcionario/EditFuncionario'

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
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/funcionario' element={<Funcionario />} />
					<Route path='/funcionario/novo' element={<NovoFuncionario />} />
					<Route path='/funcionario/:id' element={<EditFuncionario />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App
