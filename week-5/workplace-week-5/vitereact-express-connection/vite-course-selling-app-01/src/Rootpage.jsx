import { Typography, Card, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Rootpage() {
    const navigate = useNavigate();

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
                                navigate('/signup');
                                // window.location = '/signup'
                            }}
                        >Sign Up
                        </Button>
                        <Button variant="contained"
                            onClick={() => {
                                navigate('/signin');
                                // window.location = '/signin'
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