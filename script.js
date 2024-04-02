// Your React code using MUI components will go here
const { Container, Grid, Paper, Box, Typography, TextField, Button, Link } = MaterialUI;

function App() {
    return (
        <Grid container
            sx={{
                border: '1px solid black',
                height: '100vh',
                margin: 0
            }}>
            <Grid item sm={5}>
                <Box
                    sx={{
                        backgroundImage: "url('./images/leaves.jpg')",
                        backgroundRepeat: "no-repeat",
                        height: '100vh',
                        backgroundSize: 'cover',
                        paddingTop: 20
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'rgba(0, 0, 0, 0.33)',
                            height: 200
                        }}>
                        <Box
                            component="img"
                            sx={{
                                height: 150,
                                width: 150,
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                            }}
                            src="./images/odin-lined.png"
                        >
                        </Box>
                        <Typography className="odin">
                            ODIN
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item sm={7} sx={{ padding: 2 }} className="right-column" >
                <Typography level="h3">This is not a real online service! You know you need something like this in your life to help you realize your deepest dreams. Sign up now to get started.
                </Typography>
                <Typography level="h3">You <em>know</em> you want to.</Typography>
                <Grid container className="input-area" sx={{
                    padding: 2,
                    boxShadow: 3,
                    // bgcolor: 'white',
                    borderRadius: 2,
                }}>
                    <Grid item xs={12}>
                        <Typography level="h3">Let's do this!</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            label="First Name"
                            variant="outlined"
                            defaultValue="Thor"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            required
                            label="Email"
                            variant="outlined"
                            type="email"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Phone Number"
                            variant="outlined"
                            name="phone"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            error
                            helperText="Passwords do not match"
                            required
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            error
                            required
                            label="Confirm Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Box>
                    <Button
                        style={{
                            borderRadius: 35,
                            backgroundColor: "#596D48",
                            // padding: "18px 36px",
                            // fontSize: "18px"
                        }} variant="contained">Contained</Button>
                    <Typography>
                        Already have an account? <Link to="#">Log in</Link>                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));