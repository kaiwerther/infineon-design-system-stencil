// accordion-wrapper.tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'accordion-wrapper',
  styleUrl: 'accordion-wrapper.css',
  shadow: true,
})
export class AccordionWrapper {
  render() {
    return (
      <div class="accordion-wrapper">
        <slot />
      </div>
    );
  }
}