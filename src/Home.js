import { useEffect, useState } from "react";

const Home = () => {
    //const [users, setCredentials] = useState(null)//temporary til we get connected to a db

    /*useEffect(() => {//outline for useEffect which returns queries? Should be in Search.js too
        fetch(json url)
        .then(res => {
            return res.json()
        })
        .then(data =>{
            console.log(data)
        }
        )
    }, [])*/

    const signUp = (newUsername, newPassword)=> {
        var found = 0;
        console.log("User will be signed in if pword and username is correct");
        //will take in text from credentials field and compare to users array
        {users.map((user) => {
            if(user.password === newPassword || user.username === newUsername){
                if(!found){
                    //pop up
                    console.log("Username or password is already taken")
                    found = 1;
                }
            }
        })}
        if(!found){
            //somehow append to data of users
        }
    }

    const signIn = (usernameAttempt, passwordAttempt) => {
        var found = 0;
        console.log("User will be signed in if pword and username is correct");
        //will take in text from credentials field and compare to users array
        {users.map((user) => {
            if(user.password === newPassword || user.username === newUsername){
                if(!found){
                    //pop up
                    console.log("Username or password is already taken")
                    found = 1;
                }
            }
        })}
        if(found){
            //somehow sign the user in
        }
    }
    
    return (  
        <div className="home">
            <h2>Sign In Page</h2>
            <button onClick = {() => signUp(newUsername, newPassword)}>Sign Up</button>
            <button onClick = {() =>signIn(username, password)}>Sign In</button>
        </div>
    );
}
 
export default Home;