import { useState } from "react"
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Register() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirtstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [loginUser, setLoginUser] = useState(false);
    const [smalltext, setSmallText] = useState("");

    function Register(event: any) {
        event.preventDefault();
        setUserName("");
        setPassword("");
        setFirtstName("");
        setLastName("");
        axios.post('http://localhost:80/register', { userName, password, firstName, lastName })
            .then((res) => {
                if (res.data.status == "success") setLoginUser(true)
                else {
                    setSmallText(res.data.message);
                }
            })
            .catch(err => {
                console.log(err);
                setSmallText(err.response.data.message);
            });
    }

    if (loginUser) {
        return <Navigate to={"/"} />
    }

    return (
        <div className="col-3 mx-auto my-auto position-relative loginTop">
            <div className="text-primary text-center"><h3>Register</h3></div>
            <form onSubmit={Register}>
                <div id="emailHelp" className="form-text text-danger">{smalltext}</div>
                <div className="form-group col-12 mt-2">
                    <label>First name</label>
                    <input type="text" className="form-control" value={firstName} placeholder="First name" onChange={e => { setFirtstName(e.target.value); setSmallText("") }} />
                </div>
                <div className="form-group col-12 mt-2">
                    <label>Last name</label>
                    <input type="text" className="form-control" value={lastName} placeholder="Last name" onChange={e => { setLastName(e.target.value) }} />
                </div>
                <div className="form-group col-12 mt-2">
                    <label>Email address</label>
                    <input type="email" className="form-control" value={userName} placeholder="Enter email" onChange={e => { setUserName(e.target.value) }} />
                </div>
                <div className="form-group col-12 mt-2">
                    <label>Password</label>
                    <input type="password" className="form-control" value={password} placeholder="Enter password" onChange={e => { setPassword(e.target.value) }} />
                </div>

                <button type="submit" className="btn btn-primary my-3 col-12"> Register</button>

                <p className="forgot-password text-right">
                    Already registered? <a className="fw-medium" href="/">Sign-in</a>
                </p>
            </form>
        </div>
    )
}
