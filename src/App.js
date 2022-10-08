import { Provider } from 'react-redux'
import store from './store'

import Counter from './Pages'

function App() {
  return (
    <div className="App">
      <Provider store={ store }>
        <Counter/>
      </Provider>
    </div>
  );
}

export default App;
