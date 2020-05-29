//store
import {createStore, combineReducers} from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ParkingSelectionReducer from './ParkingSelectionReducer'
import ParkingsMapInfoReducer from './ParkingsMapInfoReducer'

const rootReducer = combineReducers({
    selectedParking: ParkingSelectionReducer,
    parkingsMapInfo: ParkingsMapInfoReducer,
})

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}
export default configureStore;