function randomColor(){
    let color = ['red', 'blue', 'black', 'yellow', 'orange', 'green'];
    let rand = Math.round(6*Math.random());
    let clr = color[rand];
    const str = document.querySelector('body');
    str.style.backgroundColor = clr;
}