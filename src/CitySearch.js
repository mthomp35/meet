//needed: collapse menu when mouseclick outside of box; make sure error text can be seen when suggestion box is open; update general layout
import React, { Component } from 'react';
import Select from 'react-select';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
  state = {
    activeIndex: 0,
    query: '',
    suggestions: [],
    showSuggestions: false,
    infoText: ''
  }

  componentDidMount() {
    window.addEventListener("keyup", (e) => {
      if (!this.state.showSuggestions) return;
      if (!['ArrowUp', 'ArrowDown', 'Space', 'Enter'].includes(e.code)) return;
       e.preventDefault();
        
       if (e.code === 'ArrowDown') {
        this.setState({
          activeIndex: (this.state.activeIndex + 1 >= this.state.suggestions.length) ? 0 : this.state.activeIndex + 1}); 
        } else if (e.code === 'ArrowUp') {
          this.setState({
            activeIndex: (this.state.activeIndex === 0) ? this.state.suggestions.length - 1 : this.state.activeIndex - 1});
        } else {
            this.handleItemClicked(this.state.suggestions[this.state.activeIndex]);
        }
    })
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({ 
        query: value,
        infoText: 'Oh no! We cannot find the city you are looking for. Please check the spelling or try entering a different city.',
      });
    } else {
      return this.setState({
        showSuggestions: true,
        query: value,
        suggestions,
        infoText: ''
      });
    }
  }

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
      infoText: ''
    });

    this.props.updateEvents(suggestion);
  }

  render() {
    return (
      <div className='CitySearch'>
        <b>Select a City to View Events:</b>
        <div>
          <InfoAlert text={this.state.infoText} />
        </div>
        <div className='CitySuggestions'>
          <input
            type='text'
            className='city'
            placeholder='All Cities'
            value={this.state.query}
            onChange={this.handleInputChanged}
            onFocus={() => { this.setState({ showSuggestions: true }) }}
          />
          <ul className='suggestions' style={this.state.showSuggestions ? {}: { display: 'none' }}>
             {this.state.suggestions.map((suggestion, i) => (
              <li 
                key={i}
                onClick={() => this.handleItemClicked(suggestion)}
              >{suggestion}</li>
            ))}
            <li 
              key='All Cities'
              onClick={() => this.handleItemClicked('All Cities')}
            >
              <b>See All Cities</b>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CitySearch;