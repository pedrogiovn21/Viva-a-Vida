import PostCardTreino from './componentes/PostCardTreino'
import posts from '../../assets/exercicios.json'
import './Treinos.css'
import Botao from '../PaginaPadrao/componentes/Botao'
import { Link } from 'react-router-dom'

const Treinos = () => {
    return (
        <>
            <div className='containerTreino'>
                <Link to='/' className='btnVoltar'>
                    <Botao tamanho='sm'>Inicio</Botao>
                </Link>

                <div className='containerTreinoTexto'>
                    <h1>TREINOS</h1>
                    <h2>SAIBA MAIS ABAIXO</h2>
                </div>
            </div>

            <main className='treinos'>


                <ul className="containerTreinoBtn">
                    {posts.map((post) =>
                        <li key={post.id}>
                            <PostCardTreino post={post} />
                        </li>
                    )}
                </ul>
            </main>

        </>


    )
}

export default Treinos