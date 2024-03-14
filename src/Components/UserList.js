import React from 'react'
import UserCard from './UserCard'

const UserList = ({users}) => {
    // console.log(users)
  return (
    <div className='list'>
        {React.Children.toArray(
            users?.map(el=><UserCard user={el} />)
        )}
    </div>
  )
}

export default UserList