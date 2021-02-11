import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @ViewChild('Modal') Modal: ElementRef;
  @Output() save = new EventEmitter();
  constructor(private modalService: NgbModal,) { }

  ngOnInit(): void {
  }
  open() {
    this.modalService.open(this.Modal);
  }
  close() {
    this.modalService.dismissAll();
  }
}
