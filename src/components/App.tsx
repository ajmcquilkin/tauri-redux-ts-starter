import { useDispatch, useSelector } from 'react-redux';
import { fetchFileRequest } from 'store/actionCreators/fileActionCreators';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  const files = useSelector<any>((state) => state.file.files);

  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={() => { dispatch(fetchFileRequest('/testpath')); }}>Click Me</button>
        <div>{JSON.stringify(files)}</div>
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
          Edit
          {' '}
          <code>src/App.tsx</code>
          {' '}
          and save to reload.
        </p>
      </header>
    </div>
  );
};

export default App;
