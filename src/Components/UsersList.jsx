import React from 'react'

const UsersList = ({ users, userSelect, deleteUser }) => {


  return (
    <div className='container' >

      <div className='row row-cols-4 tarjets-users'>
        {
          users.map(user => (
            <div className='tarjets' key={user.id}>
              <div className="info-user">
                <h1>{user.first_name} {user.last_name}</h1>
                <p className='letter-white'><b>EMAIL</b> </p>
                <p>{user.email}</p>
                <p className='letter-white' ><b>PASSWORD</b> </p>
                <p>{user.password}</p>
                <p className='letter-white' ><b>BIRTHDAY</b> </p>
                <p>{user.birthday}</p>
                <button onClick={() => deleteUser(user.id)}>Delete</button>

                <button onClick={() => userSelect(user)}>Edit</button>
              </div>

            </div>
          ))
        }

      </div>

    </div>
  )
}

export default UsersList