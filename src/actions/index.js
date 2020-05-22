export const getSelectedParkingActionCreator = (parkingId) =>{
    return({
        type:'get_parking_by_id',
        payload: parkingId
    })
}

export const reserveParkingSpotActionCreator = (parkingSpotDetails) =>{
    return({
        type:'reserve_parking_spot_by_id',
        payload: parkingSpotDetails
    })
}