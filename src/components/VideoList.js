import React from 'react'
import { Grid } from "@material-ui/core";
import VedioItem from './VedioItem'

export default function VideoList({vedios,onVideoSelect}) {
  const listOfVedios = vedios.map((vedio,id)=> <VedioItem onVideoSelect={onVideoSelect} key={id} vedio={vedio} /> )
  return (
    <Grid container spacing={2}>
      {listOfVedios}
    </Grid>
  );
}
