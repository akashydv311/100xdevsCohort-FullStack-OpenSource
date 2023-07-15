import { useState } from 'react';
import { Typography, Card, Button, TextField } from '@mui/material';

function Signin() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

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
                    <Typography variant="h5">Welcome back let's Sign in!</Typography>
                    <br />
                    <div style={
                        {
                            display: "flex",
                            justifyContent: 'center',
                        }
                    }>
                    </div>

                    <div>
                        <TextField onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                            fullWidth={true}
                            id="outlined-basic"
                            label="Email"
                            variant="outlined" />
                        <br />
                        <TextField onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                            fullWidth={true}
                            id="outlined-basic"
                            label="Password"
                            variant="outlined" />
                        <br />
                        <br />
                        <Button variant="contained"
                            onClick={() => {
                                fetch('http://localhost:3000/users/login', {
                                    method: 'POST',
                                    body: JSON.stringify({
                                        username: email,
                                        password: password,
                                    }),
                                    headers: {
                                        "Content-type": "application/json"
                                    }
                                })
                                console.log(email, password);
                            }}
                        >Sign In</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}
export default Signin;










// Not using state of react
/*

import { Typography, Card, Button, TextField } from '@mui/material';

function Signin() {
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
                    <Typography variant="h5">Welcome back let's Sign in!</Typography>
                    <br />
                    <div style={
                        {
                            display: "flex",
                            justifyContent: 'center',
                        }
                    }>
                    </div>

                    <div>
                        <TextField fullWidth="true"
                            id="outlined-basic"
                            label="Email"
                            variant="outlined" />
                        <br />
                        <TextField fullWidth="true"
                            id="outlined-basic"
                            label="Password"
                            variant="outlined" />
                        <br />
                        <br />
                        <Button variant="contained"
                            onClick={() => {
                                let username = document.getElementById("username").value;
                                let password = document.getElementById("password").value;
                                fetch('http://localhost:3000/users/signin', {
                                    method: 'GET',
                                })
                            }}
                        >Sign In</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}
export default Signin;

*/