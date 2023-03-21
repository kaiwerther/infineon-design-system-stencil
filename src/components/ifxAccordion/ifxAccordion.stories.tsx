// accordion.stories.ts
import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';

const AccordionTemplate = () => html`
  <accordion-wrapper>
    <accordion-item title="Item 1">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam
        bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque. Duis tincidunt massa
        non metus commodo, id bibendum nisl pellentesque. Vivamus eu eros vel enim fringilla
        lobortis. Nulla facilisi. Donec tincidunt vulputate purus a lacinia. Nam euismod aliquam
        metus, ut suscipit dui viverra ut. Sed quis massa ac lacus aliquet ullamcorper. Fusce at
        metus imperdiet, porttitor metus ut, varius dolor. Curabitur fermentum sodales volutpat.
      </p>
    </accordion-item>
    <accordion-item title="Item 2">
      <p>
        Fusce sit amet libero nec nisi euismod tincidunt. Morbi consequat elit vel tortor fermentum
        interdum. Nullam vitae semper justo, et gravida enim. Quisque auctor nunc odio, vel cursus
        purus ullamcorper nec. Mauris et leo in ligula fermentum iaculis. Integer tempor ante ac
        mauris feugiat, ac vestibulum metus fringilla. In in metus turpis. Etiam eu purus euismod,
        vehicula sapien eget, bibendum sapien. Integer ultricies nisl in odio gravida, eget
        bibendum neque lacinia. Sed elementum velit ligula, a lacinia odio ullamcorper in.
      </p>
    </accordion-item>
    <accordion-item title="Item 3">
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Cras malesuada, urna vel vestibulum sollicitudin, ipsum diam egestas nisl, non
        consequat sapien odio id ipsum. Nunc semper congue est ut pharetra. Vivamus ullamcorper
        turpis nec justo condimentum, ut porttitor velit aliquet. Sed luctus odio in nulla
        fermentum, vitae placerat velit feugiat. Phasellus nec libero quis lectus ultricies
        interdum. Pellentesque veh
        ula lacus et odio malesuada, vitae mollis libero consequat. In eleifend turpis at ipsum
        aliquet, in bibendum enim fermentum. Nulla facilisi. In tempor, odio eu ullamcorper
        consequat, nulla mi congue dui, a lacinia ligula sapien in enim. Morbi luctus facilisis
        mauris, in fermentum magna laoreet vel.
      </p>
    </accordion-item>
      </accordion-wrapper>
    `;
    export default {
    title: 'Accordion',
    component: 'accordion-wrapper',
    };
    
    export const Accordion = AccordionTemplate.bind({});
    Accordion.args = {};