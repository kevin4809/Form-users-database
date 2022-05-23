import axios from "axios";
import React, { useEffect, useState } from "react";
import UsersForm from "./Components/UsersForm";
import UsersList from "./Components/UsersList";
import './Components/Styles.css'

const App = () => {

    const [users, setUsers] = useState([]);
    const [userSelected, setUserSelected] = useState(null);


    useEffect(() => {

        axios.get('https://users-crud1.herokuapp.com/users/')
            .then(res => setUsers(res.data))

    }, [])


    const getUsers = () => {

        axios.get('https://users-crud1.herokuapp.com/users/')
            .then(res => setUsers(res.data))
    }

    const userSelect = user => {
        setUserSelected(user);
    }

    const deselectUser = () => {
        setUserSelected(null);
    }

    const deleteUser = id => {
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
            .then(() => getUsers())
    }


    return (
        <div>
            <UsersForm
                getUsers={getUsers}
                userSelected={userSelected}
                deselectUser={deselectUser}
            />

            <UsersList
                users={users}
                userSelect={userSelect}
                deleteUser={deleteUser}
            />
        </div>
    )
}

export default App