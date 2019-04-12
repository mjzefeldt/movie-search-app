import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import KEY from './secret';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      current_page: null,
      total_pages: null,
      total_results: null,
      isLoading: false,
      search: '',
      isError: null,
      base_url: '',
      poster_sizes: []
    }
    this.initialLoad = this.initialLoad.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  async componentDidMount() {
    const key = KEY.key;
    const api_config_url = `https://api.themoviedb.org/3/configuration?api_key=${key}`;

    const { data } = await axios.get(api_config_url);
    this.setState({
      base_url: data.images.base_url,
      poster_sizes: data.images.poster_sizes
    });
  }

  async initialLoad() {     
    this.setState({isLoading: true});
    
    if (this.state.search === '') {
      this.setState({
        data: [], 
        current_page: null, 
        total_pages: null,
        total_results: null, 
        isLoading: false
      });
    } else {
      const url= `https://api.themoviedb.org/3/search/movie?api_key=${KEY.key}&language=en-US&query=${this.state.search}&include_adult=false`;
      
      try {
        const result = await axios.get(url);
        const data = result.data;
        console.log(data, '<<< data in initial load');
        console.log(result, '<<< header');
        console.log(data.total_results, '<<< total results'); 
        // data.results is movie info
        // data. hits and page would be used for pagination
        this.setState({
          data: data.results, 
          current_page: data.page, 
          total_pages: data.total_pages,
          total_results: data.total_results, 
          isLoading: false
        });
      } catch(err) { 
        this.setState({isError: err, isLoading: false});
      }
    }
  }

  async onSearchChange(event) {
    event.preventDefault();
    await this.setState({search: event.target.value}); // will we need to wait for state to set asyncronous dom diffing...
    this.initialLoad();
  }
  
  render() {
    
    if (this.state.isError) {
      return <p>{this.state.isError.message}</p>
    }

    return (
      <Fragment>
        <Header onSearchChange={this.onSearchChange}/>
        <Main
            list={this.state.data} 
            base_url={this.state.base_url}
            poster_size={this.state.poster_sizes[1]}
        />
        <Loader isLoading={this.state.isLoading} />
      </Fragment>
    );
  }
}

export default App;
