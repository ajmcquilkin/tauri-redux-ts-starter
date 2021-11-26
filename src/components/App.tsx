import './App.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="inline-logo">
          <img src="tauri.svg" className="App-logo rotate" alt="logo" />
          <img src="wordmark.svg" className="App-logo smaller" alt="logo" />
        </div>
        <a
          className="App-link"
          href="https://tauri.studio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Tauri
        </a>
        <img src="logo.svg" className="App-logo rotate" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  )
}

export default App
