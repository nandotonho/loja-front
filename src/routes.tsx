import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Usuario from 'pages/Usuario';
import ListaUsuario from 'pages/ListaUsuario';
import Menu from 'components/Menu';
import Produto from 'pages/Produto';
import ListaProduto from 'pages/ListaProduto';
import { RecoilRoot } from 'recoil';
import { Suspense } from 'react';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />
        <RecoilRoot>
          <Suspense fallback="Carregando...">
            <Routes>
              <Route path='/' element={<ListaUsuario />} />
                <Route index path='/lista-usuario' element={<ListaUsuario />} />
                <Route path='/usuario' element={<Usuario />} />
                <Route path='/lista-produto' element={<ListaProduto />} />
                <Route path='/produto' element={<Produto />} />
            </Routes>
          </Suspense>
        </RecoilRoot>
      </Router>
    </main>
  )
}