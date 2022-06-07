<<<<<<< Updated upstream
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
=======
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
>>>>>>> Stashed changes

function App() {
  const [count, setCount] = useState(0)

<<<<<<< Updated upstream
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
=======
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

			</BrowserRouter>
		</>
	)
>>>>>>> Stashed changes
}

export default App
