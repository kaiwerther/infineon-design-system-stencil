import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ifx-select',
  styleUrl: '../../../index.scss',
  shadow: false,
})


export class IfxSelect {

  @Prop() classString: string;

  render() {
    return (
      <select class={`${this.classString}`}>
            <option>Sort by</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
    );
  }
}
