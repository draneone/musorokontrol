import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred'
import CheckIcon from '@mui/icons-material/Check'

const getSeverityIcon = (severity) => {
  switch (severity) {
    case 'success':
      return <CheckIcon fontSize="large" sx={{
        color: theme => theme.palette[severity].main
      }} />
    case 'warning':
      return <ReportGmailerrorredIcon fontSize="large" sx={{
        color: theme => theme.palette[severity].main
      }} />
    case 'error':
      return <WarningAmberIcon fontSize="large" sx={{
        color: theme => theme.palette[severity].main
      }} />
    default:
      break;
  }
}

export default getSeverityIcon
