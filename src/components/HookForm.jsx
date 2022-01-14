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
                {
                    firstName.length>0 && firstName.length<2 || firstName.length>0 && firstName.length>20? 
                    <p className='text-danger'>First name must be at least 2 characters and less than 20 characters. Right now the length of your first name is: {firstName.length}</p>:""
                }
                <div className="form-group">
                    <label htmlFor="">Last Name: </label>
                    <input type="text" className = 'form-control' onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                {
                    lastName.length>0 && lastName.length<2 || lastName.length>0 && lastName.length>20? 
                    <p className='text-danger'>Last name must be at least 2 characters and less than 20 characters. Right now the length of your last name is: {lastName.length}</p>:""
                }
                <div className="form-group">
                    <label htmlFor="">Email: </label>
                    <input type="text" className = 'form-control' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                {
                    email.length>0 && email.length<5?
                    <p className='text-danger'>Email must be at least 5 characters</p>:""
                }
                <div className="form-group">
                    <label htmlFor="">Password: </label>
                    <input type="password" className = 'form-control' onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                {
                    password.length>0 && password.length<8?
                    <p className='text-danger'>Password must be at least 8 characters</p>:""
                }
                <div className="form-group">
                    <label htmlFor="">Confirm Password: </label>
                    <input type="password" className = 'form-control' onChange={(e)=>setConfirmPassword(e.target.value)}/>
                </div>
                {
                    confirmPassword.length>0 && confirmPassword.length<8?
                    <p className='text-danger'>Password must be at least 8 characters</p>:""
                }
                <input type="submit" className = 'form-control'/>
                {
                    password.length>0 && confirmPassword.length>0 && password!=confirmPassword?<p className='text-danger'>Your passwords do not match</p>:""
                }
            </form>

        </div>



    )
}

export default HookForm;