import { useState } from "react"
import axios from "axios";
import { Navigate } from "react-router-dom";

export default function Users() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [smalltext, setSmallText] = useState("");
  const [goToList, setGoToList] = useState(false);
  const [popUp, setPopUp] = useState("");

  function Login(event: any) {
    event.preventDefault();
    setUserName("");
    setPassword("");
    axios.post('http://localhost:80/login', { userName, password })
      .then(res => {
        if (res.data.status == "success") {
          localStorage.setItem('token', res.data.token);
          setGoToList(true)
        }
        else {
          setSmallText(res.data.message);
        }
      })
      .catch(err => { console.log(err); setSmallText(err.response.data.message); });
  }

  if (goToList) {
    return (<><Navigate to={"/books-listing"} /></>)
  }

  function forgotPassword(event: any) {
    event.preventDefault();
    axios.post('http://localhost:80/forgot-password', { userName }).then(
      data => { setPopUp(data.data.message); setUserName(""); setPassword("") }
    ).catch(err =>
      console.log(err)
    );
  }

  return (
    <>
      <div className="clearFix">{popUp}</div>
      <div className="col-3 mx-auto my-auto position-relative loginTop">
        <div className="text-primary text-center"><h3>Sign-in</h3></div>
        <form onSubmit={Login}>
          <div id="emailHelp" className="form-text text-danger">{smalltext}</div>
          <div className="form-group col-12 mt-2">
            <label htmlFor="emailId">Email address</label>
            <input type="email" className="form-control" id="emailId" aria-describedby="emailHelp" value={userName} placeholder="Enter email"
              onChange={e => { setUserName(e.target.value); setSmallText(""); setPassword(""); setPopUp("") }} />
          </div>
          <div className="form-group col-12 mt-2">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" value={password} placeholder="Password"
              onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary my-3 col-12" >Login</button>
          <p className="forgot-password text-right">
            <a className="fw-medium" href="" onClick={forgotPassword}>Forgot Password?</a>
          </p>
          <p className="forgot-password text-right">
            Don't have an account? <a className="fw-medium" href="/register">Register</a>
          </p>
        </form>
      </div>
    </>
  )
}
