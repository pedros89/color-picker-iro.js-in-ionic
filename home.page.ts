import { Component, OnInit } from '@angular/core';
import iro from '@jaames/iro';


declare var ExternalJSFileFunction; //daclare my function, pay attention you put this

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {

  public colorPicker=0; //variabile accessibile da ovunque colorPicker
  constructor() {}

  ngOnInit(){
    ExternalJSFileFunction();
  }

}

