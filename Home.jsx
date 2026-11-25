import Header from "../components/Header";

function Home() {
  return (
    <div>
      <Header />

      <section className="banner">
        <h2>DESTAQUE DA SEMANA</h2>

        <h1>Interestelar</h1>

        <p>
          Em um futuro onde a Terra está à beira do colapso,
          exploradores embarcam em uma missão para encontrar
          um novo lar para a humanidade.
        </p>

        <span>⭐ 8.7 / 10 IMDb</span>

        <button>Ver detalhes</button>
      </section>

      <section>
        <h2>🍿 Explore o universo do cinema</h2>
        <p>Descubra histórias, aventuras e grandes clássicos.</p>
      </section>
    </div>
  );
}

export default Home;
import Home from "./pages/Home";

function App() {
  return (
    <Home />
  );
}

export default App;