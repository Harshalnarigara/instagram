import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Provider } from 'react-redux';
import store from './Store';

function App() {
  return (
    <>
      <div className="App">
        <Provider store={store}>
          <Home />
        </Provider>
      </div>
    </>
  );
}

export default App;
