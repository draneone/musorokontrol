import { Box, Chip, Paper, Typography } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';


import moment from "moment"
import getSeverityIcon from "../utils/getSeverityIcon";
import getChipColor from "../utils/getChipColor";
import getMyalertBackgound from "../utils/getMyalertBackgound";

moment.locale('ru')

function MyAlert({ type, adress, status = [], dateTime, severity, img }) {
  return <Box
    display='flex'
    flexDirection='row'
    component={Paper}
    // variant="outlined"
    mb={2}
    p={2}
    sx={{
      backgroundColor: getMyalertBackgound(severity),
    }}
  >
    <Box display='flex' alignItems='center' mr={1.5}>
      {getSeverityIcon(severity)}
    </Box>

    <Box
      display='flex'
      alignItems='center'
      mr={1.5}
    >
      <Box display='flex' component={Paper} sx={{ p: 0.3, borderRadius: 0.7, backgroundColor: '#fff' }}>
        <img width='120' height='80' src={img} />
      </Box>
    </Box>

    <Box display='flex' flex={1} flexDirection='column'>
      <Box display='flex' flexDirection='row'>
        <Typography variant="h5" mb={1} mt={0}>{type}</Typography>
        <Box flex={1} />
        <Box>{moment(dateTime).format('MM.D.YYYY h:mm').toString()}</Box>
      </Box>

      <Box display='flex'
        sx={{
          cursor: 'pointer'
        }}
      >
        <Box alignItems='center'><LocationOnIcon fontSize='small' /></Box>
        <Typography>{adress}</Typography>
      </Box>


      <Box display='flex' pt={1} >
        {status.map(string => (
          <Chip
            label={string}
            color={getChipColor(string)}
            size='small'
            sx={{ mr: 1 }}
          // variant='outlined'
          />
        ))}
      </Box>
    </Box>

  </Box>
}

export default MyAlert
