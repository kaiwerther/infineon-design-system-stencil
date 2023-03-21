import { Component, Prop, h, State, Event, EventEmitter, Method } from '@stencil/core';

@Component({
  tag: 'ifx-accordion-item',
  styleUrl: 'ifxAccordionItem.scss',
  shadow: true,
})
export class IfxAccordionItem {
  @Prop() caption: string;
  @State() open: boolean = false;
  @Event() itemOpened: EventEmitter;
  @Event() itemClosed: EventEmitter;

  toggleOpen() {
    this.open = !this.open;
    if (this.open) {
      this.itemOpened.emit();
    } else {
      this.itemClosed.emit();
    }
  }

  @Method()
  async close() {
    this.open = false;
    this.itemClosed.emit();
  }

  @Method()
  async isOpen(): Promise<boolean> {
    return this.open;
  }

  render() {
    return (
      <div class={`accordion-item ${this.open ? 'open' : ''}`} onClick={() => this.toggleOpen()}>
        <div class="accordion-title">
          <span class="accordion-icon">▶</span>
          <span class="accordion-caption">{this.caption}</span>
        </div>
        {this.open && (
          <div class="accordion-content">
            <slot />
          </div>
          )
        }
      </div>
    );
  }
}
