const Header = () => {
  return (
    <header>
      <h1>Website Saya</h1>
      <p>Belajar React Komponen</p>
    </header>
  );
};

const Navbar = () => {
  return (
    <nav>
      <a href="#">Home</a>
      <a href="#">Tentang</a>
      <a href="#">Kontak</a>
    </nav>
  );
};

const Card = (props) => {
  return (
    <div className="card">
      <h3>{props.judul}</h3>
      <p>{props.deskripsi}</p>
    </div>
  );
};

const Content = () => {
  return (
    <div className="container">
      <h2>Artikel</h2>
      <Card judul="React Dasar" deskripsi="Belajar komponen React." />
      <Card judul="HTML & CSS" deskripsi="Dasar pembuatan web." />
      <Card judul="JavaScript" deskripsi="Bahasa utama web." />
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>© 2026 Website Saya</p>
    </footer>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Content />
      <Footer />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);