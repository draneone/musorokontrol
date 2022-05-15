import { EMPTY, FULL, OVERFLOW, JANITOR } from "../constants"

const getChipColor = (statusString) => {
  switch (statusString) {
    case EMPTY:
      return 'success'
    case FULL:
      return 'warning'
    case OVERFLOW:
      return 'error'
    case JANITOR:
      return 'success'
    default:
      return 'default'
  }
}

export default getChipColor
