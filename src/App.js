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

const App = () => {
  const [data, setData] = useState({
    name:"",
    position:"",
    phone:"",
    email:"",
    workplace:"",
  })

  const workplaces = ["Salon sprzedaży w Warszawie", "Salon sprzedaży w Krakowie" ,"Salon sprzedaży w Rzeszowie" ,"Salon sprzedaży w Zamościu" ,"Punkt sprzedaży w Gdańsku" ,"Punkt sprzedaży w Poznaniu"];

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
        <Card variant="outlined">
          <h1>Generator stopek</h1>
          <form>
            <TextField id="name" name="name" value={data.name} label="Imię i nazwisko" variant="outlined" fullWidth margin="dense" onChange={e=>handleChange(e)}/>
            <TextField id="position" name="position" value={data.position} label="Stanowisko" variant="outlined" fullWidth margin="dense" onChange={e=>handleChange(e)}/>
            <TextField id="phone" name="phone" value={data.phone} label="Numer telefonu" variant="outlined" fullWidth margin="dense" onChange={e=>handleChange(e)}/>
            <TextField id="email" name="email" value={data.email} label="Adres email" variant="outlined" fullWidth margin="dense" onChange={e=>handleChange(e)}/>
            <FormControl fullWidth>
              <InputLabel id="workplace-label">Age</InputLabel>
              <Select
                labelId="workplace-label"
                id="workplace"
                label="Age"
                variant="outlined"
                name="workplace"
                value={data.workplace}
                onChange={e=>handleChange(e)}
              >
                {workspace}
              </Select>
            </FormControl>
            <Button variant="contained" endIcon={<SendIcon />}>
              Generuj
            </Button>
          </form>
        </Card>
      </Box>
    </div>
  );
}

export default App;
