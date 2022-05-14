import { EMPTY, FULL, OVERFLOW, URNA } from "./constants";

import camera1 from './components/Cameras/images/1.jpg'
import camera2 from './components/Cameras/images/2.jpg'
import camera3 from './components/Cameras/images/3.jpg'
import camera4 from './components/Cameras/images/4.jpg'

const objects = [
  {
    type: URNA,
    adress: 'Краснодарская Терская',
    status: [EMPTY],
    dateTime: new Date().toString(),
    geometry: [44.89427, 37.31689],
    img: camera1
  },
  {
    type: URNA,
    adress: 'Краснодарская Терская',
    status: [EMPTY, OVERFLOW],
    dateTime: new Date().toString(),
    geometry: [44.88427, 37.31689],
    img: camera2
  },
  {
    type: URNA,
    adress: 'Старинная Анапа',
    status: [FULL],
    dateTime: new Date().toString(),
    geometry: [44.88967, 37.31689],
    img: camera3
  },
  {
    type: URNA,
    adress: 'Старинная Анапа',
    status: [FULL, OVERFLOW],
    dateTime: new Date().toString(),
    geometry: [44.87267, 37.31689],
    img: camera4
  }
]

export default objects
