import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef } from '@angular/core';
import { TableRowComponent } from './table-row/table-row.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() public dataList: any[];
  @Input() public selectedId: number | string;
  @Input() public pageCount: number;
  @Output() public rowSelect = new EventEmitter();
  @ContentChildren(TableRowComponent) rows: QueryList<TableRowComponent>;


  public titles = [];
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit() {
    this.titles = this.rows.map(r => {
      return r.title;
    })
  }
  public getVal(data, val: any) {
    if(typeof val === 'string') {
      return data[val];
    }
    let list = val as any[];
    let value;   
    list.forEach(l => {
      if(value) {
        value = value[l];
      } else {
        value = data[l];
      }
    });
    return value;
  }

}
