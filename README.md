# SPark
### Abstract
Parking guidance systems have the potential to reduce the congestion in crowded areas by providing real-time indications of occupancy of parking spaces. Such systems are mostly implemented in indoor environments using costly sensor-based techniques. Consequently, there is an increasing demand for such systems in outdoor environments as well. Finding inexpensive methods to detect unoccupied parking spaces has been thoroughly researched.
### Overview
We use classical computer vision methods to detect vacant parking spots from surveillance footages. Our database is then updated and fee the data to our react native application.

![Alt Text](https://github.com/OmarKatary/parkingsystem/blob/master/src/gifs/surveillance-demo.gif?raw=true)
### Animations Using (react-native-gesture-handler)
![Alt Text](https://raw.githubuserxcontent.com/OmarKatary/parkingsystem/master/src/gifs/animation1.gif) ![Alt Text](https://raw.githubusercontent.com/OmarKatary/parkingsystem/master/src/gifs/animation1.gif)

### Parking Detection
Using YOLO v3 to learn bounding boxes of parking locations, we then manually feed these coordinates to a classical computer vision methods based on corner detection and BIRCH clustering to classify whether each location busy/free. We also use homography transformation to account for minor camera movement.
