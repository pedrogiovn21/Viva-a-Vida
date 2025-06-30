import { useParams } from 'react-router-dom'
import './PostTreinos.css'
import posts from '../../../../assets/exercicios.json'
import PostTreinoModelo from '../PostTreinoModelo'
import ReactMarkdown from 'react-markdown'
import PaginaPadrao from '../../../PaginaPadrao'

const PostTreinos = () => {
    const parametros = useParams()

    const post = posts.find((post) => post.id === Number(parametros.id))

    if (!post) {
        return (
        <Link to='' element={<PaginaPadrao />}>
            <a>Inicio</a>
        </Link>)
    }

    return (
        <PostTreinoModelo
            fotoCapa={`/imagens/${post.id}.jpg`} // Corrigido o path
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
            </div>

        </PostTreinoModelo>
    )
}

export default PostTreinos