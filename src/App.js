// import logo from './logo.svg';
import './App.css';
import NavbarElement from './components/NavbarElement';
import Info from './components/Info';
import Artist from './components/Artist';
import AcuticNotesHead from './components/AcuticNotesHead';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <nav className='navHeading'>
        <NavbarElement website='#AboutPage' name='About'/>
        <NavbarElement website='#Artists' name='Artist'/>
      </nav>
      <header className="App-header">
        <h1>Welcome to Artcore</h1>
        <AcuticNotesHead/>
      </header>
      <section></section>
      <Info/>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/HN0dc6H0Vnc"
       title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
       encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <div className='Artists' id='AboutPage'>
        <Artist></Artist>
      </div>
      
      {/* {console.log(artists.artists)} */}
      <footer>
        Made by Steven Kim 2022
      </footer>
    </div>
  );
}

export default App;
