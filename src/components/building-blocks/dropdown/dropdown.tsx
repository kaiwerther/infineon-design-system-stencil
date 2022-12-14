import { Component, Prop, h, Element } from "@stencil/core";
import { calendar16 } from '@infineon/infineon-icons';

@Component({
  tag: 'ifx-dropdown',
  styleUrl: '../../../index.scss',
  shadow: true
})

export class Dropdown {

  @Prop() label: string;
  @Prop() size: 's' | 'm';
  @Prop() disabled: boolean;
  @Prop() icon: boolean = false;
  @Prop() search: boolean = false;
  @Prop() filter: boolean = false;
  @Element() el;

  getDropdownMenu() { 
    const dropdownMenu = this.el.shadowRoot.querySelector('.dropdown-menu');
    return dropdownMenu
  }

  getDropdownWrapper() { 
    const dropdownWrapper = this.el.shadowRoot.querySelector('.dropdown');
    return dropdownWrapper
  }

  handleClassList(el, type, className) { 
    el.classList[type](className)
  }

  toggleDropdownMenu() {
    const dropdownMenu = this.getDropdownMenu();
    const dropdownWrapper = this.getDropdownWrapper()
    this.handleClassList(dropdownMenu, 'toggle', 'show')
    this.handleClassList(dropdownWrapper, 'toggle', 'show')
  }

  closeDropdownMenu() { 
    const dropdownMenu = this.getDropdownMenu()
    const dropdownWrapper = this.getDropdownWrapper()
    this.handleClassList(dropdownMenu, 'remove', 'show')
    this.handleClassList(dropdownWrapper, 'remove', 'show')
  }

  removeActiveMenuItem() { 
    const dropdownMenuItems = this.el.shadowRoot.querySelectorAll('.dropdown-item');
    for(let i = 0; i < dropdownMenuItems.length; i++) { 
      this.handleClassList(dropdownMenuItems[i], 'remove', 'active')
    }
  }

  addActiveMenuItem = (e) => {
    if(typeof e.target.className !== 'string') return;
    if(e.target.className.includes('dropdown-menu')) return;

    if(e.target.className.toLowerCase() === 'inf__dropdown-search' 
    || e.target.className.toLowerCase() === 'inf__dropdown-select') { 
      return;
    }

    if(this.filter) {
      const input = e.target.querySelector('input')
      if(input) {
        input.checked = !input.checked
      }
      return;
    }
    
    this.removeActiveMenuItem()
    if(e.target.className === 'form-check-label') { 
      this.handleClassList(e.target.parentElement, 'add', 'active')
    } else this.handleClassList(e.target, 'add', 'active')
 
    this.toggleDropdownMenu()
  }

  handleOutsideClick(e) { 
    if(e.target.tagName.toLowerCase() === 'html') { 
      this.closeDropdownMenu()
    } else return;
  }

  addEventListeners() { 
    const dropdownMenu = this.el.shadowRoot.querySelector('.dropdown-menu');
    document.addEventListener('click', this.handleOutsideClick.bind(this))
    dropdownMenu.addEventListener('click', this.addActiveMenuItem)
  }
  
  componentDidRender() {
   this.addEventListeners()
  }
  
  render() { 

    const sizeClass =
      `${this.size}` === "s"
      ? "btn-s"
      : "";

    return(
      <div class='dropdown'>
        <ifx-button onClick={this.toggleDropdownMenu.bind(this)} classString={`dropdown-toggle btn btn-primary ${sizeClass} ${this.disabled ? 'disabled' : ''}`} type="button">{this.label}</ifx-button>
        
        <div class={`dropdown-menu ${this.icon ? 'showIcon' : ""}`}>
          {this.search && <ifx-input classString="inf__dropdown-search" type="search" placeholder="search" />}
          {this.filter && <ifx-select classString='inf__dropdown-select' />}
          <a href="javascript:;" class="dropdown-item">
            {this.filter && <ifx-input type="checkbox" id="checkbox" classString="form-check-input" />}
            {this.icon && <infineon-icon-stencil icon={calendar16}></infineon-icon-stencil>}
            <label htmlFor="checkbox" class="form-check-label">Action Default1</label>
          </a>
          <a href="javascript:;" class="dropdown-item">
            {this.filter && <ifx-input type="checkbox" id="checkbox2" classString="form-check-input" />}
            {this.icon && <infineon-icon-stencil icon={calendar16}></infineon-icon-stencil>}
            <label htmlFor="checkbox2" class="form-check-label">Action Default2</label>
          </a>
          <a href="javascript:;" class="dropdown-item">
            {this.filter && <ifx-input type="checkbox" id="checkbox3" classString="form-check-input" />}
            {this.icon && <infineon-icon-stencil icon={calendar16}></infineon-icon-stencil>}
            <label htmlFor="checkbox3" class="form-check-label">Action Default3</label>
          </a>
          <a href="javascript:;" class="dropdown-item">
            {this.filter && <ifx-input type="checkbox" id="checkbox4" classString="form-check-input" />}
            {this.icon && <infineon-icon-stencil icon={calendar16}></infineon-icon-stencil>}
            <label htmlFor="checkbox4" class="form-check-label">Action Default4</label>
          </a>
        </div>
      </div>
    )
  }
}