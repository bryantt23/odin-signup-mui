// Your React code using MUI components will go here
const { Container, Grid, Paper, Box } = MaterialUI;

function App() {
    return (
        <Grid container
            sx={{
                border: '1px solid black',
                height: '100vh',
                margin: 0
            }}>
            <Grid item sm={5}
            // sx={{ backgroundImage: './leaves.jpg' }}
            >

                <Box
                    sx={{
                        backgroundImage: "url('./leaves.jpg')",
                        backgroundRepeat: "no-repeat",
                        // minHeight: 'fit-content',
                        // width: '385px'
                        height: '100vh',
                        backgroundSize: 'cover'
                    }}
                >

                </Box>
            </Grid>
            <Grid item sm={7}>
                <Paper style={{ backgroundColor: "grey" }}>Item 2</Paper>
            </Grid>
        </Grid>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));