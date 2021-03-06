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
  state = {
    vedios: [],
    selectedVedio: null
  };

  onVideoSelect =(vedio)=>{
    this.setState({selectedVedio: vedio})
  }

  handleSubmit = async (searchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyAF7ZKlrPGqp2FdOTeaHG6MKlL21H58-44',
        q:searchTerm
       }
     });
    console.log('search res data',response.data.items);
    this.setState({vedios: response.data.items, selectedVedio: response.data.items[0]})
  };

  render() {
    const {selectedVedio, vedios} = this.state;
    return (
      <Grid container justify="center" spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail vedio={selectedVedio} />
            </Grid>
            <Grid item xs={4}>
              <VideoList vedios={vedios} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
