/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IfxButton {
        "classString": string;
        "color": 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
        "disabled": boolean;
        "icon": boolean;
        "label": string;
        "size": 's' | 'm';
        "type": string;
        "variant": 'solid' | 'outline' | 'outline-text';
    }
    interface IfxCard {
        "button": boolean;
        "headline": string;
        "list": boolean;
        "skyline": boolean;
        "text": string;
    }
    interface IfxDropdown {
        "disabled": boolean;
        "filter": boolean;
        "icon": boolean;
        "label": string;
        "search": boolean;
        "size": 's' | 'm';
    }
    interface IfxInput {
        "classString": string;
        "id": string;
        "placeholder": string | number;
        "type": string;
        "value": string | number;
    }
    interface IfxSelect {
        "classString": string;
    }
    interface InfineonIconStencil {
        "icon": any;
    }
}
declare global {
    interface HTMLIfxButtonElement extends Components.IfxButton, HTMLStencilElement {
    }
    var HTMLIfxButtonElement: {
        prototype: HTMLIfxButtonElement;
        new (): HTMLIfxButtonElement;
    };
    interface HTMLIfxCardElement extends Components.IfxCard, HTMLStencilElement {
    }
    var HTMLIfxCardElement: {
        prototype: HTMLIfxCardElement;
        new (): HTMLIfxCardElement;
    };
    interface HTMLIfxDropdownElement extends Components.IfxDropdown, HTMLStencilElement {
    }
    var HTMLIfxDropdownElement: {
        prototype: HTMLIfxDropdownElement;
        new (): HTMLIfxDropdownElement;
    };
    interface HTMLIfxInputElement extends Components.IfxInput, HTMLStencilElement {
    }
    var HTMLIfxInputElement: {
        prototype: HTMLIfxInputElement;
        new (): HTMLIfxInputElement;
    };
    interface HTMLIfxSelectElement extends Components.IfxSelect, HTMLStencilElement {
    }
    var HTMLIfxSelectElement: {
        prototype: HTMLIfxSelectElement;
        new (): HTMLIfxSelectElement;
    };
    interface HTMLInfineonIconStencilElement extends Components.InfineonIconStencil, HTMLStencilElement {
    }
    var HTMLInfineonIconStencilElement: {
        prototype: HTMLInfineonIconStencilElement;
        new (): HTMLInfineonIconStencilElement;
    };
    interface HTMLElementTagNameMap {
        "ifx-button": HTMLIfxButtonElement;
        "ifx-card": HTMLIfxCardElement;
        "ifx-dropdown": HTMLIfxDropdownElement;
        "ifx-input": HTMLIfxInputElement;
        "ifx-select": HTMLIfxSelectElement;
        "infineon-icon-stencil": HTMLInfineonIconStencilElement;
    }
}
declare namespace LocalJSX {
    interface IfxButton {
        "classString"?: string;
        "color"?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
        "disabled"?: boolean;
        "icon"?: boolean;
        "label"?: string;
        "size"?: 's' | 'm';
        "type"?: string;
        "variant"?: 'solid' | 'outline' | 'outline-text';
    }
    interface IfxCard {
        "button"?: boolean;
        "headline"?: string;
        "list"?: boolean;
        "skyline"?: boolean;
        "text"?: string;
    }
    interface IfxDropdown {
        "disabled"?: boolean;
        "filter"?: boolean;
        "icon"?: boolean;
        "label"?: string;
        "search"?: boolean;
        "size"?: 's' | 'm';
    }
    interface IfxInput {
        "classString"?: string;
        "id"?: string;
        "placeholder"?: string | number;
        "type"?: string;
        "value"?: string | number;
    }
    interface IfxSelect {
        "classString"?: string;
    }
    interface InfineonIconStencil {
        "icon"?: any;
    }
    interface IntrinsicElements {
        "ifx-button": IfxButton;
        "ifx-card": IfxCard;
        "ifx-dropdown": IfxDropdown;
        "ifx-input": IfxInput;
        "ifx-select": IfxSelect;
        "infineon-icon-stencil": InfineonIconStencil;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ifx-button": LocalJSX.IfxButton & JSXBase.HTMLAttributes<HTMLIfxButtonElement>;
            "ifx-card": LocalJSX.IfxCard & JSXBase.HTMLAttributes<HTMLIfxCardElement>;
            "ifx-dropdown": LocalJSX.IfxDropdown & JSXBase.HTMLAttributes<HTMLIfxDropdownElement>;
            "ifx-input": LocalJSX.IfxInput & JSXBase.HTMLAttributes<HTMLIfxInputElement>;
            "ifx-select": LocalJSX.IfxSelect & JSXBase.HTMLAttributes<HTMLIfxSelectElement>;
            "infineon-icon-stencil": LocalJSX.InfineonIconStencil & JSXBase.HTMLAttributes<HTMLInfineonIconStencilElement>;
        }
    }
}
