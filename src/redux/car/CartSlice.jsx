import { createStore } from 'redux';
import rootReducer from './reducers'; // Burada rootReducer doğru bir şekilde tanımlandığından emin olun

const store = createStore(rootReducer);
