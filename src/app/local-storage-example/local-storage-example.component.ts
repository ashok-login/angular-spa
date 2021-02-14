import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-storage-example',
  templateUrl: './local-storage-example.component.html',
  styleUrls: ['./local-storage-example.component.css']
})
export class LocalStorageExampleComponent implements OnInit {
  stringItem: string;
  numberItem: number;
  localStorageItemValues: string[];
  constructor() { }

  ngOnInit() {
  }

  saveStringInLocalStorage() {
    localStorage.setItem('string-item', this.stringItem);
  }

  saveNumberInLocalStorage() {
    localStorage.setItem('number-item', JSON.stringify(this.numberItem));
  }

  removeFromLocalStorageByKey(item: string) {
    localStorage.removeItem(item);
  }

  showAllLocalStorageItems() {
    this.localStorageItemValues = new Array();
    var keys = Object.keys(localStorage),
        i = keys.length;
    while ( i-- ) {
      this.localStorageItemValues.push( localStorage.getItem(keys[i]) );
    }
    // return values;
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}
