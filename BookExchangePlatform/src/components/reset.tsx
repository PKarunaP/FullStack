import { useState } from "react";
import axios from "axios";
import { Navigate, useSearchParams } from "react-router-dom";




export default function Reset() {

    const [password, setPassword] = useState("");
    const [cnfPassword, setCnfPassword] = useState("");
    const [smallText, setSmallText] = useState("");
    const [toHome, setToHome] = useState(false);

    const [queryToken] = useSearchParams();
    const token = queryToken.get("token");

    function ResetPass(event: any) {
        debugger
        event.preventDefault();
        if (cnfPassword !== password) {
            setSmallText("Passwords don't match!!")
        } else {
            axios.post("http://localhost:80/reset-password", { password, token }).then(res => {
                if (res.data.status == "success") {
                    setToHome(true);
                    setCnfPassword("");
                    setPassword("");
                }
            })
        }
    }

    if (toHome) {
        return <Navigate to={"/"} />
    }

    return (
        <>
            <div className="col-3 mx-auto my-auto position-relative loginTop">
                <div className="text-primary text-center"><h3>Reset Password</h3></div>
                <form onSubmit={ResetPass}>
                    <div className="form-group col-12 mt-2">
                        <label htmlFor="emailId">Password</label>
                        <input type="password" className="form-control" id="password" aria-describedby="emailHelp" value={password} placeholder="Enter password"
                            onChange={e => { setPassword(e.target.value); setSmallText(""); }} />
                        <div id="emailHelp" className="form-text text-danger">{smallText}</div>
                    </div>
                    <div className="form-group col-12 mt-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="cnfPassword" value={cnfPassword} placeholder="Confirm Password"
                            onChange={e => { setCnfPassword(e.target.value); setSmallText("") }} />
                    </div>
                    <button type="submit" className="btn btn-primary my-3 col-12" >Reset</button>
                </form>
            </div>
        </>
    )
}

