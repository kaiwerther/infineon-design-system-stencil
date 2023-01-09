import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'ifx-button',
  styleUrl: '../../index.scss',
  shadow: false,
})

export class Button {
  @Prop() label: string;
  @Prop() variant: 'solid' | 'outline' | 'outline-text';
  @Prop() color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
  @Prop() size: 's' | 'm' | 'btn-s' | "";
  @Prop() disabled: string | boolean;
  @Prop() icon: boolean;
  @Prop() classString: string;

  render() {
    const variantClass =
      `${this.variant}` === "outline"
        ? `outline-${this.color}`
        : `${this.variant}` === 'outline-text'
          ? 'outline-text'
          : `${this.color}`;

    const sizeClass =
      `${this.size}` === "s"
        ? "btn-s"
        : "";

    return (
        <button class={
        `btn ${this.classString}
        btn-${variantClass}
        ${sizeClass ? sizeClass : this.size}
        ${this.disabled ? 'disabled' : ''}`
      }
        type="button"
      >
        <slot />
        {this.icon ? 'icon' : ''}
        {this.label}
      </button>
    );
  }
}
