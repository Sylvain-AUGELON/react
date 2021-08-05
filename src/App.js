import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './components/templates/Header.js'
import Footer from './components/templates/Footer.js'
import Home from './components/pages/Home.js'
function App() {
  return (
    <div className="App">
      <Header />
      <section>
      <Home />
      </section>
    <Footer />
    </div>
  );
}

export default App;
