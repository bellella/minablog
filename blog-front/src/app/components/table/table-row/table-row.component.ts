import { Component, ContentChild, ElementRef, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {
  @Input()
  public title: string = '';
  @Input()
  public type: string = '';
  @Input()
  public width: number = 0;
  @Input()
  public row;
  @Input()
  public data;
  @Input()
  public val: any;
  @ContentChild('column') column: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
    
  }
}
