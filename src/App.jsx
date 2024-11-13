import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";

// npm install react-router-dom

const products = [
  { id: 1, title: "Glass" },
  { id: 2, title: "Chips" },
  { id: 3, title: "Godis" },
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="about" element={<AboutPage />}></Route>
            <Route path="info/:number" element={<InfoPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Layout() {
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />

      {products.map((product, i) => (
        <Link to={"/info/" + product.id}>Product {i}</Link>
      ))}

      <Outlet />

      <footer>Footer</footer>
    </>
  );
}

function HomePage() {
  return <div>Home Page!</div>;
}

function AboutPage() {
  // Gör detta för att navigera med kod / JavaScript istället för <Link>
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div>
      About Page!
      <img
        onClick={goToHomePage}
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.M-5ruDumHIwe6KvvYl1vBwHaEo%26pid%3DApi&f=1&ipt=299e3e72c530c9738f34e0bfd2b0120b9f7729ac4962b2accdf88915344c7ba1&ipo=images"
      />
    </div>
  );
}

function InfoPage() {
  const params = useParams();

  // Omvandla nummber till integer eftersom det kommer in som sträng
  const id = Number.parseInt(params.number);

  const product = products.find((product) => product.id === id);

  // 'number' för att det var namnet vi angav variabeln på rad 21 (InfoPage route)
  return (
    <>
      <h2>{product.title}</h2>
    </>
  );
}

export default App;
