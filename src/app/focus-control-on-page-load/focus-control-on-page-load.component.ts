import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-focus-control-on-page-load',
  templateUrl: './focus-control-on-page-load.component.html',
  styleUrls: ['./focus-control-on-page-load.component.css']
})
export class FocusControlOnPageLoadComponent implements OnInit, AfterViewInit {

  @ViewChild('nameRef', { static: false }) nameElementRef: ElementRef;

  constructor() { }
  ngAfterViewInit(): void {
    this.nameElementRef.nativeElement.focus();
  }

  ngOnInit() {
  }
}
