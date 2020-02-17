class Colorize {
  constructor(colorScheme) {
  this.colorScheme = colorScheme;
  };

 paint() {
   let gradient; 
   let mainColor; 

    if (this.colorScheme === 'plum') {
      gradient = 'to bottom, #271550, #2F0743, #440950';
      mainColor = '#271550';
   } else if (this.colorScheme === 'peach') {
     gradient = 'to top, #feb47b, #ff7e5f';
     mainColor = '#feb47b';
   } else if (this.colorScheme === 'navy') {
     gradient = 'to bottom, #0f0c29, #302b63, #24243e';
     mainColor = '#0f0c29';
   } else if (this.colorScheme === 'babyBlue') {
     gradient = 'to bottom, #1c92d2, #f2fcfe';
     mainColor = '#1c92d2';
   } else if (this.colorScheme === 'slate') {
     gradient = 'to bottom, #232526, #232526, #5f6264';
     mainColor = '#232526';
   } else if (this.colorScheme === 'heather') {
     gradient = 'to bottom, #8f9192, #b6b9bb, #ffffff';
     mainColor = '#8f9192';
   }

   document.querySelector('body').style =
   `  
    color: #726361;
    font-size: 1.4rem;
    height: 100vh;
    overflow: hidden;

    background: ${mainColor};
    background: -webkit-linear-gradient(${gradient});
    background: linear-gradient(${gradient});
   `;
 }
}