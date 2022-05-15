import { Backdrop, Box, Container, Paper } from "@mui/material";
import MyAlert from "../MyAlert";

import isSeverityType from "../../utils/isSeverityType";
import { useState } from "react";



function Objects({ objects, handleOpenMap, handleObjectHistory }) {
  const [openBackdrop, setOpenBackdrop] = useState(false)
  const handleCloseBackdrop = () => {
    setOpenBackdrop(false)
  }
  const [item, setItem] = useState(0)
  const handleOpenBackdrop = (i) => {
    setItem(i)
    setOpenBackdrop(true)
  }

  return (
    <Box display='flex' flexDirection='row'>
      <Container maxWidth='sm'>
        {objects.map(({ status, ...attr }, i) => (
          <MyAlert
            severity={isSeverityType(status)}
            status={status}
            i={i}
            handleOpenBackdrop={handleOpenBackdrop}
            handleOpenMap={handleOpenMap}
            handleObjectHistory={handleObjectHistory}
            {...attr}
          />
        ))}
      </Container>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1, cursor: 'zoom-out' }}
        open={openBackdrop}
        onClick={handleCloseBackdrop}
      >
        <Box
          display='flex'
          component={Paper}
          sx={{ p: 0.3, borderRadius: 0.7, backgroundColor: '#fff' }}
        >
          <img width='640' height='480' src={objects[item].img} />
        </Box>
      </Backdrop>

    </Box>
  )
}

export default Objects
