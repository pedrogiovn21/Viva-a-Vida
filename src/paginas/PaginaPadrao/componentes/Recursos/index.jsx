import './Recursos.css'
import iconTenis from '/tenis.png'
import iconPeso from '/peso.png'
import iconCoracao from '/coracao.png'

const Recursos = () => {
    return (
        <div className='containerRecursos'>
            <h1>Pincipais Recursos</h1>
            <ul>
                <li className='itemLista'>
                    <div className='containerListaItem'>
                        <img src={iconTenis} alt="" />
                        <p>
                            Escreva uma característica essencial do aplicativo que está sendo anunciado.
                        </p>
                    </div>
                </li>
                <li className='itemLista'>
                    <div className='containerListaItem'>
                        <img src={iconPeso} alt="" />
                        <p>
                            Escreva uma característica essencial do aplicativo que está sendo anunciado.
                        </p>
                    </div>
                </li>
                <li className='itemLista'>
                    <div className='containerListaItem'>
                        <img src={iconCoracao} alt="" />
                        <p>
                            Escreva uma característica essencial do aplicativo que está sendo anunciado.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Recursos