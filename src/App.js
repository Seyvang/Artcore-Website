// import logo from './logo.svg';
import './App.css';
import NavbarElement from './components/NavbarElement';
import Info from './components/Info';
import Artist from './components/Artist';
import AcuticNotesHead from './components/AcuticNotesHead';
import { Card, Button, Container, Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App" bg='dark'>
      <Navbar bg="primary" variant="dark" className='navHeading'>
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#AboutPage">About</Nav.Link>
          <Nav.Link href="#Artists">Artists</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
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
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
}

export default App;
