import { Link } from 'react-router-dom'
import Botao from '../Botao'
import './Cabecalho.css'

const Cabecalho = () => {
    return (
        <header>
            <div className='containerLeft'>
                <div className='containerLogo'>
                    <img
                        className='imageLogo'
                        src="/logo.png"
                        alt="Logo Viva a vida"
                    />
                    <h1 className='tituloLogo'>Viva a Vida</h1>
                </div>
                <div className='cabecalhoTexto'> 
                    <h2>A vida <br /> precisa de <br /> movimento</h2>
                    <p>
                        Faça do movimento uma parte da sua vida diária com exercícios curtos e fáceis
                    </p>
                </div>
                <Link to='/sobrenos'>
                    <Botao>
                        SAIBA MAIS
                    </Botao>
                </Link>
                
            </div>
            <img className='imgCell' src="/celular.png" alt="" />
        </header>
    )
}

export default Cabecalho
