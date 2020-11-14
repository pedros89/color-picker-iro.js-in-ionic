# color-picker-iro.js-in-ionic
integrate iro.js color picker in Ionic 5


Hello,

The procedure shown below only if you have your app runnning but if you restart your app it will not work anymore.
Iwill keep it just for the record

Just visit the page https://iro.js.org/guide.html to see this beatiful color picker

- open CMD if you are on Windows
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
 //place the code for an extenal data
 }`
 
 In the home.page.html add the code:
 
 `<div id="picker"></div> `
 

