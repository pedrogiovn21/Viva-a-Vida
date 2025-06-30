import './PostTreinoModelo.css'

const PostTreinoModelo = ({children, titulo}) => {
    return(
        <article className='postModeloContainer'>
            <div className='fotoCapa' 
            ></div>

            <h2 className='titulo' >
                {titulo}
            </h2>

            <div className='postConteudoContainer' >
                {children}
            </div>
        </article>
    )
}

export default PostTreinoModelo