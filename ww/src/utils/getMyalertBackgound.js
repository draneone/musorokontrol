const getMyalertBackgound = (severity) => {
  switch (severity) {
    case 'success':
      return '#c8e6c9'
    case 'warning':
      return '#ffe0b2'
    case 'error':
      return '#ff9e80'
    default:
      break;
  }
}

export default getMyalertBackgound
