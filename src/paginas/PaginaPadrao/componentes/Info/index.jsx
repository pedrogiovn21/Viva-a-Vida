import './Info.css'

const Info = ({titulo, subtitulo, fotoCapa, children}) => {
    return (
        <div className="containerInfo" style={{backgroundImage: `url(${fotoCapa})`}}>
            <div className='containerText' >
                <h2>
                    {titulo}
                </h2>
                <p>
                   {subtitulo}
                </p>
                {children}
            </div>
        </div>
    )
}

export default Info