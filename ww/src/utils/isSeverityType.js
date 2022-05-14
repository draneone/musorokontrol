import { EMPTY, FULL, OVERFLOW } from "../constants"


const isSeverityType = (status = []) => {
  switch (status.length) {
    case 1:
      if (status[0] === EMPTY) {
        return 'success'
      } else if (status[0] === FULL || status[0] === OVERFLOW) {
        return 'warning'
      }
      return ''
    case 2:
      if (status[0] === EMPTY && status[1] === OVERFLOW) {
        return 'warning'
      } else if (status[0] === FULL && status[1] === OVERFLOW) {
        return 'error'
      }
      return ''
    default:
      return ''
  }


}

export default isSeverityType
