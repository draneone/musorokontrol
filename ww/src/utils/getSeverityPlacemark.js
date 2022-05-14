import theme from '../theme'

const getSeverityPlacemark = (severity) => {
  switch (severity) {
    case 'success':
      return theme.palette[severity].main
    case 'warning':
      return theme.palette[severity].main
    case 'error':
      return theme.palette[severity].main
    default:
      break;
  }
}

export default getSeverityPlacemark
