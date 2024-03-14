import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import UserList from "./Components/UserList";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Info from "./Components/Info";
import axios from "axios";

function App() {
  const [list, setList] = useState(null);
  // console.log("list",list);
  // const getData = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => setList(users))
  //     .catch((error) => console.log(error));
  // };

  const getData=async()=>{
    try {
      const res=await axios.get("https://jsonplaceholder.typicode.com/users");
      // console.log(res.data)
      setList(res.data)
    } catch (error) {
      console.log(error)
    }
   
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<UserList users={list} />} />
          <Route path='/info/:id' element={<Info    users={list}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
