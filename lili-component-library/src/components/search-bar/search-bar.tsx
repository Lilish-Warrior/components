import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'search-bar',
  styleUrl: 'search-bar.css',
  shadow: true,
})
export class SearchBar {
  @State() input: string;
  @State() results: any;

  componentWillLoad() {
    this.results = [{ name: 'lili' }];
  }

  setInput(inputValue: any) {
    this.input = inputValue;
  }

  setResults(resultArray: []) {
    this.results = resultArray;
  }

  fetchData = (value: any) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        const results = json.filter(user => {
          return value && user && user.name && user.name.toLowerCase().includes(value.toLowerCase());
        });
        console.log(results);
        this.setResults(results);
      });
  };

  handleChange(inputReceived: any) {
    const inputValue = inputReceived.target.value;
    this.setInput(inputValue);
    this.fetchData(inputValue);
  }

  render() {
    return (
      <Host>
        <div class="input-wrapper">
          <input type="text" placeholder="Type to search..." value={this.input} onChange={e => this.handleChange(e)} />
          {this.results &&
            this.results.map(result => {
              <div>{result.name}</div>;
            })}
        </div>
      </Host>
    );
  }
}
