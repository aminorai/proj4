import React, { useState } from 'react';
import { Box, TextField, Button, Grid,Dialog   } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import SendIcon from '@mui/icons-material/Send';
import CottageIcon from '@mui/icons-material/Cottage';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import Tooltip from '@mui/material/Tooltip';
import Alert from '@mui/material/Alert';



const Formlist = () => {
    const [person, setPerson] = useState({ name: "",basename: "", child: "" });
    const [open, setOpen] = useState(false);
  
    const handleClick = () => {
      setOpen(true);
    };
    const handleNameChange = (event) => {
      setPerson({ ...person, name: event.target.value });
    };
    const handleLastNameChange = (event) => {
        setPerson({ ...person, basename: event.target.value });
      };
    const handleChildChange = (event) => {
      setPerson({ ...person, child: event.target.value });
    };
    
  return (
    <>
   
    <div>
    <Tooltip disableFocusListener title="Home">
        <IconButton aria-label="fingerprint" color="info">
            <CottageIcon style={{width:"35px",height:"35px"}} />
          </IconButton>
          </Tooltip>
          <Tooltip disableFocusListener title="BITCOIN">
          <IconButton aria-label="fingerprint" color="warning">
            <CurrencyBitcoinIcon style={{width:"35px",height:"35px"}} />
          </IconButton>
          </Tooltip>
         
    </div>
    
    <div
      style={{ margin: "10px auto", width: "30%" }}
      className="rounded   border-0  py-11  bg-slate-300 bg-opacity-50"
    >
      <Box
        style={{ height: "70vh", width: "100%" }}
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "45vh" },
        }}
        noValidate
        autoComplete="off"
      >
        <h2 className="text-3xl text-orange-500 mb-10 font-bold  ">
          Login Form
        </h2>
        <div>
          <TextField
            onChange={handleNameChange}
            required
            id="outlined-required"
            label="Name"
            color="warning"
            defaultValue="Your Name"
          />
        </div>
        <div>
          <TextField
            onChange={handleLastNameChange}
            required
            id="outlined-required"
            label="Last Name"
            color="warning"
            defaultValue="Your Last Name"
          />
        </div>
        <div>
          <TextField
            onChange={handleChildChange}
            id="outlined-number"
            label="Number Of Child"
            type="number"
            color="warning"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className="py-12 ">
          <Button onClick={handleClick} className="w-52 h-12"  color="success" variant="contained">
            Submit
          </Button>
        </div>
        <Grid item>
        <Tooltip disableFocusListener title="TypeYourFinger">
          <IconButton aria-label="fingerprint" color="warning">
            <Fingerprint style={{width:"35px",height:"35px"}} />
          </IconButton>
          </Tooltip>
          <Tooltip disableFocusListener title="Sent">
           <IconButton aria-label="fingerprint"  onClick={handleClick} color="warning">
          <SendIcon  style={{width:"25px",height:"25px"}}></SendIcon>
          </IconButton>
          </Tooltip>
        </Grid>
          
      </Box>
      
    </div>
    <Dialog
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
         <Alert  severity="success">This is a success Alert.
        thank you <h3 style={{display:"inline-block",height:"60px",fontWeight:'bold'}}>{person.name}</h3> for complete form
        </Alert>
      </Dialog>
      
  
    </>
    

  );
};

export default Formlist;
