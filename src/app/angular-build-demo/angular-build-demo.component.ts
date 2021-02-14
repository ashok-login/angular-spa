import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-angular-build-demo',
  templateUrl: './angular-build-demo.component.html',
  styleUrls: ['./angular-build-demo.component.css']
})
export class AngularBuildDemoComponent implements OnInit {
  environmentName = environment.name;
  constructor() { }

  ngOnInit() {
  }

}
