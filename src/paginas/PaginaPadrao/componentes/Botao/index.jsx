import './Botao.css'

const Botao = ({children, tamanho, rota}) => {
    return(
        <button to={rota} className={`btnRosa ${tamanho === 'sm' ? 'btnRosa-sm' : ''}`}>{children}</button>
    )
}

export default Botao