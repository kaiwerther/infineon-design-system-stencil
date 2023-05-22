// ifx-simple-table.stories.js

export default {
  title: 'Components/IfxSimpleTable',
  component: 'ifx-simple-table',
  argTypes: {
    amountOfRows: { name: 'Amount of Rows', control: 'number' },
    amountOfColumns: { name: 'Amount of Columns', control: 'number' },
  },
};

const Template = (args) => {
  // Create container to append the component
  const container = document.createElement('div');

  const tableElement = document.createElement('ifx-simple-table');

  // Append the component to the container
  container.appendChild(tableElement);

  // Prepare headers, content and footers
  let columns = [];
  let content = [];

  // Prepare headers and footers
  columns.push({header: 'slot example',  key: 'slot'},
    {header: 'number example', key: 'number'});
  for (let i = 0; i < args.amountOfColumns; i++) {
    columns.push({header: `Header ${i + 1}`, key: `key${i + 1}`});
  }

  // Prepare content
  for (let i = 0; i < args.amountOfRows; i++) {
    let rowContent = {};
    rowContent['slot'] = `Slot {i + 1}`;
    rowContent['number'] = i + 1;
    for (let j = 0; j < args.amountOfColumns; j++) {
      rowContent[`key${j + 1}`] = (`Row ${i + 1} Cell ${j + 1}`);
    }
    content.push(rowContent);
  }

  // Set headers, content and footers after component has been appended
  tableElement.columns = columns;
  tableElement.content = content;

  // Return the container
  return container;
};

export const Default = Template.bind({});
Default.args = {
  amountOfRows: 3,
  amountOfColumns: 3,
};