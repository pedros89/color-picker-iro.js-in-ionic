

function ExternalJSFileFunction(){
    

    var colorPicker = new iro.ColorPicker('#picker', {
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
