import './App.css';

// Example of a data array that
// you might receive from an API
const data = [
{ name: "Anom", age: 19, gender: "Male" },
{ name: "Megha", age: 19, gender: "Female" },
{ name: "Subham", age: 25, gender: "Male"},
]

function App() {
return (
	<div className="App">
    <div>
    <button>Add Route</button>
    <button>Delete Route</button>
    <button>Edit Route</button>
    </div>
    <input placeholder="Search for a route" />
	<table>
		<tr>
		<th>Name</th>
		<th>Age</th>
		<th>Gender</th>
		</tr>
		{data.map((val, key) => {
		return (
			<tr key={key}>
			<td>{val.name}</td>
			<td>{val.age}</td>
			<td>{val.gender}</td>
			</tr>
		)
		})}
	</table>
	</div>
);
}

export default App;
