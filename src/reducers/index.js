import {combineReducers} from 'redux'
import ParkingSelectionReducer from './ParkingSelectionReducer'

export default combineReducers({
    selectedParking: ParkingSelectionReducer
})