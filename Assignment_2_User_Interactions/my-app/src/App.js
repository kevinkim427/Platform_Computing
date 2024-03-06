import logo from './logo.svg';
import hobby1 from './imgs/vb.jpg';
import hobby2 from './imgs/Bloodborne.jpg';
import hobby3 from './imgs/guitar.jpg';
import './App.css';

function App() 
{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.          
        </p>
        <p>Kevin Kim</p>
      </header>
      <body className="App-body">
        <section className="personal">
          <div className="hbox">
            <h1>About Me</h1>
          </div>                 
          <div className="box">
              <p>I'm Kevin and this is my last semester at CSUSB. My major is Computer Science and I hope to become 
              a software engineer after graduating. My hobbies include volleyball, video games, and I'm also a musician.
              I've been playing guitar for about 12 years now along with drumset. I am a gamer for life, and at the same time 
              active by lifting weights and playing volleyball.</p>
          </div>
        </section>
        <section className="hobbies">
          <img src={hobby1} height="200px" alt="vb"></img>
          <img src={hobby2} height="200px" alt="bb"></img>
          <img src={hobby3} height="200px" alt="guitar"></img>
        </section>
        <section className="academic">
          <div className="hbox">
            <h1>My Academic Journey</h1>
          </div>          
          <div className="box">
          <p>I first started my university journey as a nursing major at Georgia State University, but that didn't pan out.
              I switched majors to computer science, and took prerequisites at Chaffey College. I transferred to CSUSB in the Spring of 2023.
              I took as many classes I could handle in that Spring, Summer, Fall, and even during Winter Intersession.
              Now I'm here at CSUSB, Spring 2024, finishing my last semester. 
          </p>
          </div>
        </section>
        <section className="repo">
          <div className="hbox">
            <h1>My Github Repository</h1>
          </div>          
          <div className="box">   
              <p>This is a button that links to my Github Repository for the CSE4500 course at CSUSB</p>
              <a
              className="App-link"
              href="https://github.com/kevinkim427/Platform_Computing"
              target="_blank"
              rel="noopener noreferrer">
              <button>My Repo</button>
              </a>
          </div> 
        </section>
        <footer>
          <p>CSE4500 2024</p>
        </footer>
      </body>      
    </div>
  );
}
export default App;
