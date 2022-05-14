import { EMPTY, FULL, OVERFLOW } from "../constants"

const getChipColor = (statusString) => {
  switch (statusString) {
    case EMPTY:
      return 'success'
    case FULL:
      return 'warning'
    case OVERFLOW:
      return 'error'
    default:
      return 'default'
  }
}

export default getChipColor
