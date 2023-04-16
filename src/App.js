import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>CAMPUS FORA/YASH CHAUHAN</h1>
        <button>Profile/Login</button>
      </nav>
      <header>
        <div className="main">
        <div className="ques">
          <p><h2>Title</h2></p>
          <p><h2>Content</h2></p>
        </div>
          <div className="ans">
            <div className="button">
              <button><img src="src/images/up.svg"></img></button>
              <button><img src="src/images/down.svg"></img></button>
              <button><img src="src/images/tick.svg"></img></button>
              </div>
            <h3>Top Answer</h3><p></p></div>
        <div className="comments"><h3>Top Comments</h3><p>hjghjgh</p></div>
    </div>
      <aside>
        <h3>Related Questions</h3>
        </aside>
        </header>
    </div>
  );
}

export default App;
