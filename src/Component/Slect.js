import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect(props) {
  const [age, setAge] = React.useState('');
console.log(age)
const optionArr = [
'dsfsdf','sddsfsdfsdf','dfsdfsdfsdfsdf'
]
  return (
    <div>
      <FormControl sx={{ m: 1, width:500,maxWidth:'100%', }}>
        <InputLabel id="demo-simple-select-autowidth-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={props.onChange}
          autoWidth
          label="Age"
        >
     {optionArr.map((e,i)=>{
            return<>
<MenuItem sx={{ m: 1, width:440,maxWidth:'100%' }}  value={e}>{e}</MenuItem>
            </>
          })}
        </Select>
      </FormControl>
    </div>
  );
}