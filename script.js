// Your React code using MUI components will go here
const { Container, Grid, Paper } = MaterialUI;

function App() {
    return (
        <Grid container>
            <Grid item sm={5}>
                <Paper style={{ backgroundColor: "blue" }}>Item 1</Paper>
            </Grid>
            <Grid item sm={7}>
                <Paper style={{ backgroundColor: "grey" }}>Item 2</Paper>
            </Grid>
        </Grid>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));