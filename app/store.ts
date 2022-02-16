// Libraires
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'

// Middlewares
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

// Reducers
import rootReducer from '../reducers'

// Types

declare global {
  interface Window {
    basepath: string
  }
}

const persistConfig = {
  key: 'root',
  storage,
}

const enhancedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(
    enhancedReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, sagaMiddleware))
  )
  const persistor = persistStore(store)
  return { store, persistor }
}
