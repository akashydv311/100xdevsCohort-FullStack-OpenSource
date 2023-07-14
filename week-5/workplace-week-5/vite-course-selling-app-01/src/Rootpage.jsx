import { Typography, Card, Button } from '@mui/material';


function Rootpage() {
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
                    <Typography variant="h5">Welcome to the coursera!</Typography>
                    <br />
                    <div style={
                        {
                            display: "flex",
                            justifyContent: 'center',
                        }
                    }>
                        <Button variant="contained"
                            onClick={() => {
                                window.location = '/signup'
                            }}
                        >Sign Up
                        </Button>
                        <Button variant="contained"
                            onClick={() => {
                                window.location = '/signup'
                            }}
                        >Sign In
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    )
}
export default Rootpage;