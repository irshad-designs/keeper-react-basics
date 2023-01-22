import Form from "./components/form";
import Navbar from "./components/navbar";
import { Grid } from "@mui/material";

function App() {
  return (
    <div id="App">
      <Navbar />

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        mt="10px"
      >
        <Grid item xs={3}>
          <Form />
        </Grid>
      </Grid>

      <p>hello</p>
    </div>
  );
}
export default App;
