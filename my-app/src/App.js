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
    // .then(res => {
    //   console.log(res);
    // })
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
    })
  }

  function deleteRoute(){
    alert("deleted route");
    /* call backend endpoint to DELETE in table */
    fetch('http://localhost:4000/deleteroutes + {JSON.stringify({query: query})}', {
      method: 'DELETE',
      headers: {
        accept: 'applications.json',
        'Content-Type': 'application/json'
      },
      cache: 'default'
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
    })
  }

return (
	<div className="App">
    <div>
    <button onClick={addRoute}>Add Route</button>
    <button onClick={deleteRoute}>Delete Route</button>
    <button onClick={editRoute}>Edit Route</button>
    <button onClick={searchRoute}>Search Route</button>
    
    </div>
    <input placeholder="Search for a route" onChange={event => {console.log(event.target.value); setQuery(event.target.value)}}/>
	<table>
		<tr>
		<th>route_id</th>
		<th>agency_id</th>
		<th>route_short_name</th>
    <th>route_long_name</th>
    <th>route_type </th>
    <th>route_color</th>
    <th>route_text_color</th>
		</tr>
    {
          // TODO(): REPLACE data.filter to items.filter; Changed it for visibility temporarily but items has the correct results
          data.map((val) => {
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
            })

        }
		
	</table>
	</div>
);
}

export default App;
