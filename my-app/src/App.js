import './App.css';
import React, {useState, useEffect} from 'react'

function App() {
  const [data, setData] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    fetch('http://localhost:4000/get', {
      method: 'GET',
      headers: {
        accept: 'applications.json',
        'Content-Type': 'application/json'
      },
      cache: 'default'
    })
    .then(async res => {
      var data2 = await res.json();
      console.log(data2);
      setData(data2);
    })
  }, []);

  function addRoute(){
    alert("added route");
    /* call backend endpoint to CREATE in table */
    fetch('http://localhost:4000/addroutes', {
      method: 'POST',
      headers: {
        accept: 'applications.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({query: query}),
      cache: 'default'
    }).then(async res => {
      var data2 = await res.json();
      console.log(data2);
      setData(data2);
    })
  }

  function deleteRoute(){
    alert("deleted route");
    /* call backend endpoint to DELETE in table */
    fetch('http://localhost:4000/deleteroutes', {
      method: 'POST',
      headers: {
        accept: 'applications.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({query: query}),
      cache: 'default'
    }).then(async res => {
      var data2 = await res.json();
      console.log(data2);
      setData(data2);
    })
  }

  function editRoute(){
    alert("edited route");
    /* call backend endpoint to UPDATE in table */
    fetch('http://localhost:4000/editroutes', {
      method: 'PUT',
      headers: {
        accept: 'applications.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({query: query}),
      cache: 'default'
    }).then(async res => {
      var data2 = await res.json();
      console.log(data2);
      setData(data2);
    })
  }

  function searchRoute(){
    alert("searched route");
    /* call backend endpoint to SEARCH in table */
    fetch('http://localhost:4000/searchroutes', {
      method: 'POST',
      headers: {
        accept: 'applications.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({query: query}),
      cache: 'default'
    }).then(async res => {
      var data2 = await res.json();
      console.log(data2);
      setData(data2);
    })
  }


  function aq1(){ // TODO(): fix table for this
    fetch('http://localhost:4000/aq1', {
      method: 'POST',
      headers: {
        accept: 'applications.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({query: query}),
      cache: 'default'
    }).then(async res => {
      var data2 = await res.json();
      console.log(data2);
      setData(data2);
    })
  }

  function aq2(){ // TODO(): fix table for this
    fetch('http://localhost:4000/aq2', {
      method: 'POST',
      headers: {
        accept: 'applications.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({query: query}),
      cache: 'default'
    }).then(async res => {
      var data2 = await res.json();
      console.log(data2);
      setData(data2);
    })
  }


return (
	<div className="App">
    <div>
    <button onClick={addRoute}>Add Route</button>
    <button onClick={deleteRoute}>Delete Route</button>
    <button onClick={editRoute}>Edit Route</button>
    <button onClick={searchRoute}>Search Route</button>
    <button onClick={aq1}>A. Query 1</button>
    <button onClick={aq2}>A. Query 2</button>
    
    </div>
    <input placeholder="Search for a route" onChange={event => {console.log(event.target.value); setQuery(event.target.value)}}/>
  <div className='tableContainer'>
    <table>
      <tr>
      <th>Edit row</th>
      <th>route_id</th>
      <th>agency_id</th>
      <th>route_short_name</th>
      <th>route_long_name</th>
      <th>route_type </th>
      <th>route_color</th>
      <th>route_text_color</th>
      <th>stop_id</th>
      <th>trip_id</th>
      <th>count</th>
      </tr>
      {
            data.map((val) => {
              if(val.hasOwnProperty("route_id"))
              {
                return (
                  <tr>
                  <td> <button onClick={editRoute}>Edit Name</button> {val.name} </td>
                  <td>{val.route_id}</td>
                  <td>{val.agency_id}</td>
                  <td>{val.route_short_name}</td>
                  <td>{val.route_long_name}</td>
                  <td>{val.route_type}</td>
                  <td>{val.route_color}</td>
                  <td>{val.route_text_color}</td>
                  </tr>
                )
              }
              else if(val.hasOwnProperty("trip_id"))
              {
                return (
                  <tr>
                  <td>{val.trip_id}</td>
                  </tr>
                )
              }
              else if(val.hasOwnProperty("count"))
              {
                return (
                  <tr>
                  <td>{val.stop_id}</td>
                  <td>{val.count}</td>
                  </tr>
                )
              }
            })
          }
      
    </table>
    </div>
  </div>
);
}

export default App;
