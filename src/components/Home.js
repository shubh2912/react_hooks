import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function Home() {
  const [restList, setRestList] = useState([]);
  const [value, setValue] = useState(0);

  useEffect(() => {
    axios("https://demo8141926.mockable.io/getRestaurantList")
      .then(res => setRestList(res.data))
      .catch(err => console.log(err))
  })

  return (
    <div>
      {`Value : ${value}`}<br />
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => setValue(value - 1)}>Decrement</button>
      <h1>List of Restaurant</h1>
      {
        restList.map((item) => {
          return <div>
            <h3>{item.name}</h3>
          </div>
        })
      }
    </div >
  )
}

export default Home;
