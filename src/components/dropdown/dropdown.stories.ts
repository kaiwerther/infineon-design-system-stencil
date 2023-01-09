export default {
  title: 'Components/Dropdown',
  args: {
    label: "dropdown",
    size: "m",
    disabled: false,
  },
  argTypes: {
    size: {
      options: ['s', 'm'],
      control: { type: 'radio' },
    }
  }
}

const DefaultTemplate = (args) =>
  `<ifx-dropdown label="${args.label}" size="${args.size}" disabled="${args.disabled}" color="primary"></ifx-dropdown>`;

export const Default = DefaultTemplate.bind({});

const IconTemplate = (args) =>
  `<ifx-dropdown label="${args.label}" size="${args.size}" disabled="${args.disabled}" icon={true} color="secondary"></ifx-dropdown>`;

export const Icon = IconTemplate.bind({})

const SearchTemplate = (args) => 
`<ifx-dropdown label="${args.label}" size="${args.size}" disabled="${args.disabled}" search={true} color="warning"></ifx-dropdown>`;

export const Search = SearchTemplate.bind({})

const FilterTemplate = (args) => 
`<ifx-dropdown label="${args.label}" size="${args.size}" disabled="${args.disabled}" filter={true} color="danger"></ifx-dropdown>`;

export const Filter = FilterTemplate.bind({})