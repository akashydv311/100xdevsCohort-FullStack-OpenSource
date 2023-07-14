

import { useState } from "react";
import { Typography, Card, Button, TextField } from '@mui/material';

function Signup() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <div>
            {/* {email} {password} */}

            <Card variant="outlined" style={{
                marginLeft: '20%',
                marginTop: '5%',
                padding: '5%',
                textAlign: 'center',
                width: '40%',
                backgroundColor: '#f2f7f2'

            }}>
                <div>
                    <Typography variant="h5">Sign up! below</Typography>
                    <br />
                    <div style={{
                        display: "flex",
                        justifyContent: 'center',
                    }}>
                    </div>

                    <div>
                        <TextField onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                            fullWidth={true}
                            id="username"
                            label="Email"
                            variant="outlined" />
                        <br />
                        <TextField onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                            fullWidth={true}
                            id="password"
                            label="Password"
                            variant="outlined" />
                        <br />
                        <br />
                        <Button variant="contained"
                            onClick={() => {

                                fetch('http://localhost:3000/users/signup', {
                                    method: 'POST',
                                    body: JSON.stringify({
                                        username: email,
                                        password: password,
                                    }),
                                    headers: {
                                        "Content-type": "application/json"
                                    }
                                })
                            }}

                        >Sign Up</Button>
                    </div>
                </div>
            </Card >
        </div >
    )
}
export default Signup;








// Not using state of react

/*

import { Typography, Card, Button, TextField } from '@mui/material';

function Signup() {
    return (
        <div>

            <Card variant="outlined" style={{
                marginLeft: '20%',
                marginTop: '5%',
                padding: '5%',
                textAlign: 'center',
                width: '40%',
                backgroundColor: '#f2f7f2'

            }}>
                <div>
                    <Typography variant="h5">Sign up! below</Typography>
                    <br />
                    <div style={{
                        display: "flex",
                        justifyContent: 'center',
                    }}>
                    </div>

                    <div>
                        <TextField fullWidth={true}
                            id="username"
                            label="Email"
                            variant="outlined" />
                        <br />
                        <TextField fullWidth={true}
                            id="password"
                            label="Password"
                            variant="outlined" />
                        <br />
                        <br />
                        <Button variant="contained"
                            onClick={() => {
                                let username = document.getElementById("username").value;
                                let password = document.getElementById("password").value;
                                fetch('http://localhost:3000/users/signup', {
                                    method: 'POST',
                                    body: JSON.stringify({
                                        username,
                                        password
                                    }),
                                    headers: {
                                        "Content-type": "application/json"
                                    }
                                })
                            }}

                        >Sign Up</Button>
                    </div>
                </div>
            </Card >
        </div >
    )
}
export default Signup;

*/