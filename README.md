# color-picker-iro.js-in-ionic
integrate iro.js color picker in Ionic 5


Hello,
Just visit the page https://iro.js.org/guide.html to see this beatiful color picker

- open CMD
- navigate in the folder of your app and install it 

`npm install @jaames/iro --save`

- make sure that in the app folder node_modules  the folder @jaames is there

In the home.page.js file
- import the module

`import iro from '@jaames/iro'; `

- in my case I needed to integrate in the homepage in ngOnInit() function so add this line of code

`export class HomePage implements OnInit `

- insert the ngOnInit() function

`ngOnInit(){
 //place the code for the JavaScript code of the colour picker here
 }`
 
 In the home.page.html add the code:
 
 `<div id="picker"></div> `
 

