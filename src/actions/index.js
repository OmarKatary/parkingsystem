import {
    db
} from '../config'

export const getSelectedParkingActionCreator = (parkingKey) => {

    console.log('parkingKey: ' + parkingKey)
    return (dispatch, getState) => {
        let parkingNodeRef = db.ref("fnp2020-9f5c4/" + parkingKey);
        parkingNodeRef.on('value', function (snapshot) {
            console.log('this is listener')
            let parking = snapshot.val()
            parking.key = snapshot.key

            dispatch({
                type: 'get_parking_by_key',
                payload: parking
            })
        });

    }
}


export const reserveParkingSpotActionCreator = (parkingSpotDetails) => {
    console.log("parkingSpotDetails")
    console.log(parkingSpotDetails)
    return (dispatch, getState) => {
        let parkingNodeRef = db.ref("fnp2020-9f5c4/" + parkingSpotDetails.parkingId);
        let parkingSpotNodeRef = db.ref("fnp2020-9f5c4/" + parkingSpotDetails.parkingId + "/parkingSections/" + parkingSpotDetails.sectionId + "/parkingSpots/" + parkingSpotDetails.spotId);
        parkingSpotNodeRef.update({
            isPending: parkingSpotDetails.isPending
        }).then(() => {
            parkingNodeRef.once('value').then((snapshot) => {
                let parking = snapshot.val()
                parking.key = snapshot.key

                dispatch({
                    type: 'reserve_parking_spot',
                    payload: parking
                })
            })


        })
    }
}


export const getParkingsActionCreator = () => {

    return (dispatch, getState) => {

        var parkingNodeRef = db.ref("fnp2020-9f5c4");
        // console.log("Mshhh Kataryyyy")
        parkingNodeRef.once('value').then(function (snapshot) {
            
            var parkingsArray = snapshotToArray(snapshot);

            dispatch({
                type: 'get_parkings',
                payload: parkingsArray
            })
        });

    }
}

function snapshotToArray(snapshot) {
    var returnArr = [];
    snapshot.forEach(function (parking) {
        var item = parking.val();
        item.key = parking.key;
        returnArr.push(item);
    });
    return returnArr;
};