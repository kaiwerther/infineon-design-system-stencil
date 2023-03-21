export default {
  title: 'Components/Tabs',
  component: 'ifx-tabs',
  argTypes: {
    amountOfTabs: { control: 'number' },
    orientation: { control: { type: 'select', options: ['horizontal', 'vertical'] } },
  },
};

const Template = (args) => {
  const tabsElement = document.createElement('ifx-tabs') as HTMLIfxTabsElement;
  tabsElement.setAttribute('orientation', args.orientation);
  const tabsArray = Array.from({ length: args.amountOfTabs }, (_, i) => `Tab ${i + 1}`);
  tabsElement.tabs = tabsArray;
  for (let i = 0; i < args.amountOfTabs; i++) {
    const tabContent = document.createElement('div');
    tabContent.slot = `tab-content-${i}`;
    tabContent.innerHTML = `
      <p>
        Content for Tab #${i + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, ligula eu aliquam bibendum, orci nisl cursus ipsum, nec egestas odio sapien eget neque.
      </p>
    `;
    tabsElement.append(tabContent);
  }

  return tabsElement;
};

export const Default = Template.bind({});
Default.args = {
  amountOfTabs: 3,
  orientation: 'horizontal',
};
