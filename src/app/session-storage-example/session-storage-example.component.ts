import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-storage-example',
  templateUrl: './session-storage-example.component.html',
  styleUrls: ['./session-storage-example.component.css']
})
export class SessionStorageExampleComponent implements OnInit {
  //Stop doing undo

  stringItem: string;
  numberItem: number;
  sessionStorageItemValues: string[];
  constructor() { }

  ngOnInit() {
  }

  saveStringInSessionStorage() {
    sessionStorage.setItem('string-item', this.stringItem);
  }

  saveNumberInSessionStorage() {
    sessionStorage.setItem('number-item', JSON.stringify(this.numberItem));
  }

  removeFromSessionStorageByKey(item: string) {
    sessionStorage.removeItem(item);
  }

  showAllSessionStorageItems() {
    this.sessionStorageItemValues = new Array();
    var keys = Object.keys(sessionStorage),
      i = keys.length;
    while (i--) {
      this.sessionStorageItemValues.push(sessionStorage.getItem(keys[i]));
    }
    // return values;
  }

  clearSessionStorage() {
    sessionStorage.clear();
  }
}
