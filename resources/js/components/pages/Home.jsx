import React from 'react'
import { Button } from '@mui/material';
import MainApp from '../templates/MainApp';
import { connect } from 'react-redux';
import { increment, decrement } from '../../store/actions';

function Home({count, incrementTest, decrementTest}) {
    return (
        <MainApp>
          <div className="container">
            <h2 className="text-center mt-5 mb-3">Home Page</h2>
            <Button variant="contained" color="primary">Hello World</Button>
            <Button variant="contained" color="secondary" onClick={incrementTest}>+</Button>
            <Button variant="contained" color="error" onClick={decrementTest}>-</Button>
            <h1>{count}</h1>
          </div>
        </MainApp>
    );
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementTest: () => dispatch(increment()),
    decrementTest: () => dispatch(decrement()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);