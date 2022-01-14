import React, {useState} from 'react';

const HookForm = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [listOfUsers, setListOfUsers] = useState([])


    const createUser = (e) => {
        e.preventDefault();
        console.log("submitted the form!")
        let userObj = {firstName,lastName,email,password,confirmPassword}
        console.log(userObj)

        setListOfUsers([...listOfUsers,userObj])
        console.log(listOfUsers)
    }


    return (
        
        <div className="App container">
            <form action="" onSubmit={createUser}>
                <div className="form-group">
                    <label htmlFor="">First Name: </label>
                    <input type="text" className = 'form-control' onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Last Name: </label>
                    <input type="text" className = 'form-control' onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email: </label>
                    <input type="text" className = 'form-control' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Password: </label>
                    <input type="password" className = 'form-control' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Confirm Password: </label>
                    <input type="password" className = 'form-control' onChange={(e)=>setConfirmPassword(e.target.value)}/>
                </div>
                <input type="submit" className = 'form-control'/>
            </form>

        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>

        </div>



    )
}

export default HookForm;