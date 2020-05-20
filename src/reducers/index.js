import {combineReducers} from 'redux'
import ParkingSelectionReducer from './ParkingSelectionReducer'
import ParkingsMapInfoReducer from './ParkingsMapInfoReducer'

export default combineReducers({
    selectedParking: ParkingSelectionReducer,
    parkingsMapInfo: ParkingsMapInfoReducer
})