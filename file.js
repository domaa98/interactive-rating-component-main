let submit = document.getElementById("btn");
let box = document.querySelector('.second_box');
let one= document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');
let four = document.querySelector('.four');
let five = document.querySelector('.five');
let rate = document.querySelector('.selected_rate');


let rates = [one,two,three,four,five];
let selectedRate;
let finalRate;

rates.map((el)=>{
    el.addEventListener('click',()=>{
        selectedRate = el.innerHTML;
        finalRate = `You selected ${selectedRate} out of 5`;
        rate.append(finalRate);
       
    })
})

submit.addEventListener('click' , ()=>{
    box.style.zIndex = 1;
})