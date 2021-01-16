import React from "react";
import { Paper, Typography } from "@material-ui/core";

export default function VideoDetail({ vedio }) {
  if(!vedio) return <div>Loading ........</div>
   console.log(vedio.id.videoId);
  const vedioSrc = `https://www.youtube.com/embed/${vedio.id.videoId}`
  return (
    <React.Fragment>
      <Paper elevation={6} style={{ height: "23%" }}>
        <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          title="Vedio player"
          src={vedioSrc}
        />
      </Paper>
      <Paper elevation={6} style={{ height: "auto" }}>
        <Typography variant="h4">{vedio.snippet.title} - {vedio.snippet.channelTitle} </Typography>
        <Typography variant="subtitle2">{vedio.snippet.channelTitle} </Typography>
        <Typography variant="subtitle3">{vedio.snippet.description} </Typography>
        {/* <Typography variant="subtitle2">{vedio.snippet.title}</Typography> */}
      </Paper>
    </React.Fragment>
  );
}
