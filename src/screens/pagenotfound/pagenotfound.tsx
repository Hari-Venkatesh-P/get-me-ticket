import Grid from "@mui/material/Grid";

export default function PageNotFound() {
  return (
    <div>
      <Grid
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "90vh",
        }}
        container
        spacing={0}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <h2 style={{ color: "red" }}> 404 Page Not Found</h2>
        </div>
        <Grid item xs={5}></Grid>
      </Grid>
    </div>
  );
}
