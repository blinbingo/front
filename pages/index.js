
export default function Home() {
  return (
    <div className="background">
      <aside className="menu-lateral">
        <div className="menu-top">
          <img src="/assets/icon-bingo.svg" alt="Bingo" />
          <img src="/assets/icon-carta.svg" alt="Cartas" />
        </div>
        <div className="menu-bottom">
          <img src="/assets/icon-contato.svg" alt="Contato" />
        </div>
      </aside>

      <header className="topo">
        <img src="/assets/logo.png" alt="Logo" className="logo" />
        <div className="botoes">
          <button className="btn-transparente">Entrar</button>
          <button className="btn-verde">Cadastre-se</button>
        </div>
      </header>

      <main className="banner">
        <div className="texto">
          <h1>
            JOGOS <span className="verde">EMOCIONANTES</span> E<br />
            PRÊMIOS <span className="verde">INCRÍVEIS</span> SEM<br />
            SAIR DE CASA!
          </h1>
          <p>Sua sorte está apenas a um clique de distância!</p>
        </div>
        <div className="imagem">
          <img src="/assets/banner.png" alt="Banner" />
        </div>
      </main>
    </div>
  );
}
