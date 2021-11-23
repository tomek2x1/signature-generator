import './App.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

import { styled } from '@mui/styles';

const MyButton = styled(Button)({ 
  background:"linear-gradient(to right, #f07d3b, #ea5036)",
  marginTop:30,
  marginBottom:30,
});;

const MyCard = styled(Card)({ 
  border: '2px solid transparent',
  borderRadius:10,
  backgroundImage: 'linear-gradient(white, white), radial-gradient(circle at top left, #f07d3b,#ea5036)',
  backgroundOrigin: 'border-box',
  backgroundClip: 'content-box, border-box',
});

const SelectFormControl = styled(FormControl)({ 
  marginTop:10,
  textAlign:'initial'
});

const Form = styled("form")({ 
  marginLeft:30,
  marginRight:30,
});

const App = () => {
  const [data, setData] = useState({
    name:"",
    position:"",
    phone:"",
    email:"",
    workplace:"",
  })

  const workplaces = ["Pracownik biurowy", "Salon sprzedaży w Warszawie", "Salon sprzedaży w Krakowie" ,"Salon sprzedaży w Rzeszowie" ,"Salon sprzedaży w Zamościu" ,"Punkt sprzedaży w Gdańsku" ,"Punkt sprzedaży w Poznaniu"];

  const workspace = workplaces.map(workplace => {
    return(
      <MenuItem value={workplace}>{workplace}</MenuItem>
    )
  })

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  }

  return (
    <div className="App">
      <Box sx={{ maxWidth: 600, margin: "50px auto"}}>
        <MyCard variant="outlined">
          <h1>Generator stopek</h1>
          <Form>
            <TextField id="name" name="name" value={data.name} label="Imię i nazwisko" variant="outlined" fullWidth margin="dense" size="small" onChange={e=>handleChange(e)}/>
            <TextField id="position" name="position" value={data.position} label="Stanowisko" variant="outlined" fullWidth margin="dense" size="small" onChange={e=>handleChange(e)}/>
            <TextField id="phone" name="phone" value={data.phone} label="Numer telefonu" variant="outlined" fullWidth margin="dense" size="small" onChange={e=>handleChange(e)}/>
            <TextField id="email" name="email" value={data.email} label="Adres email" variant="outlined" fullWidth margin="dense" size="small" onChange={e=>handleChange(e)}/>
            <SelectFormControl fullWidth>
              <InputLabel id="workplace-label" size="small">Miejsce pracy</InputLabel>
              <Select
                labelId="workplace-label"
                id="workplace"
                label="Miejsce pracy"
                variant="outlined"
                name="workplace"
                value={data.workplace}
                onChange={e=>handleChange(e)}
                size="small"
              >
                {workspace}
              </Select>
            </SelectFormControl>
            <MyButton variant="contained" endIcon={<SendIcon />}>
              Generuj
            </MyButton>
          </Form>
        </MyCard>
      </Box>
    </div>
  );
}

export default App;
