import React, { useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import { Button, Select } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import { layoutTypes } from "../store";
import { observer } from "mobx-react";
import store from "../store";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      width: "100%",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "none",
      borderRadius: "6px",
      boxShadow: theme.shadows[5],
      padding: 0,
      width: "24rem",
    },
    cancelColor: {
      color: "white",
    },
  })
);

function ModalButtonShow() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [requiredData, setrequiredData] = useState({
    type: "progress",
    xAxis: 4,
    width: 4,
    height: 4,
  });

  const handleChange = (prop: any) => (event: { target: { value: any } }) => {
    setrequiredData({ ...requiredData, [prop]: event.target.value });
  };


  const handleAddChart = async () => {
    await store.addChart(requiredData.type, requiredData.xAxis, requiredData.width, requiredData.height);
    handleClose();
  };

  return (
    <div>
      <button className="bg-black text-base px-3 py-2 mr-2 rounded-lg text-white" onClick={handleOpen}>
        Add Chart
      </button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={`${classes.paper} flex flex-col mx-4 outline-none text-center max-w-xl`}>
            <div className="flex w-full items-center justify-between bg-black text-white rounded-t p-2">
              <h3 className="pl-3 text-base">Add Chart</h3>
              <span>
                <Button onClick={handleClose}>
                  <CloseRoundedIcon className={classes.cancelColor} />
                </Button>
              </span>
            </div>
            <div className="px-6 pb-8 pt-0 ">
              <div className="flex  flex-col xl:flex-row gap-4 w-full justify-between">
                <div className="w-full mt-6">
                  <p className="mb-3 w-full text-left">Type</p>
                  <FormControl variant="outlined" className={classes.formControl}>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={requiredData.type}
                      onChange={handleChange("type")}
                    >
                      {layoutTypes.map((type, i) => (
                        <MenuItem value={type} key={i}>
                          {type}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <div className="w-full mt-6">
                  <p className="mb-3 w-full text-left">xAxis</p>
                  <FormControl variant="outlined" className={classes.formControl}>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={requiredData.xAxis}
                      onChange={handleChange("xAxis")}
                    >
                      {[...Array(9)]
                        .map((e, i) => (
                          <MenuItem value={i} key={i}>
                            {i}
                          </MenuItem>
                        ))
                        .slice(0)}
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="flex  flex-col xl:flex-row gap-4 w-full justify-between">
                <div className="w-full mt-6">
                  <p className="mb-3 w-full text-left">Width</p>
                  <FormControl variant="outlined" className={classes.formControl}>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={requiredData.width}
                      onChange={handleChange("width")}
                    >
                      {[...Array(11)]
                        .map((e, i) => (
                          <MenuItem value={i} key={i}>
                            {i}
                          </MenuItem>
                        ))
                        .slice(4)}
                    </Select>
                  </FormControl>
                </div>
                <div className="w-full mt-6">
                  <p className="mb-3 w-full text-left">Height</p>
                  <FormControl variant="outlined" className={classes.formControl}>
                    <Select
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={requiredData.height}
                      onChange={handleChange("height")}
                    >
                      {[...Array(11)]
                        .map((e, i) => (
                          <MenuItem value={i} key={i}>
                            {i}
                          </MenuItem>
                        ))
                        .slice(4)}
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className="flex w-full items-center justify-center pt-8">
                <button className="bg-black text-white py-2 px-4 rounded" onClick={handleAddChart}>
                  Create Chart
                </button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default observer(ModalButtonShow);
