import { Link } from 'react-router-dom'
import Botao from '../PaginaPadrao/componentes/Botao'
import './Sobrenos.css'

const SobreNos = () => {
    return (
        <section className='containerSobrenos'>
            <Link to='/' className='btnVoltar'>
                <Botao tamanho='sm'>Inicio</Botao>
            </Link>
            <header className='headerSobrenos'>
                <img className="sobrenosImg" src="backgroundsobrenos.png" alt="" />
                <div className='containerSobrenosTexto'>
                    <div className='containerSobrenosTitulo'>
                        <img src="logo.png" alt="" />
                        <h1>
                            Viva a <br />
                            Vida
                        </h1>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </header>

            {/* Texto adicional de "Sobre Nós" */}
            <div class="sobreNosTexto">
                <h2>Quem Somos?</h2>
                <p>
                    A <strong>Viva a Vida</strong> é uma equipe apaixonada por transformar vidas através do movimento e do bem-estar.
                    Nossos profissionais são personal trainers qualificados, dedicados a oferecer um atendimento individualizado, focado em resultados reais e sustentáveis.
                </p>
                <p>
                    Acreditamos que cada corpo é único, por isso nossos treinos são planejados com base nas suas necessidades, objetivos e limitações.
                    Seja para emagrecer, ganhar massa muscular, melhorar a mobilidade ou simplesmente ter mais disposição no dia a dia, nós estamos ao seu lado em cada etapa.
                </p>
                <p>
                    Mais do que treinar, queremos ajudar você a viver melhor. Porque viver bem é viver em movimento. Vem com a gente!
                </p>
            </div>
        </section >

    )
}

export default SobreNos