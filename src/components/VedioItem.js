import React from 'react'
import { Grid, Paper, Typography } from "@material-ui/core";

export default function VedioItem({vedio,onVideoSelect}) {
  return (
    <Grid item xs={12}>
      <Paper style={{alignItems:'center',cursor:'pointer'}} onClick={()=> onVideoSelect(vedio)}>
        <img style={{marginRight:'20px'}} alt="thumbnail" src={vedio.snippet.thumbnails.medium.url} />
        <Typography variant="subtitle1"> <b>{vedio.snippet.title}</b></Typography>
      </Paper>
    </Grid>
  );
}
