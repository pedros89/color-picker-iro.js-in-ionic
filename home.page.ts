import { Component, OnInit } from '@angular/core';
import iro from '@jaames/iro';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {

  constructor() {}

  ngOnInit(){
    var colorPicker = new iro.ColorPicker("#picker", {       
      layout: [
          { 
          component: iro.ui.Wheel,
          options: {}
          },
      ]
      });  //create the colorpicker with only the color wheel

      colorPicker.on('color:change', function(color) {    //evento quando cambio colore
        // log the current color as a string "rgb(255, 102, 237)"
        var valueRGB = color.rgbString;
        console.log(valueRGB);   
        });

  }

}
