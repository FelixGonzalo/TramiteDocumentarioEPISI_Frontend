import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import personaReducer from './personaDucks'
import solicitudReducer from './solicitudDucks'
import archivoReducer from './archivoDucks'
import puestoReducer from './puestoDucks'
import solicitudTiposReducer from './solicitudTiposDucks'
//llamamos a todos los reducer de los DUCKS

const rootReducer = combineReducers({
  personas: personaReducer,
  puestos: puestoReducer,
  archivos: archivoReducer,
  solicitudes: solicitudReducer,
  solicitudTipos: solicitudTiposReducer
})

//configuracion de herramienta en navegador
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
  const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
  return store
}