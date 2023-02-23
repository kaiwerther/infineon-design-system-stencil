import { Component, Prop, h, Host, Method } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'custom-docs',
  styleUrl: './_custom-docs.scss',
  shadow: true,
})

export class Button {
  @Prop() label: string;
  @Prop() name?: string;
  @Prop() variant?: string = 'solid';
  @Prop() color?: string = 'primary';
  @Prop() size?: 's' | 'm' = 'm';
  @Prop() disabled?: boolean = false;

  @Prop() iconOnly: boolean = false;
  @Prop({ reflect: true }) iconPosition: 'left' | 'right' = 'left';
  @Prop() href?: string;
  @Prop() target?: string = '_self';

  private focusableElement: HTMLElement;

  @Method()
  async setFocus() {
    this.focusableElement.focus();
  }

  render() {
    const basePart = classNames(
      'base',
      this.variant && `variant-${this.variant}`,
      this.color && `color-${this.color}`,
      this.iconOnly && 'icon-only',
      !this.iconOnly && this.iconPosition,
      this.disabled && 'disabled'
    );

    return (
      <Host>
        {this.href ? (
          <a
            ref={(el) => (this.focusableElement = el)}
            class={this.getClassNames()}
            href={this.href}
            target={this.target}
            part={basePart}
            rel={this.target === '_blank' ? 'noopener noreferrer' : undefined}
          >
            <slot />
          </a>
        ) : (
          <button
            ref={(el) => (this.focusableElement = el)}
            class={this.getClassNames()}
            type="button"
            part={basePart}
            name={this.name}
          >
            <slot />
          </button>
        )}
      </Host>
    );
  }



  getVariantClass() {
    return `${this.variant}` === "outline"
      ? `outline-${this.color}`
      : `${this.variant}` === 'outline-text'
        ? `${this.color}-outline-text`
        : `${this.color}`;
  }

  getSizeClass() {
    return `${this.size}` === "s"
      ? "s"
      : "";
  }

  getClassNames() {
    return classNames(
      'btn',
      this.size && `btn-${this.getSizeClass()}`,
      `btn-${this.getVariantClass()}`,
      this.iconOnly && `btn-icon-only`,
      !this.iconOnly &&
      this.iconPosition &&
      `btn--icon-${this.iconPosition}`,
      this.disabled ? 'disabled' : ''
    );
  }
}