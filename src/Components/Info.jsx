import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Info = ({users}) => {
    const [user,setUser]=useState(null)
    console.log(users)
    const {id}=useParams()
    // console.log(id)
    const getUser=async()=>{
        const myUser=await users?.find(el=>el.id==id)
        setUser(myUser)
    }
    useEffect(() => {
  getUser()
    }, [id,users])
    
    return(
    <div>{user&&<>
    
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
        <h3>{user.phone}</h3></>
        }
        <Link to={"/"}>
        <button>Home</button></Link>
    </div>
  )
}

export default Info