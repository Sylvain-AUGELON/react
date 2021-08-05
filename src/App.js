import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Header from './components/templates/Header.js';
import Footer from './components/templates/Footer.js';
import Home from './components/pages/Home.js';
import Caroussel from './components/pages/Caroussel.js';
import Gallery from './components/pages/Gallery.js';

import { BrowserRouter,Switch,Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      {/* <section> */}
      <Switch>
        <Route path="/Caroussel" component={Caroussel}/>
        <Route path="/Gallery" component={Gallery}/>
        <Route path="/" component={Home}/>
      </Switch>
      {/* </section> */}
      </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
