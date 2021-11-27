import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFileRequest } from 'store/actionCreators/fileActionCreators';
import './App.scss';

const App = () => {
  const dispatch = useDispatch();
  const files = useSelector<any>((state) => state.file.files);
  const [filePath, setFilePath] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchFileRequest(filePath));
  };

  return (
    <div id="app">
      <main id="app-main-content">
        <form onSubmit={handleSubmit}>
          <input value={filePath} onChange={(e) => setFilePath(e.target.value)} />
          <input type="submit" />
          <p className="file-properties">{JSON.stringify(files, null, 2)}</p>
        </form>
      </main>
    </div>
  );
};

export default App;
