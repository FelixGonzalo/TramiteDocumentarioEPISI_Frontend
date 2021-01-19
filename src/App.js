import Routes from './Routes'
import {Provider} from 'react-redux'
import generateStore from './redux/store'

function App() {
  const store = generateStore()
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
  );
}

export default App;
