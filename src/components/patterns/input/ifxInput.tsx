import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ifx-input',
  styleUrl: '../../../index.scss',
  shadow: false,
})


export class IfxInput {

  @Prop() classString: string;
  @Prop() type: string;
  @Prop() placeholder: string | number;
  @Prop() value: string | number;
  @Prop() id: string;

  render() {
    return (
      <input id={`${this.id}`} class={`${this.classString}`} type={`${this.type}`} placeholder={`${this.placeholder}`} />
    );
  }
}
