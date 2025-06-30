import { Link } from 'react-router-dom'
import './PostCardTreino.css'

const PostCardTreino = ({ post }) => {
    return (
        <Link to={`/treinos/${post.id}`} style={{ textDecoration: 'none', textAlign: 'center'}}>
            <div className="botao-musculo">
                <img src={`/imagens/${post.id}.jpg`} alt="Triceps" className="imagem-musculo" />
                <h4 className="texto-musculo">{post.titulo}</h4>
            </div>
        </Link>
    )
}

export default PostCardTreino
