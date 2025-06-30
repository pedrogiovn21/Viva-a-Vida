import './SectionDicas.css'
import { Link } from 'react-router-dom'
import Botao from "../Botao"

const SectionDicas = () => {
    return (
        <div className="containerDicas">
            <img src="/woman-tips.png" alt="" />
            <div className='containerTexto'>
                <h2>Dicas de bem-estar</h2>
                <p>Fale sobre as características mais importantes deste produto ou serviço. Destacar as mais populares funciona também! Fale sobre as características mais importantes deste produto ou serviço.</p>
                <Link to='dicas'>
                    <Botao >
                        ACOMPANHE NOSSAS DICAS
                    </Botao>
                </Link>

            </div>

        </div>
    )
}

export default SectionDicas
