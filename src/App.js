import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './utils/store';


function App() {
  return (
    <Provider store={store}>
      <div className="h-screen overflow-hidden flex flex-col">
        <Header/>
        <Body/>

      </div>
    </Provider>
  );
}

export default App;
