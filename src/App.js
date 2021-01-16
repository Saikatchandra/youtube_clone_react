import React from "react";
//  not default export thats why we use {} here
import { Grid } from "@material-ui/core";

import { SearchBar, VideoList, VideoDetail } from "./components";

// import SearchBar from './components/SearchBar';
// import VideoDetail from './components/VideoDetail';
// import VideoList from './components/VideoList';

//  default export thats why we dont need use {} here
import youtube from "./api/youtube";

class App extends React.Component {
  state = {};

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyAF7ZKlrPGqp2FdOTeaHG6MKlL21H58-44',
        q:searchTerm
       }
     });
    console.log('search res data',response);
  };

  render() {
    return (
      <Grid container justify="center" spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail />
            </Grid>
            <Grid item xs={4}>
              <VideoList />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
