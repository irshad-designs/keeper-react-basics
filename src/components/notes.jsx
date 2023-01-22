import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function Notes(props) {
  function handleDelete() {
    props.onDelete(props.id);
    // console.log("clicked");
  }

  return (
    <div>
      {/* <Grid>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
      </Grid> */}
      <Box sx={{ backgroundColor: "#F5EBE0" }}>
        <Grid
          container
          wrap="nowrap"
          spacing={2}
          direction="column"
          alignItems="center"
          mt="10px"
        >
          <Grid item>
            <Avatar>{props.title}</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{props.content}</Typography>
          </Grid>
        </Grid>
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
      </Box>
    </div>
  );
}
export default Notes;
