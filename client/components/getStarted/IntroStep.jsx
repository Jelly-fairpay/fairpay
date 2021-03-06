import React from 'react';

import {
  Button,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
} from '@material-ui/core';

const IntroStep = (props) => {
  return (
  <div>
    <h1>How this works</h1>
    <h3>
      We're about to ask you for some personal information, including
      your income, gender, race, and sexuality
        <br />
      <br />
        All data is encrypted and will only be viewable by individuals at
        your company with your same title
        <br />
      <br />
        Keeping your information personally identifiable is crucial for
        building trust in this system.
        <br />
      <br />
        Accurate and complete information is essential for ending workplace
        discrimination
        <br />
    </h3>
    <Button
      onClick={() => props.moveToNextStep()}
    >Next
      </Button>
  </div>
  )
}

export default IntroStep;