import textDicas from '../../assets/dicas.json';
import ReactMarkdown from 'react-markdown';
import './Dicas.css';
import { Link } from 'react-router-dom';
import Botao from '../PaginaPadrao/componentes/Botao';

const Dicas = () => {
    return (
        <div className='containerTreinoDicas'>
            <Link to='/' className='btnVoltar'>
                <Botao tamanho='sm'>Inicio</Botao>
            </Link>
            <h1>{textDicas.titulo}</h1>
            <div className='conteudoMarkdown'>
                <ReactMarkdown>{textDicas.conteudoMarkdown}</ReactMarkdown>
            </div>
        </div>
    );
}

export default Dicas;