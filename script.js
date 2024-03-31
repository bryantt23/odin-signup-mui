// Your React code using MUI components will go here
const { Container, Grid, Paper, Box, Typography } = MaterialUI;

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
                    }}
                >
                    <Box
                        sx={{
                            paddingTop: 20,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Box
                            component="img"
                            sx={{
                                height: 100,
                                width: 100,
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
            <Grid item sm={7}>
                <Paper style={{ backgroundColor: "grey" }}>Item 2</Paper>
            </Grid>
        </Grid>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));