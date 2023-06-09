import React from 'react';
import './App.css';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import ListaTema from './components/temas/listaTema/ListaTema';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contatos from './paginas/contatos/Contatos';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import store from './store/Store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import FloatingButton from './components/estaticos/FloatingButton/FloatingButton';
import MycChatbot from './components/chatbot/Chatbot';


function App() {
  return ( 
    <>
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
        <Routes >
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/formulariotema" element={<CadastroTema />} />
          <Route path="/postagens" element={<ListaPostagem />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPostagem />} />
          <Route path="/formulariopostagens" element={<CadastroPostagem />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
           <Route path="/deletarTema/:id" element={<DeletarTema />} />
           <Route path='chat' element={<MycChatbot/>} />
        </Routes>
        </div>
        
        <Footer />
        <FloatingButton />
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
