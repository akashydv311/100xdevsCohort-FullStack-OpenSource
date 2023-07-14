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
                        <Button variant="contained">Sign Up</Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}
export default Signup;