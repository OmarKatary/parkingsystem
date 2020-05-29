export default (state = [], action) => {
    console.log("from getParkings reducer action: ", action)

    switch (action.type) {
        case 'get_parkings':
            return action.payload;
        default:
            return state;

    }
}