import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            value: 5
        }
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleIncrement() {
        this.setState({ value: this.state.value + 1 });
    }
    handleDecrement() {
        this.setState({ value: this.state.value - 1 });
    }
    handleReset() {
        this.setState({ value: 5 });
    }

    render() {
        return (
            <>
                <h3>
                    This is Class component
                </h3>
                <span>Value: {this.state.value}</span>
                <ul>
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" name="increment" onClick={this.handleIncrement}>Increment</Button>
                        <Button variant="contained" name="decrement" onClick={this.handleDecrement}>Decrement</Button>
                        <Button variant="contained" name="reset" onClick={this.handleReset}>Reset</Button>
                    </Stack>
                </ul>
            </>
        )
    }
}