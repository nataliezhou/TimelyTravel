import './App.css';
import React, {useState, useEffect} from 'react'

function App() {
  const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male"},
    ]
    
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("")

  useEffect(() => {
    fetch('/get').then(res => res.json()).then(data => {
      console.log(data);
      setItems(data);
    });
  }, []); /* sets the table to be updated as the /get route of the backend */

  function addRoute(){
    alert("added route");
    /* call backend endpoint to CREATE in table */
  }

  function deleteRoute(){
    alert("deleted route");
    /* call backend endpoint to CREATE in table */
  }

  function editRoute(){
    alert("deleted route");
    /* call backend endpoint to CREATE in table */
  }


return (
	<div className="App">
    <div>
    <button onClick={addRoute}>Add Route</button>
    <button onClick={deleteRoute}>Delete Route</button>
    <button onClick={editRoute}>Delete Route</button>
    
    </div>
    <input placeholder="Search for a route" onChange={event => setQuery(event.target.value)}/>
	<table>
		<tr>
		<th>Name</th>
		<th>Age</th>
		<th>Gender</th>
		</tr>
    {
          data.filter(items => { 
           // const x = Object.values(items).map(name => name.toString().toLowerCase())
           // console.log(x)
            if (query === '') {
              return items;
            } else if (Object.values(items).map(name => name.toString().toLowerCase()).some(
                it => it.includes(query.toLowerCase()))) 
            {
              return items;
            }
          }).map((val, key) => {
            return (
              <tr key={key}>
              <td> <button onClick={editRoute}>Edit Name</button> {val.name} </td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
              </tr>
            )
            })
        }
		
	</table>
	</div>
);
}

export default App;
