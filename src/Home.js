import { useEffect, useState } from "react";

const Home = () => {
    const [users, setUsers] = useState(null)//temporary til we get connected to a db

    const[password, setPassword] = useState('')
    const[username, setUsername] = useState('')
    const[newPassword, setNewPassword] = useState('')
    const[newUsername, setNewUsername] = useState('')
    const[isPending, setIsPending] = useState(false)

    /*useEffect(() => {//outline for useEffect which returns queries? Should be in Search.js too
        fetch('http://localhost:8000/users')
        .then(res => {
            return res.json()
        })
        .then(data =>{
            console.log(data)
        }
        )
    }, [])*/
    
    const handleSignIn = (e) => {
        e.preventDefault();
        setIsPending(true)
        const user = {username, password}
        var found = 0;
        console.log("User will be signed in if pword and username is correct");
        //will take in text from credentials field and compare to users array
        fetch('http://localhost:8000/users').then((response) => response.json()).then((data) => setUsers(data))
        {users && users.map((user) => {
            if(user.password === password || user.username === username){
                if(!found){
                    //pop up
                    console.log("Username or password is already taken")
                    found = 1;
                }
            }
        })}
        if(found){
            //sign user in somehow, maybe by using route id
        }
}

    const handleSignUp = (e) => {
        e.preventDefault();
        setIsPending(true)
        const user = {newUsername, newPassword}
        var found = 0;
        console.log("User will be signed in if pword and username is correct");
        //will take in text from credentials field and compare to users array
        fetch('http://localhost:8000/users').then((response) => response.json()).then((data) => setUsers(data))
        {users && users.map((user) => {
            if(user.password === password || user.username === username){
                if(!found){
                    //pop up
                    console.log("Username or password is already taken")
                    found = 1;
                }
            }
        })}
        if(!found){
            fetch('http://localhost:8000/users', {
            method: 'POST', 
            body: JSON.stringify(user),
            headers: {'Content Type': 'application/json; charset=UTF-8'}
        }).then(() => {
                console.log("New user added"); //maybe display something here
            })
        }else{
            alert("Password or Username is already taken")
        }
        setIsPending(false)
    }

    return (  
        <div className="home">
            <h2>Sign In Page</h2>
            <form onSubmit = {handleSignUp}>
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
                {!isPending && <button>Sign Up</button>}
                {isPending && <button disabled>Adding user...</button>}
            </form>
            <form onSubmit = {handleSignIn}>
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
                {!isPending && <button>Sign In</button>}
                {isPending && <button disabled>Adding user...</button>}
            </form>
        </div>
    );
}
 
export default Home;