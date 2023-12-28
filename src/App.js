import Counter from './counter';
import './App.css';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function App(props) {
  const [value, setValue] = useState(5);

  function handleIncrement() {
    setValue(value + 1)
  }

  function handleDecrement() {
    setValue(value - 1)
  }

  function handleReset() {
    setValue(5)
  }

  return (
    <>
    <div style={{ padding: "20px" }} className='container'>
      <h3>
        This is {props.componentName}
      </h3>
      <span>Value: {value}</span>
      <ul>
        <Stack spacing={2} direction="row">
          <Button variant="contained" name="increment" onClick={handleIncrement}>Increment</Button>
          <Button variant="contained" name="decrement" onClick={handleDecrement}>Decrement</Button>
          <Button variant="contained" name="reset" onClick={handleReset}>Reset</Button>
        </Stack>
      </ul>
    </div>
      <div className='container'>
        <Counter initialValue={5} />
      </div>
    </>
  );
}

export default App;
