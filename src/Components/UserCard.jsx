import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
  return (
    <div>
         <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{user.email}</Card.Subtitle>
        <Card.Text>
         {user.phone}
        </Card.Text>
        <Card.Text>
         {user.company.catchPhrase}
        </Card.Text>
        <Link to={`/info/${user.id}`} >
        <p >Info</p>
        </Link>
       
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard