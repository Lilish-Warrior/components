import { Component, Host, State, h } from '@stencil/core';

@Component({
  tag: 'search-bar',
  styleUrl: 'search-bar.css',
  shadow: true,
})
export class SearchBar {
  @State() input: string;

  setInput(event: any) {
    const setInput = event.target.value;
    console.log(setInput);
  }

  render() {
    return (
      <Host>
        <div class="input-wrapper">
          <input type="text" placeholder="Type to search..." value={this.input} onChange={e => this.setInput(e)} />
        </div>
      </Host>
    );
  }
}
