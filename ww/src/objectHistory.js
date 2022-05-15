import { EMPTY, FULL, OVERFLOW, URNA } from "./constants";

// objectHistory1
import camera1 from './'
import camera2 from './components/Cameras/images/2.jpg'

export const objectHistory1 = [
  {
    type: URNA,
    adress: 'Калинина - В.Набережная',
    status: [EMPTY],
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
