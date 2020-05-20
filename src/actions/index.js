export const getSelectedParkingActionCreator = (parkingId) =>{
    return({
        type:'get_parking_by_id',
        payload: parkingId
    })
}