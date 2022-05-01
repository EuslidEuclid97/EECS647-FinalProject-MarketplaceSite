import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
    const [users, setUsers] = useState(null)//temporary til we get connected to a db

    const[password, setPassword] = useState('')
    const[username, setUsername] = useState('')
    const[newPassword, setNewPassword] = useState('')
    const[newUsername, setNewUsername] = useState('')
    const[isPending, setIsPending] = useState(false)

    const history = useNavigate()
    //const location = useLocation()
    
    useEffect(() => {//collects all current account for later comparison
        fetch('http://localhost:8000/users').then(response => response.json()).then(data => {
            setUsers(data);
        })
    }, [])
    
    const handleSignIn = (e) => {
        e.preventDefault();
        setIsPending(true)
        var foundUsername = 0;
        var redirectRoute = ""
        console.log("Should be all users", users)
        const user = {username, password}
        var found = 0;
        console.log("User will be signed in if pword and username is correct");
        //will take in text from credentials field and compare to users array
        {users && users.map((oneUser) => {
            console.log("Should be single user's credentials in db", oneUser.password, oneUser.username)
            console.log("Should be new user credentials", user.username, user.password)
            if(password === oneUser.password || username === oneUser.username){
                foundUsername = oneUser.username
                if(!found){
                    found = 1;
                }
            }
        })}
        if(found){//needs route change
            //console.log(users);
            setIsPending(false)
            found = 0;
            history("Accounts/" + foundUsername)
        }
        else{
            found = 0;
            alert("Username or password is incorrect")
        }
}

    const handleSignUp = (e) => {
        e.preventDefault();
        setIsPending(true)
        const user = {username, password}
        var found = 0;
        {users && users.map((oneUser) => {
            //console.log("Should be single user in db", oneUser)
            //console.log("Should be new user", user)
            if(newPassword === oneUser.password || newUsername === oneUser.username){
                if(!found){
                    //pop up
                    alert("Username or password is already taken")
                    found = 1;
                }
            }
        })}
        //console.log(users)
        if(!found){
            user.username = newUsername
            user.password = newPassword
            fetch('http://localhost:8000/users', {
            method: 'POST', 
            body: JSON.stringify(user),
            headers: {'Content-Type': 'application/json'}
        }).then(() => {
                alert("Account created!")
                console.log(users); //maybe display something here
            })
            fetch('http://localhost:8000/users').then(response => response.json()).then(data => {
            setUsers(data);//seems to be a problem with new users not being registered?    
        })
        }
        found = 0;
        setIsPending(false)
    }

    return (  
        <div className="home">
            <div>
            <form onSubmit = {handleSignUp}>
                <h2>Sign Up</h2>
                <label>Username</label>
                <input 
                    type = "text"
                    required
                    value = {newUsername}
                    onChange = {(e) => setNewUsername(e.target.value)}
                >
                </input>
                <label>Password</label>
                <input 
                    type = "text"
                    required
                    value = {newPassword}
                    onChange = {(e) => setNewPassword(e.target.value)}
                >
                </input>
                {!isPending && <button className="signButton">Sign Up</button>}
                {isPending && <button disabled>Adding user...</button>}
            </form>
            </div>
            <div>
            <form onSubmit = {handleSignIn}>
                <h2>Sign In</h2>
                <label>Username</label>
                <input 
                    type = "text"
                    required
                    value = {username}
                    onChange = {(e) => setUsername(e.target.value)}
                >
                </input>
                <label>Password</label>
                <input 
                    type = "text"
                    required
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                >
                </input>
                {!isPending && <button className="signButton">Sign In</button>}
                {isPending && <button disabled>Adding user...</button>}
            </form>
            </div>
        </div>
    );
}
 
export default Home;