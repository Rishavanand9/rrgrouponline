import React, { useEffect, useState } from "react";
import "../App.css"; // Assuming you have the CSS in Counter.css
import { Grid } from '@mui/material'

const CounterItem = ({ number, text }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;

    if (count < number) {
      interval = setInterval(() => {
        setCount((prevCount) =>
          prevCount < number ? prevCount + 1 : prevCount
        );
      }, 5);
    }

    return () => {
      clearInterval(interval);
    };
  }, [count, number]);

  return (
    <div className="item">
      <h1 className="count">{count}</h1>
      <h3 className="text">{text}</h3>
    </div>
  );
};

const Counter = () => {
  return (
    <Grid container id="counter">
      <Grid item xs={12} md={4} lg={4}><CounterItem number={10} text="sites" /></Grid>
      <Grid item xs={12} md={4} lg={4}><CounterItem number={374} text="members" /></Grid>
      <Grid item xs={12} md={4} lg={4}><CounterItem number={543} text="withdrawals" /></Grid>
    </Grid>
  );
};

export default Counter;
