import { EMPTY, FULL, OVERFLOW, URNA, JANITOR } from "./constants";

import camera1 from './components/Cameras/images/1.jpg'
import camera2 from './components/Cameras/images/2.jpg'
import camera3 from './components/Cameras/images/3.jpg'
import camera4 from './components/Cameras/images/4.jpg'

const objects = [
  {
    type: URNA,//type
    adress: 'Калинина - В.Набережная',
    status: [EMPTY],//tag
    dateTime: new Date().toString(),
    geometry: [44.889824, 37.297312],
    img: camera1
  },
  {
    type: URNA,
    adress: 'Краснодарская - Терская',
    status: [EMPTY, OVERFLOW],
    dateTime: new Date().toString(),
    geometry: [44.895387, 37.317456],
    img: camera2
  },
  {
    type: URNA,
    adress: 'ГДК Банкомат',
    status: [FULL],
    dateTime: new Date().toString(),
    geometry: [44.896349, 37.320596],
    img: camera3
  },
  {
    type: URNA,
    adress: 'Старинная Анапа',
    status: [FULL, OVERFLOW],
    dateTime: new Date().toString(),
    geometry: [44.896554, 37.307538],
    img: camera4
  }
]

export default objects
