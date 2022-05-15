import { EMPTY, FULL, OVERFLOW, URNA, JANITOR } from "./constants";

// objectHistory1
import objectHistory1img1 from './images/objectHistory/Camera1/1.jpg'
import objectHistory1img2 from './images/objectHistory/Camera1/2.jpg'
// objectHistory2
import objectHistory2img2 from './images/objectHistory/Camera2/2.jpg'
import objectHistory2img3 from './images/objectHistory/Camera2/3.jpg'
import objectHistory2img4 from './images/objectHistory/Camera2/4.jpg'
// objectHistory3
import objectHistory3img1 from './images/objectHistory/Camera3/1.jpg'
import objectHistory3img2 from './images/objectHistory/Camera3/2.jpg'
// objectHistory4
import objectHistory4img1 from './images/objectHistory/Camera4/1.jpg'
import objectHistory4img2 from './images/objectHistory/Camera4/2.jpg'

export const objectHistory1 = [
  {
    type: URNA,
    adress: 'Калинина - В.Набережная',
    status: [EMPTY],
    dateTime: new Date().toString(),
    geometry: [44.889824, 37.297312],
    img: objectHistory1img1
  },
  {
    type: URNA,
    adress: 'Калинина - В.Набережная',
    status: [JANITOR],
    dateTime: new Date().toString(),
    geometry: [44.889824, 37.297312],
    img: objectHistory1img2
  }
]

export const objectHistory2 = [
  {
    type: URNA,
    adress: 'Краснодарская - Терская',
    status: [EMPTY, OVERFLOW],
    dateTime: new Date().toString(),
    geometry: [44.895387, 37.317456],
    img: objectHistory2img2
  },
  {
    type: URNA,
    adress: 'Краснодарская - Терская',
    status: [EMPTY, OVERFLOW],
    dateTime: new Date().toString(),
    geometry: [44.895387, 37.317456],
    img: objectHistory2img3
  },
  {
    type: URNA,
    adress: 'Краснодарская - Терская',
    status: [EMPTY],
    dateTime: new Date().toString(),
    geometry: [44.895387, 37.317456],
    img: objectHistory2img4
  }
]

export const objectHistory3 = [
  {
    type: URNA,
    adress: 'ГДК Банкомат',
    status: [EMPTY],
    dateTime: new Date().toString(),
    geometry: [44.896349, 37.320596],
    img: objectHistory3img1
  },
  {
    type: URNA,
    adress: 'ГДК Банкомат',
    status: [EMPTY, OVERFLOW],
    dateTime: new Date().toString(),
    geometry: [44.896349, 37.320596],
    img: objectHistory3img2
  }
]

export const objectHistory4 = [
  {
    type: URNA,
    adress: 'Старинная Анапа',
    status: [EMPTY],
    dateTime: new Date().toString(),
    geometry: [44.896554, 37.307538],
    img: objectHistory4img1
  },
  {
    type: URNA,
    adress: 'Старинная Анапа',
    status: [EMPTY, OVERFLOW],
    dateTime: new Date().toString(),
    geometry: [44.896554, 37.307538],
    img: objectHistory4img2
  }
]
