import React, {  useState } from 'react'
import axios from 'axios'

function App() {
  const urls = 'https://reqres.in/api/users'
  const [url,Seturl] = useState([])

    async function fetchUrl() {
      const res = await axios.get(urls);
      console.log(res.data.data);
      Seturl(res.data.data)
    }
  
  return (
    <div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Email</th>
      <th scope="col">Firstname</th>
      <th scope="col">LastName</th>
      <th scope="col">User Image</th>
    </tr>
  </thead> 
  {url.length === 0 ? 
    <button className='btn btn-primary' onClick={()=>fetchUrl()}>Get Users</button>:null}
  <tbody>
  {url.map((users)=>{
    return  <tr key={users.id}>
      <th scope="row">{users.id}</th>
      <td>{users.email}</td>
      <td>{users.first_name}</td>
      <td>{users.last_name}</td>
      <td>
        <img src={users.avatar} alt="" />
      </td>
    </tr>
  })}
  </tbody>

  
</table>

    </div>
  )
}

export default App
