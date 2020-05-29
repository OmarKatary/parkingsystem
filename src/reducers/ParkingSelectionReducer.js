export default (state = {}, action) =>{
    console.log("from reducer action: ", action)
    switch(action.type){
        case 'get_parking_by_key':
            return action.payload

        case 'reserve_parking_spot':
            console.log("action.payload")

            console.log(action.payload)
            return action.payload

        default:
            return state
    }
        
} 