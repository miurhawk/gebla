import * as React from "react"
import {DetailCol, StyledForm, AgileButton, FlexCol, Divider, LoginDiv} from "../styles";
import {useEffect, useState} from "react";
import {BASEURL} from "../app";
import {useCookies} from "react-cookie";
import UserInfo from "../UserInfo/UserInfo";

const LogIn = () => {

    const [cookies, setCookie, removeCookie] = useCookies();

    let [userID, setID] = useState(0);


    let [email, setEmail] = useState("");
    let [username, setUsername] = useState("");
    let [pwd, setPwd] = useState("");
    let [first, setFirst] = useState("");
    let [last, setLast] = useState("");
    let [phone, setPhone] = useState("");
    let [gender, setGender] = useState(0);
    let [address, setAddress] = useState("");
    let [dob, setDOB] = useState("");


    let [create, setCreate] = useState(false);
    let [validate, setValidate] = useState(false);
    let [update, setUpdate] = useState(false);

    useEffect(() => {
        if (cookies.beta_user) {
            setID(cookies.beta_user);
        }
    }, [cookies.beta_auth, cookies.beta_user])
    const handleSubmit = (evt) => {
        evt.preventDefault();

        let data = JSON.stringify({
            email: email,
            password: pwd,
        });
        fetch(BASEURL+"/login", {
            method: "POST",
            body: data,
        }).then((response) => {
            if (response.status === 200) {
                response.json().then((res) => {
                    setCookie("beta_auth", res.meta.auth);
                    setCookie("beta_user", res.meta.user);
                    setID(Number(res.meta.user));
                    if (res.climber.name == "" || res.climber.birthdate == "") {
                        setUpdate(true);
                    }
                    setValidate(false);
                })
            } else {
                if (response.status==422) {
                    response.json().then((res) => {
                        if (res.code == 12) {
                            alert("Please validate your email before logging in.");
                            setValidate(true);
                        } else {
                            alert("There was an error logging in, please try again");
                        }
                    })
                } else {
                    alert("There was an error logging in, please try again");
                }
            }

        });
    };

    const toggleSignUp = (evt) => {
        evt.preventDefault();
        setCreate(!create);
    }

    const logout = () => {
        removeCookie("beta_auth");
        removeCookie("beta_user");
        removeCookie("beta_passes:"+userID);
        setID(0);
    }

    const handleSubmitCreate = (evt) => {
        evt.preventDefault();

        let data = JSON.stringify({
            email: email,
            password: pwd,
            username: username,
        });
        fetch(BASEURL+"/membership/climber", {
            method: "POST",
            body: data,
        }).then((response) => {
            if (response.status === 200) {
                response.json().then((res) => {
                    // the user still needs to verify email and log in
                    // setCookie("beta_auth", res.meta.auth);
                    // setCookie("beta_user", res.meta.user);
                    setCreate(false);
                    setValidate(true);
                })
            } else {
                if (response.status==422) {
                    response.json().then((res) => {
                        if (res.code == 501) {
                            alert("That email address is taken, try signing in or reset your password at beta.chalk-technologies.com.");
                        } else if (res.code == 502) {
                            alert("That username is taken, please try again");

                        } else {
                            alert("There was an error creating your account, please try again");
                        }
                    })
                } else {
                    alert("There was an error creating your account, please try again");
                }
            }

        });
    };

    const handleSubmitUpdate = (evt) => {
        evt.preventDefault();

        let data = JSON.stringify({
            key: cookies.beta_user,
            first_name: first,
            last_name: last,
            birthdate: dob,
            phone: phone,
            address: address,
            gender: gender,

        });
        fetch(BASEURL+"/membership/climber/"+cookies.beta_user, {
            method: "POST",
            body: data,
            headers: {"Authorization": cookies.beta_auth},
        }).then((response) => {
            if (response.status === 200) {
                response.json().then((res) => {
                    setCookie("beta_auth", res.meta.auth);
                    setCookie("beta_user", res.meta.user);
                })
            } else {
                alert("There was an error logging in, please try again");
            }

        });
    };
  return (
    <LoginDiv>

        {!cookies.beta_auth && !create && !update &&

            <StyledForm onSubmit={handleSubmit}>
                <h4>{validate ? "please validate your email" : "log in"}</h4>
                <Divider />
                <input type="email" placeholder={"email"} required value={email} onChange={(e) => setEmail(e.target.value)} />
               <input type="password" placeholder={"password"} required value={pwd} onChange={(e) => setPwd(e.target.value)} />
                    <AgileButton type="submit" onClick={handleSubmit}><a style={{paddingRight:`170px`}}>log in</a></AgileButton>
                    <AgileButton onClick={toggleSignUp}><a style={{paddingLeft:`170px`}}>sign up</a></AgileButton>
            </StyledForm>
        }

        {!cookies.beta_auth && create &&
        <StyledForm onSubmit={handleSubmitCreate}>
            <h4>sign up</h4>
            <Divider />
            <input type="text" placeholder={"username"} required value={username} onChange={(e) => setUsername(e.target.value)} />
            <input placeholder={"email"} type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder={"password"} required value={pwd} onChange={(e) => setPwd(e.target.value)} />
            <AgileButton type="submit" onClick={handleSubmitCreate}><a style={{paddingRight:`170px`}}>sign up</a></AgileButton>
            <AgileButton onClick={toggleSignUp}><a style={{paddingLeft:`170px`}}>log in</a></AgileButton>
        </StyledForm>
        }
        {!cookies.beta_auth && update &&
        <StyledForm onSubmit={handleSubmitUpdate}>
            <h4>Enter details</h4>
            <Divider />
            <input type="text" placeholder={"first name"} required value={first} onChange={(e) => setFirst(e.target.value)} />
            <input type="text" placeholder={"last name"} required value={last} onChange={(e) => setLast(e.target.value)} />
            <label><h6>Date of Birth: </h6><input type="date" required value={dob} onChange={(e) => setDOB(e.target.value)} /></label>
           <label>
               <h6>Gender: </h6>
                <select onChange={(e) => setGender(Number(e.target.value))}>
                    <option value="0"></option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                    <option value="3">Other</option>
                </select>
           </label>
            <input type="phone" placeholder={"phone"} value={phone} onChange={(e) => setPhone(e.target.value)} />
            <AgileButton onClick={handleSubmitUpdate}><a style={{paddingRight:`170px`}}>submit</a></AgileButton>
        </StyledForm>
        }
        {userID != 0 &&
            <a style={{color: `#FFFFFF`, padding: `10px 10vw`, textAlign: `left`, display: `flex`, flexDirection: `column`, alignItems: `center`, minWidth: `300px`}}>
                <UserInfo id={userID} verbose={true}/>
                {/*<PurchasePass />*/}
                <Divider />
                <AgileButton onClick={logout}><a style={{paddingRight:`170px`}}>log out</a></AgileButton>

            </a>
        }


    </LoginDiv>
  )
};



export default LogIn;
