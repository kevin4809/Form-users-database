import axios from 'axios';
import React, { useEffect, useState } from 'react'

const UsersForm = ({ getUsers, userSelected, deselectUser }) => {

    const [firstName, setFirstName] = useState("");
    const [secondName, setsecondName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");

    useEffect(() => {

        if (userSelected !== null) {
            setFirstName(userSelected.first_name)
            setsecondName(userSelected.last_name)
            setEmail(userSelected.email)
            setPassword(userSelected.password)
            setBirthday(userSelected.birthday)
        } else {
            setFirstName("")
            setsecondName("")
            setEmail("")
            setPassword("")
            setBirthday("")
        }

    }, [userSelected])



    const submit = e => {
        e.preventDefault()
        const user = {
            first_name: firstName,
            last_name: secondName,
            email: email,
            password: password,
            birthday: birthday
        }

        if (userSelected !== null) {
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
                .then(() => {
                    getUsers()
                    deselectUser()
                })
        } else {

            axios.post('https://users-crud1.herokuapp.com/users/', user)
                .then(() => getUsers())
        }

    }

    return (

        <div className="content-input container">

            <button type="button" className="first-button btn btn-primary " data-bs-toggle="modal" data-bs-target="#usersModal">
                Create new Users
            </button>

            <h1>Users</h1>

            <div className="modal fade" id="usersModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">

                            <h5 className="modal-title" id="exampleModalLabel">Users</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                        </div>

                        <div className="modal-body ">

                            <form onSubmit={submit}>

                                <div className="content-first-name">
                                    <label htmlFor="first-name">First name</label>
                                    <br />
                                    <input type="text"
                                        id="first-name"
                                        onChange={e => setFirstName(e.target.value)}
                                        value={firstName}
                                    />

                                </div>

                                <div className="content-second-name">

                                    <label htmlFor="second-name">Second name</label>
                                    <br />
                                    <input type="text"
                                        id="second-name"
                                        onChange={e => setsecondName(e.target.value)}
                                        value={secondName}
                                    />

                                </div>


                                <div className="content-email">

                                    <label htmlFor="email">Email</label>
                                    <br />
                                    <input type="email"
                                        id="email"
                                        onChange={e => setEmail(e.target.value)}
                                        value={email}
                                    />

                                </div>

                                <div className="content-password">

                                    <label htmlFor="password">password</label>
                                    <br />
                                    <input type="password" id="password"
                                        onChange={e => setPassword(e.target.value)}
                                        value={password}
                                    />

                                </div>

                                <div className="content-birthday">

                                    <label htmlFor="birthday">birthday</label>
                                    <br />
                                    <input type="date" id="birthday"
                                        onChange={e => setBirthday(e.target.value)}
                                        value={birthday}
                                    />

                                </div>

                                <button type='submit' className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersForm