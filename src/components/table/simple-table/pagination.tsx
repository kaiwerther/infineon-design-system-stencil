// components/ifx-pagination/ifx-pagination.tsx
import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'ifx-pagination',
  styleUrl: 'pagination.scss',
  shadow: true
})
export class IfxPagination {

  @Prop() currentPage: number;
  @Prop() entriesSize: number;
  @Prop() pageSize: number = 10;
  @Prop() pageSizes: number[] = [5, 10, 20, 50];
  @Event() pageChanged: EventEmitter;
  @Event() pageSizeChanged: EventEmitter;

  @State() maxPageButtons: number = 9;


  getTotalPages() {
    return Math.ceil(this.entriesSize / this.pageSize);
  }

  componentDidLoad() {
    console.log('yay')
    this.updateMaxPageButtons();
    window.addEventListener('resize', this.updateMaxPageButtons);
  }

  disconnectedCallback() {
    window.removeEventListener('resize', this.updateMaxPageButtons);
  }

  updateMaxPageButtons = () => {
    this.maxPageButtons = window.innerWidth < 768 ? window.innerWidth < 480 ? 3 : 5 : 5;
    console.log(this.maxPageButtons);
  }

  jumpToPage(page: number) {
    if(page >= 1 && page <= this.getTotalPages()) {
      this.pageChanged.emit(page);
    }
  }

  changePageSize(size: number) {
    this.pageSizeChanged.emit(size);
  }

  render() {
    let pages = [...Array(this.getTotalPages()).keys()].map(i => i + 1);
    if(this.getTotalPages() > this.maxPageButtons) {
      if(this.currentPage <= Math.ceil(this.maxPageButtons / 2)) {
        pages = pages.slice(0, this.maxPageButtons);
      } else if(this.currentPage > this.getTotalPages() - Math.ceil(this.maxPageButtons / 2)) {
        pages = pages.slice(-this.maxPageButtons);
      } else {
        pages = pages.slice(this.currentPage - Math.ceil(this.maxPageButtons / 2), this.currentPage + Math.floor(this.maxPageButtons / 2));
      }
    }

    const startEntry = this.pageSize * (this.currentPage - 1) + 1;
    const endEntry = Math.min(this.pageSize * this.currentPage, this.entriesSize);
    

    return (
      <div class="pagination-controls">
        <div class="showing-label">Showing {startEntry} to {endEntry} of {this.entriesSize}</div>
        <select aria-label="Items per page" onChange={(e) => this.changePageSize(Number((e.target as HTMLSelectElement).value))}>
          {this.pageSizes.map(size => (
            <option value={size} selected={this.pageSize === size}>{size}</option>
          ))}
        </select>
        <button class="btn btn-first" onClick={() => this.jumpToPage(1)} disabled={this.currentPage === 1} aria-label="First page">&lt;&lt;</button>
        <button class="btn btn-previous" onClick={() => this.jumpToPage(this.currentPage - 1)} disabled={this.currentPage === 1} aria-label="Previous page">&lt;</button>
        {this.currentPage > Math.ceil(this.maxPageButtons/2) && this.getTotalPages() > this.maxPageButtons && <span>...</span>}
        {pages.map(page => (
          <button
            onClick={() => this.jumpToPage(page)}
            class={{
              'page-button': true,
              'current-page': this.currentPage === page
            }}
            disabled={this.currentPage === page}
            aria-label={`Page ${page}`}
          >
            {page}
          </button>
        ))}
        {this.currentPage < this.getTotalPages() - Math.floor(this.maxPageButtons/2) && this.getTotalPages() > this.maxPageButtons && <span>...</span>}
        <button class="btn btn-next" onClick={() => this.jumpToPage(this.currentPage + 1)} disabled={this.currentPage === this.getTotalPages()} aria-label="Next page">&gt;</button>
        <button class="btn btn-last" onClick={() => this.jumpToPage(this.getTotalPages())} disabled={this.currentPage === this.getTotalPages()} aria-label="Last page">&gt;&gt;</button>
      </div>
    );
  }
}
