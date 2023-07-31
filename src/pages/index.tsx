import {Button, Grid} from '@mui/material';

export default function App() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
                Header
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <div>
                    <Button variant="contained" size={"large"}>Customer Log in</Button>
                </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <div>
                    <Button variant="outlined" size={"large"}>Staff Log in</Button>
                </div>
            </Grid>
        </Grid>
    )
}