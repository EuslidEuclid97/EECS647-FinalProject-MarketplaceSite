
//import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Account = () => {

    const {id} = useParams()

    return ( 
        <div className="account">
            <h1>Account - {id}</h1>
        </div>
     );
}
 
export default Account;