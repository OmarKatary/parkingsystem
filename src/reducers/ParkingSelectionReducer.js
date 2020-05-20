parkingLots =[
    {   id: 1,
        name: 'carrefourzz',
        gridRows:2,
        gridColumns:2,
        latitude: 31.1683,
        longitude: 29.932,
        parkingSpots: 
        [   {parkingSpotIndex: 1,
            isOccupied: false,
            isPending:false,
            isParkingSpotHorizontal: true,
            subSectionIndex: 1
            },
            {parkingSpotIndex: 2,
            isOccupied: true,
            isPending:false,
            isParkingSpotHorizontal: true,
            subSectionIndex: 2
            },
            {parkingSpotIndex: 3,
            isOccupied: false,
            isPending:false,
            isParkingSpotHorizontal: true,
            subSectionIndex: 1
            },
            {parkingSpotIndex: 4,
            isOccupied: true,
            isPending:false,
            isParkingSpotHorizontal: true,
            subSectionIndex: 1
            },
            {parkingSpotIndex: 5,
            isOccupied: false,
            isPending:false,
            isParkingSpotHorizontal: true,
            subSectionIndex: 2
            },
            {parkingSpotIndex: 6,
            isOccupied: false,
            isPending:false,
            isParkingSpotHorizontal: true,
            subSectionIndex: 2
            },
            {parkingSpotIndex: 7,
            isOccupied: false,
            isPending:false,
            isParkingSpotHorizontal: true,
            subSectionIndex: 1
            },
            {parkingSpotIndex: 8,
            isOccupied: true,
            isPending:false,
            isParkingSpotHorizontal: true,
            subSectionIndex: 1
            },
            {parkingSpotIndex: 9,
            isOccupied: false,
            isPending:false,
            isParkingSpotHorizontal: true,
            subSectionIndex: 2
            },
            {parkingSpotIndex: 10,
            isOccupied: false,
            isPending:false,
            isParkingSpotHorizontal: true,
            subSectionIndex: 1
            }
        ],
    
        parkingSections:
        [   {parkingSectionId: 2,
            isParkingSectionHorizontal: false,
            isParkingSpotHorizontal: true,
            isDoubleSectioned: true,
            sectionColumn: 1,
            sectionRow: 1,
            },
            {parkingSectionId: 1,
            isParkingSectionHorizontal: false,
            isParkingSpotHorizontal: true,
            isDoubleSectioned: true,
            sectionColumn: 2,
            sectionRow: 1,
            }
        ]
    },
    {   id: 2,
        name: 'msh carrefourzz',
        gridRows:2,
        gridColumns:2,
        latitude: 31.1683,
        longitude: 29.932,
        parkingSpots: 
        [   {parkingSpotIndex: 1,
            isOccupied: false,
            isPending:false,
            isParkingSpotHorizontal: true,
            subSectionIndex: 1
            },
            {parkingSpotIndex: 2,
            isOccupied: true,
            isPending:false,
            isParkingSpotHorizontal: true,
            subSectionIndex: 2
            },
            {parkingSpotIndex: 3,
            isOccupied: false,
            isPending:false,
            isParkingSpotHorizontal: true,
            subSectionIndex: 1
            },
            {parkingSpotIndex: 4,
            isOccupied: true,
            isPending:false,
            isParkingSpotHorizontal: true,
            subSectionIndex: 1
            },
            {parkingSpotIndex: 5,
            isOccupied: false,
            isPending:false,
            isParkingSpotHorizontal: true,
            subSectionIndex: 2
            },
            {parkingSpotIndex: 6,
            isOccupied: false,
            isPending:false,
            isParkingSpotHorizontal: true,
            subSectionIndex: 2
            },
            {parkingSpotIndex: 7,
            isOccupied: false,
            isPending:false,
            isParkingSpotHorizontal: true,
            subSectionIndex: 1
            },
            {parkingSpotIndex: 8,
            isOccupied: true,
            isPending:false,
            isParkingSpotHorizontal: true,
            subSectionIndex: 1
            },
            {parkingSpotIndex: 9,
            isOccupied: false,
            isPending:false,
            isParkingSpotHorizontal: true,
            subSectionIndex: 2
            },
            {parkingSpotIndex: 10,
            isOccupied: false,
            isPending:false,
            isParkingSpotHorizontal: true,
            subSectionIndex: 2
            }
        ],
    
        parkingSections:
        [   {parkingSectionId: 1,
            isParkingSectionHorizontal: false,
            isParkingSpotHorizontal: true,
            isDoubleSectioned: true,
            sectionColumn: 1,
            sectionRow: 1,
            },
            {parkingSectionId: 2,
            isParkingSectionHorizontal: false,
            isParkingSpotHorizontal: false,
            isDoubleSectioned: true,
            sectionColumn: 2,
            sectionRow: 1,
            }
        ]
    }

]

export default (state = {}, action) =>{
    console.log("from reducer action: ", action)
    switch(action.type){
        case 'get_parking_by_id':
            // @Todo replace with getParkingById(action.payload) from database
             return parkingLots.find(parking => parking.id === action.payload)
        default:
            return state
    }
        
} 