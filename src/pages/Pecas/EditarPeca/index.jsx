import axios from "axios"
import React,{ useEffect, useState } from "react"
import style from './../../Usuarios/EditarUsuario/EditarUsuario.module.scss'
import { useParams } from 'react-router-dom';
import Button from '../../../components/Button';

function EditarPeca() {
    const [nome, setNome] = useState('')
    const [quantidade, setQuantidade] = useState(0)
    const [categoria, setCategoria] = useState('')
    const [preço, setPreco] = useState(0)

    const {id} = useParams()
    useEffect(() =>{
        const pegaPeca = async () => {
            axios.get('https://oficina-mecanica-resilia.herokuapp.com/pecas/atributos')
                .then(response => {
                    const peca = response.data.filter((peca) => peca.id == id)
                    console.log(peca[0])
                    setNome(peca[0].nome)
                    setQuantidade(peca[0].quantidade)
                    setCategoria(peca[0].categoria)
                    setPreco(peca[0].preço)
                })
        }
        pegaPeca()
    }, [])
    

   

    const alterarPeca = async (e) => {
		e.preventDefault()
		await axios({
            method: 'put',
            url: 'https://oficina-mecanica-resilia.herokuapp.com/pecas/',
            data: {
                dados:{id: id},
                dadosNovos:{
                    nome: nome
                }
            }
        })
        window.location.href = '/pecas'
	}

    // console.log('opa',peca)

    return(
        <main className={style.principal}>
			<h2>Editar Peça</h2>
			<form form action="" onSubmit={alterarPeca} className={style.form} >
				<section className={style.form__secao}>
					<label htmlFor="nome">Nome</label>
					<input type="text" id='nome' value={nome} onChange={(e) => setNome( e.target.value)}/>
				</section>
				<section className={style.form__secao}>
					<label htmlFor="quantidade">Quantidade</label>
					<input type="number" id="uantidade" value={quantidade} onChange={(e) => setQuantidade( e.target.value)} />
				</section>
				<section className={style.form__secao}>
					<label htmlFor="categoria">Categoria</label>
					<input type="text" id='categoria' value={categoria} onChange={(e) => setCategoria( e.target.value)}/>
				</section>
				<section className={style.form__secao}>
					<label htmlFor="preco">Preço</label>
					<input type="number" id='preco' value={preço} />
				</section>
				<Button tipo='submit' adicionar={true}>Alterar</Button>
                <center><a href="/pecas">voltar</a></center>
			</form>
		</main>
    )
}

export default EditarPeca