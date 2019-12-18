import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function FormControlLabelPosition(props) {

  const{genderSignUp, onChangeGenderSignUp} = props;

  const handleChangeGender = event => {
    onChangeGenderSignUp(event);
  };

  return (
    <FormControl component="fieldset" >
      <RadioGroup 
        aria-label="position" 
        name="position" 
        value={genderSignUp} 
        onChange={handleChangeGender} 
        row 
      >
        <FormControlLabel
          value='male'
          control={<Radio color="default" />}
          label="Male"
          labelPlacement="end"
        />
        <FormControlLabel
          value='female'
          control={<Radio color="default" />}
          label="Female"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
}