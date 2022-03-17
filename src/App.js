import Navbar from "./NavBar";
import Card from "./Card";
import data from "./data";

function App() {
  const createCard = (article, index) => {
    return (
      <Card
        key={index}
        index={index}
        title={article.title}
        sub={article.sub}
        text={article.text}
      ></Card>
    );
  };

  return (
    <div className="App">
      <Navbar />
      <div className="card-container">{data.map(createCard)}</div>
    </div>
  );
}

export default App;
