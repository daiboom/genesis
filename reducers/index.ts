import { combineReducers } from 'redux'
import counter from '../reducers/counter.reducer'

const rootReducer = combineReducers({
  counter,
})

export default rootReducer
