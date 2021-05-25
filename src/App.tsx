import { Provider } from 'react-redux';
import Modal from './components/Modal';
import Page from './Page';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Page />
      <Modal />
    </Provider>
  );
}

export default App;
