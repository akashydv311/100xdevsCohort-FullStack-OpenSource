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
                        <Button variant="contained">Sign In</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}
export default Signin;