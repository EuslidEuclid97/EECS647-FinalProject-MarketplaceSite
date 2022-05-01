
import { useParams } from "react-router-dom";
import {AiOutlinePlus} from "react-icons/ai"
import { Button } from "./Button";

const Account = () => {

    const {username} = useParams()

    const addItem = () => {
        console.log("Will add item")
    }

    return ( 
        <div className="account">
            <h1>Account - {username}</h1>
            <div className="buttonDiv">
                <button className="button" onClick={addItem}>+</button>
            </div>
        </div>
     );
}
 
export default Account;

/* users need to be able to: 
1. View their items
2. Delete their items
3. Add new items
4. Log out
*/