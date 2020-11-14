# color-picker-iro.js-in-ionic
integrate iro.js color picker in Ionic 5


Hello, below I will explain my second attempt which worked:
I have took inspiration form this video
https://www.youtube.com/watch?v=SSbOK6zzU9I&list=LL&index=3

- in the index.html file add:

  ` <script src="https://cdn.jsdelivr.net/npm/@jaames/iro@5"></script>`
   
- in your assets folder create a folder called js in this folder place the file externaljsfile.js
  
  in your home.page.ts add
  
  `import { Component, OnInit } from '@angular/core';`
  
 - create the variable
 
 ` declare var ExternalJSFileFunction; `
 
- make sure your you implement OnInit
  
  `export class HomePage implements OnInit `
  
 - make the ngOnInit() function
   
   ` ngOnInit(){ `
   `  ExternalJSFileFunction(); } `
  
  - add the CDN link in the page index.html
  
      `<script src="https://cdn.jsdelivr.net/npm/@jaames/iro@5"></script> `
