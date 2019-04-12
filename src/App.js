import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header';
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
    
    let search = this.state.search;
    const url= `https://api.themoviedb.org/3/search/movie?api_key=${KEY.key}&language=en-US&query=${search}&include_adult=false`;
    
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

  async onSearchChange(event) {
    event.preventDefault();
    await this.setState({search: event.target.value}); // will we need to wait for state to set asyncronous dom diffing...
    this.initialLoad();
  }
  
  render() {
    
    const listing = this.state.data.map((item) => {

      return (
          <div className="card" key={item.id}>
            <div className="card-header">
              <h2>{item.title}</h2>
              <h5>{item.release_date}</h5>
            </div>
            <div className="card-body">
              <img src={`${this.state.base_url}${this.state.poster_sizes[1]}${item.poster_path}`} alt={`${item.name} poster`} />
              <p>{item.overview}</p>
            </div>
            <div className="card-footer">
              <p>{item.vote_average} - {item.vote_count}</p>
            </div>
          </div>
      );
    });

    return (
      <Fragment>
        <Header onSearchChange={this.onSearchChange}/>
        {this.state.isLoading && <div>Loading...</div>}
        {listing}
      </Fragment>
    );
  }
}

export default App;
