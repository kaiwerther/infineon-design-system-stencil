// accordion-item.tsx
import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'accordion-item',
  styleUrl: 'accordion-item.css',
  shadow: true,
})
export class AccordionItem {
  @Prop() title: string;
  @State() open: boolean = false;

  toggleOpen() {
    this.open = !this.open;
  }

  render() {
    return (
      <div class={`accordion-item ${this.open ? 'open' : ''}`} onClick={() => this.toggleOpen()}>
        <div class="accordion-title">
          <h3>{this.title}</h3>
          <span class="accordion-icon">{this.open ? '-' : '+'}</span>
        </div>
        <div class="accordion-content">
          <slot />
        </div>
      </div>
    );
  }
}
