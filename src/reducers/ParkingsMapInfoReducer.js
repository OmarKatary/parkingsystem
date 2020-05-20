let parkings = [
    {
        id: 1,
        name: "carrefour",
        latitude: 31.1683,
        longitude: 29.9316,
    },
    {
        id: 2,
        name: "gamb carrefour",
        latitude: 31.1683,
        longitude: 29.931,
    },

]

export default (state = [], action) =>{
    //@Todo return similar object as the one above from database
    return parkings
}