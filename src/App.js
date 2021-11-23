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

  const [validation, setValidation] = useState({
    name:"",
    position:"",
    phone:"",
    email:"",
    workplace:"",
  })

  const workplaces = ["Pracownik biurowy w Zamościu", "Salon sprzedaży w Warszawie", "Salon sprzedaży w Krakowie" ,"Salon sprzedaży w Rzeszowie" ,"Salon sprzedaży w Zamościu" ,"Punkt sprzedaży w Gdańsku" ,"Punkt sprzedaży w Poznaniu"];

  const workspace = workplaces.map((workplace, index) => {
    return(
      <MenuItem key={index} value={workplace}>{workplace}</MenuItem>
    )
  })

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  }

  const validationForm = (objToValid) => {
    console.log("validacja")
    const localState = {
      name:"",
      position:"",
      phone:"",
      email:"",
      workplace:"",
    }
    if(objToValid.name == ""){
      localState.name = "Podaj imię i nazwisko";
    } else {
      localState.name = "";
    }

    if(objToValid.position == ""){
      localState.position = "Podaj nazwę stanowiska";
    } else {
      localState.position = "";
    }

    const phoneRegex = /(?<!\w)(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}(?!\w)/g
    if(objToValid.phone.match(phoneRegex)){
      localState.phone = "";
    } else {
      localState.phone = "Podaj numer telefonu";
    }

    const emailRegex = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
    if(objToValid.email.match(emailRegex)){
      localState.email = "";
    } else {
      localState.email = "Podaj poprawny adres email";
    }

    if(objToValid.workplace == ""){
      localState.workplace = "Podaj miejsce pracy";
    } else {
      localState.workplace = "";
    }

    if(localState.name || localState.position || localState.phone || localState.email || localState.workplace){
      setValidation(localState)
      return false;
    } else {
      return true;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationFormResult = validationForm(data);
    if(validationFormResult){
      console.log("wysłano dane");

      fetch('api/createsignature', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      
    }
  }

  return (
    <div className="App">
      <Box sx={{ maxWidth: 600, margin: "50px auto"}}>
        <MyCard variant="outlined">
          <h1>Generator stopek</h1>
          <Form>
            <TextField id="name" name="name" value={data.name} label="Imię i nazwisko" variant="outlined" fullWidth margin="dense" size="small" onChange={e=>handleChange(e)}/>
            <TextField id="position" name="position" value={data.position} label="Stanowisko" variant="outlined" fullWidth margin="dense" size="small" onChange={e=>handleChange(e)}/>
            <TextField type="number" id="phone" name="phone" value={data.phone} label="Numer telefonu" variant="outlined" fullWidth margin="dense" size="small" onChange={e=>handleChange(e)}/>
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
            <MyButton variant="contained" endIcon={<SendIcon />} onClick={e => handleSubmit(e)}>
              Generuj
            </MyButton>
          </Form>
        </MyCard>
      </Box>
    </div>
  );
}

export default App;
