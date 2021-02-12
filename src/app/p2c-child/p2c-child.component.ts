import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-p2c-child',
  templateUrl: './p2c-child.component.html',
  styleUrls: ['./p2c-child.component.css']
})
export class P2cChildComponent implements OnInit {
  // Below code is commented for Associate's reference
  //@Input() public parentData: string;
  @Input('parentData') public name: string;
  constructor() { }

  ngOnInit() {
  }

}
