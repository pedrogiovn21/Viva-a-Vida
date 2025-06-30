
import './Rodape.css'

const Rodape = ({ fotoCapa }) => {
    return (
        <footer style={{ backgroundImage: `url(${fotoCapa})` }}>
            <h2>
                Fale Conosco
            </h2>
            <ul>
                <li className='ItensListaRodape'>
                    <h4>TELEFONE:</h4>
                    <p>(83) 99993-4796</p>
                </li>
                <li className='ItensListaRodape'>
                    <h4>E-MAIL:</h4>
                    <p>pedrogiovanepereira@gmail.com</p>
                </li>
                <li className='ItensListaRodape'>
                    <h4>SOCIAL:</h4>
                    <ul className='socialListaRodape'>
                        <li>
                            <a href="https://www.facebook.com" target='_blank' className='btnRedesSociais'>
                                <img className='socialImagens' src="/face.png" alt="" />
                            </a>
                        </li>
                        <li><a href="https://www.instagram.com" target='_blank' className='btnRedesSociais'>
                            <img className='socialImagens' src="insta.png" alt="" />
                        </a>
                        </li>
                        <li>
                            <a  href="https://twitter.com" target='_blank' className='btnRedesSociais' >
                                <img className='socialImagens' src="twitter.png" alt="" />
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </footer>
    )
}

export default Rodape