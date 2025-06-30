import Cabecalho from "./componentes/Cabecalho"
import Info from "./componentes/Info"
import Recursos from "./componentes/Recursos"
import Botao from "./componentes/Botao"
import SectionDicas from "./componentes/SectionDicas"
import Depoimentos from "./componentes/Depoimentos"
import Rodape from "./componentes/Rodape"
import { Link } from 'react-router-dom';

const PaginaPadrao = () => {
    return (
        <>
            <Cabecalho />
            <Info
                fotoCapa='./pesos.png'
                titulo='Sobre a Viva a Vida'
                subtitulo={` O que há de especial sobre o seu produto, empresa ou serviço? 
                    Use este espaço para destacar as coisas que diferenciam você da concorrência, seja uma característica especial, uma filosofia única ou prêmios e reconhecimentos recebidos. Pense nisso como sua abordagem para chamar a atenção do leitor.`}
            />
            <Recursos />
            <Info
                fotoCapa='/boxing-background.png'
                titulo='Treinos e exercícios'
                subtitulo='Fale sobre as características mais importantes deste produto ou serviço. Destacar as mais populares funciona também! Fale sobre as características mais importantes deste produto ou serviço. Destacar as mais populares funciona também!'>
                <Link to='/treinos'>
                    <Botao>
                        NOSSOS TREINOS
                    </Botao>
                </Link>
            </Info>
            <SectionDicas />
            <Depoimentos />
            <Rodape
                fotoCapa='./rodape.png'
            />
        </>
    )
}

export default PaginaPadrao 
