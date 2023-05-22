// components/ifx-simple-table/ifx-simple-table.tsx
import { Component, Prop, State, h } from '@stencil/core';

export type ColumnType = {
  key: string;
  header: string;
  footer: string;
  type: 'number' | 'string';
};

@Component({
  tag: 'ifx-simple-table',
  styleUrl: 'simple-table.scss',
  shadow: true
})
export class IfxSimpleTable {

  @Prop() columns: ColumnType[];
  @Prop() content: any[];
  @Prop() pageSize: number = 10;

  @State() currentPage: number = 1;
  @State() sortedBy: string;
  @State() sortOrder: 'ascending' | 'descending' = 'ascending';

  paginate(content) {
    let start = (this.currentPage - 1) * this.pageSize;
    let end = start + this.pageSize;
    return content.slice(start, end);
  }

  sort(key) {
    if (this.sortedBy === key) {
      this.sortOrder = this.sortOrder === 'ascending' ? 'descending' : 'ascending';
      this.content.reverse();
    } else {
      this.content.sort((a, b) => a[key] > b[key] ? 1 : -1);
      this.sortedBy = key;
      this.sortOrder = 'ascending';
    }
  }

  render() {
    const headers = this.columns.map((column, i) => (
      <th onClick={() => this.sort(column.key)}>
        <div class="header-content">
          <slot name={`header-${i}`}>{column.header}</slot>
          {this.sortedBy === column.key && (this.sortOrder === 'ascending' ? 
            <ifx-icon icon="arrowup16"/> : <ifx-icon icon="arrowdown16"/>)
          }
          {this.sortedBy !== column.key && (
            <ifx-icon class="disabled" icon="arrowdown16"/>)
          }
        </div>
      </th>
    ));

    const footers = this.columns.map((column, i) => (
      <th>
        <slot name={`footer-${i}`}>{column.footer}</slot>
      </th>
    ));

    const rows = this.paginate(this.content).map((row, rowIndex) => (
      <tr>
        {this.columns.map((column, colIndex) => (
          <td class={column.type === 'number' ? 'numeric-cell' : 'text-cell'}>
            <slot name={`content-${colIndex}`} onSlotchange={(e) => e.currentTarget.dispatchEvent(new CustomEvent('columnData', { detail: { row, rowIndex, column, colIndex, value: row[column.key] } }))}>
              {row[column.key]}
            </slot>
          </td>
        ))}
      </tr>
    ));

    return (
      <div>
        <table>
          <thead>
            <tr>{headers}</tr>
          </thead>
          <tbody>{rows}</tbody>
          {this.columns.some((c) => c.footer) && (
            <tfoot>
              <tr>{footers}</tr>
            </tfoot>)
          }
          
        </table>
        <ifx-pagination
          currentPage={this.currentPage}
          entriesSize={this.content.length}
          pageSize={this.pageSize}
          pageSizes={[5, 10, 20, 50]}
          onPageChanged={(e) => { this.currentPage = e.detail; }}
          onPageSizeChanged={(e) => { this.pageSize = e.detail; this.currentPage = 1; }}
        ></ifx-pagination>
      </div>
    );
  }
}
