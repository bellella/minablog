import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenation',
  templateUrl: './pagenation.component.html',
  styleUrls: ['./pagenation.component.scss']
})
export class PagenationComponent {
  @Input() currPage: number = 1;
  @Input() totalCount: number = 0;
  @Input() blockCount: number = 5; // 한 페이지에 보여줄 레코드수
  blockPage: number = 5; // 한 블록에 보여줄 페이지수
  totalPage: number; // 총 페이지수
  startRow: number; // 시작 레코드 번호
  endRow: number; // 끝 레코드번호
  startPage: number; // 한 블록의 시작 페이지 번호
  endPage: number; // 한 블록의 끝페이지 번호

  pageArr = [];
  constructor() { }

  // @Input('totalCount') 
  // set setTotalCount(totalCount) {
  //   this.totalCount = totalCount;
  //   this.pageInit();
  // }

  ngOnInit() {
    //this.pageInit();
  }

  ngOnChanges() {
    this.pageInit();
  }

  clickPage(index) {
    this.currPage = index;
    this.pageInit();
  }

  pageInit() {
    window.scroll(0, 0);
    // 시작레코드
    this.startRow = ((this.currPage - 1) * this.blockCount);

    // 끝레코드
    this.endRow = this.startRow + this.blockCount - 1;

    // 총페이지수
    this.totalPage = Math.floor(this.totalCount / this.blockCount + (this.totalCount % this.blockCount == 0 ? 0 : 1));

    // 시작페이지
    this.startPage = Math.floor((this.currPage - 1) / this.blockPage) * this.blockPage + 1;

    // 끝페이지
    this.endPage = this.startPage + this.blockPage - 1;
    if (this.totalPage < this.endPage) {
      this.endPage = this.totalPage;
    }

    //보여주는 페이지 배열
    this.pageArr = Array.from({ length: (this.endPage - this.startPage + 1) }, (_, i) => this.startPage + i);
    console.log(this.startRow, 'startRow')
    console.log(this.endRow, 'endRow')
    console.log(this.totalPage, 'totalPage')
    // console.log(this.startPage,'startPage')
    console.log(this.blockCount, 'blockCount')
  }

  previous() {
    this.currPage = this.startPage - 1;
    this.pageInit();
  }
  next() {
    this.currPage = this.endPage + 1;
    this.pageInit();
  }
}
