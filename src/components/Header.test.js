import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header Component', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('renders site title and search input field', () => {
      const wrapper = shallow(<Header />);
      const title = <h1>Movie Search App</h1>;
    
      expect(wrapper.contains(title)).toEqual(true);
      expect(shallow(<Header />).find('#movie-search').exists()).toBe(true)
      expect(shallow(<Header />).find('#movie-search').length).toEqual(1)
    });

});
