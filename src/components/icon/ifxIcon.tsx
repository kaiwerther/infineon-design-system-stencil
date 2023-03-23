//ifxIcon.tsx
import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'ifx-icon-ts',
  styleUrl: 'ifxIcon.scss',
  shadow: true,
})
export class IfxIconTs {
  @Prop() name: string;
  @State() iconRegistry: any;

  async componentWillLoad() {
    const { iconRegistry } = await import('@infineon/infineon-icons');
    this.iconRegistry = iconRegistry;
  }

  render() {
    const icon = this.iconRegistry[this.name];
    console.log("display", icon, this.name);

    if (icon) {
      return <span innerHTML={icon}/>;
    }

    return <span>¿¿</span>;
  }
}