import { Box, Container } from "@mui/material";
import MyAlert from "../MyAlert";

import isSeverityType from "../../utils/isSeverityType";



function Objects({ objects }) {

  return (
    <Box display='flex' flexDirection='row'>
      <Container maxWidth='sm'>
        {objects.map(({ status, ...attr }) => (
          <MyAlert
            severity={isSeverityType(status)}
            status={status}
            {...attr}
          />
        ))}
      </Container>

    </Box>
  )
}

export default Objects
