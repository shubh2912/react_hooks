import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { findAllByDisplayValue } from '@testing-library/react';


function Home() {
  const [tableData, setTableData] = useState([]);


  useEffect(() => {
    if (tableData.length === 0)
      axios.get("http://localhost:3006/artists").then(res => setTableData(res.data))
  })

  return (<div>
    <table border="2px solid black">
      <tr style={{ "background-color": "red" }} >
        <td >S.No</td>
        <td>Name</td>
        <td>Cover</td>
      </tr>
      {tableData.map((item) =>
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.cover}</td>
        </tr>
      )}
    </table>
  </div>
  )
}

export default Home;
