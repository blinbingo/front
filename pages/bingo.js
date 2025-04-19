
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

      <div className="sorteio-card">
        <h1 className="sorteio-titulo">SORTEIO DAS 15:00</h1>
        <div className="sorteio-infos">
          <span>20/04/2025 15:00</span>
          <span>COMEÇA EM 01:15:43</span>
        </div>
        <div className="sorteio-detalhes">
          <p>CARTELAS 24 NÚMEROS · 100 CARTELAS DISPONÍVEIS · VALOR DA CARTELA R$10,00 · BOLAS DE 0 A 60</p>
        </div>
        <div className="sorteio-premios">
          <p>3 ACERTOS - 5 REAIS TODOS OS GANHADORES</p>
          <p>6 ACERTOS - 10 REAIS TODOS OS GANHADORES</p>
          <p>9 ACERTOS - 20 REAIS TODOS OS GANHADORES</p>
          <p>12 ACERTOS - 30 REAIS TODOS OS GANHADORES</p>
          <p>15 ACERTOS - 50 REAIS TODOS OS GANHADORES</p>
          <p>18 ACERTOS - 100 REAIS TODOS OS GANHADORES</p>
          <p>21 ACERTOS - 300 REAIS TODOS OS GANHADORES</p>
        </div>
        <div className="sorteio-premio-final">
          <p>PRÊMIO CARTELA CHEIA</p>
          <h2>R$1000,00 PARA TODOS OS GANHADORES</h2>
        </div>
        <div className="sorteio-comprar">
          <button className="btn-ajuste">-</button>
          <span className="cartelas-qtd">4</span>
          <button className="btn-ajuste">+</button>
          <span className="total-valor">R$40,00</span>
          <button className="btn-verde grande">COMPRAR</button>
        </div>
      </div>
    </div>
  );
}
