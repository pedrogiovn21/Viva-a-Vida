import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PaginaPadrao from './paginas/PaginaPadrao'
import Treinos from './paginas/Treinos'
import SobreNos from './paginas/Sobrenos'
import PostTreinos from './paginas/Treinos/componentes/PostTreinos'
import Dicas from './paginas/Dicas'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PaginaPadrao />} />
        <Route path='treinos' element={<Treinos />} />
        <Route path='sobrenos' element={<SobreNos />} />
        <Route path='treinos/:id' element={<PostTreinos />} />
        <Route path='dicas' element={<Dicas />} />
      </Routes>


    </BrowserRouter>

  )
}

export default AppRoutes
