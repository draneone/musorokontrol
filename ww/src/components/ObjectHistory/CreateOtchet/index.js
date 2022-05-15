import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material"
import { getRandomInt } from "../../../utils/getRandomInt"


function CreateOtchet({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Отчет № {getRandomInt(1, 100)}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Выберите даты для создания отчёта.
        </DialogContentText>

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Отмена</Button>
        <Button onClick={handleClose}>Создать</Button>
      </DialogActions>
    </Dialog>
  )
}

export default CreateOtchet
