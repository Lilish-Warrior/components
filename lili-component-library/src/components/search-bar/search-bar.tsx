import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'search-bar',
  styleUrl: 'search-bar.css',
  shadow: true,
})
export class SearchBar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
