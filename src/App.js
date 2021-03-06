import React, { Component, Fragment } from 'react';
import './App.css';
import Main from './components/Main';
import Loader from './components/Loader';
import Pagination from './components/Pagination';
import KEY from './secret';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      current_page: 0,
      total_pages: 0,
      total_results: 0,
      isLoading: false,
      search: '',
      isError: null,
      base_url: '',
      poster_sizes: []
    }
  }

  async componentDidMount() {
    const api_config_url = `https://api.themoviedb.org/3/configuration?api_key=${KEY.key}`;
    const { data } = await axios.get(api_config_url);
    this.setState({
      base_url: data.images.base_url,
      poster_sizes: data.images.poster_sizes
    });
  }

  initialLoad = async () => {     
    this.setState({isLoading: true}); 
    const url= `https://api.themoviedb.org/3/search/movie?api_key=${KEY.key}&language=en-US&query=${this.state.search}&page=1&include_adult=false`;
    
    try {
      const result = await axios.get(url);
      const data = result.data;
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

  onSearchChange = async (event) => {
    event.preventDefault();
    await this.setState({search: event.target.value}); // need to wait for state to set re async dom diffing...
    
    if (this.state.search === '') { // reset local state
      this.setState({isLoading: true});
      this.setState({
        data: [], 
        current_page: 0, 
        total_pages: 0,
        total_results: 0, 
        isLoading: false,
        isError: null,
      });
    } else { // load data based on search text change
      this.initialLoad();
    }
    
  }

  onPageChange= async (data) => {
    const page = parseInt(data.selected, 10) + 1;
    
    if (page !== this.current_page) {
      this.setState({isLoading: true}); 
      const url= `https://api.themoviedb.org/3/search/movie?api_key=${KEY.key}&language=en-US&query=${this.state.search}&page=${page.toString()}&include_adult=false`;
      
      try {
        const result = await axios.get(url);
        const data = result.data; 
        this.setState({
          data: data.results, 
          current_page: data.page, 
          isLoading: false
        });
      } catch(err) { 
        this.setState({isError: err, isLoading: false});
      }
    }
  }
  
  render() {
    
    if (this.state.isError) {
      return <p>{this.state.isError.message}</p>
    }

    return (
      <Fragment>
        <Main
          onSearchChange={this.onSearchChange}
          list={this.state.data} 
          base_url={this.state.base_url}
          poster_size={this.state.poster_sizes[1]}
          search={this.state.search}
        />
        <Loader isLoading={this.state.isLoading} />
        <Pagination 
          total_pages={this.state.total_pages}
          current_page={this.state.current_page}
          onPageChange={this.onPageChange}
          total_results={this.state.total_results}
        />
        <footer>
          <div>
            <p>Created by MJ Zefeldt for Pearachute</p>
            <p>Thank you for your consideration!</p>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default App;
