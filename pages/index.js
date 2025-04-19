
import { useState } from 'react';

export default function Home() {
  const [showCadastro, setShowCadastro] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [cadastroSucesso, setCadastroSucesso] = useState(false);

  const handleCadastro = () => {
    setCadastroSucesso(true);
    setTimeout(() => {
      setShowCadastro(false);
      setCadastroSucesso(false);
    }, 1500);
  };

  return (
    <div className="background">
      <header className="topo">
        <img src="/assets/logo.png" alt="Logo" className="logo" />
        <div className="botoes">
          <button className="btn-transparente" onClick={() => setShowLogin(true)}>Entrar</button>
          <button className="btn-verde" onClick={() => setShowCadastro(true)}>Cadastre-se</button>
        </div>
      </header>

      {/* Modal Cadastro */}
      {showCadastro && (
        <div className="modal">
          <div className="modal-content">
            <h2>Cadastro</h2>
            <input type="text" placeholder="Apelido" />
            <input type="password" placeholder="Senha" />
            <button className="btn-verde" onClick={handleCadastro}>Cadastrar</button>
            {cadastroSucesso && <p className="mensagem">Cadastro salvo</p>}
          </div>
        </div>
      )}

      {/* Modal Login */}
      {showLogin && (
        <div className="modal">
          <div className="modal-content">
            <h2>Entrar</h2>
            <input type="text" placeholder="Apelido" />
            <input type="password" placeholder="Senha" />
            <button className="btn-verde">Entrar</button>
          </div>
        </div>
      )}
    </div>
  );
}
