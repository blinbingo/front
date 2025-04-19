
export default function Bingo() {
  return (
    <div className="background">
      <header className="topo">
        <img src="/assets/logo.png" alt="Logo" className="logo" />
        <div className="botoes">
          <button className="btn-transparente">Entrar</button>
          <button className="btn-verde">Cadastre-se</button>
        </div>
      </header>

      <div className="icones-flutuantes">
        <img src="/assets/icon-bingo.svg" alt="Bingo" />
        <img src="/assets/icon-carta.svg" alt="Cartas" />
        <img src="/assets/icon-contato.svg" alt="Contato" />
      </div>

      <div className="construcao">
        <h1>EM CONSTRUÇÃO</h1>
      </div>
    </div>
  );
}
