
export default function Home() {
  return (
    <div className="background">
      <header className="topo">
        <img src="/assets/logo.png" alt="Logo" className="logo" />
        <div className="botoes">
          <button className="btn-transparente">Entrar</button>
          <button className="btn-verde">Cadastre-se</button>
        </div>
      </header>

      <main className="conteudo-central">
        <div className="banner-texto">
          <h1>
            JOGOS <span className="verde">EMOCIONANTES</span> E <br />
            PRÊMIOS <span className="verde">INCRÍVEIS</span> SEM <br />
            SAIR DE CASA!
          </h1>
          <p>Sua sorte está apenas a um clique de distância!</p>
        </div>
        <div className="banner-imagem">
          <img src="/assets/banner.png" alt="Banner" />
        </div>
      </main>

      <div className="icones-flutuantes">
        <img src="/assets/icon-bingo.svg" alt="Bingo" />
        <img src="/assets/icon-carta.svg" alt="Cartas" />
        <img src="/assets/icon-contato.svg" alt="Contato" className="contato" />
      </div>
    </div>
  );
}
