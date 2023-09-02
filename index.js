const h1 = document.querySelector('h1');
const paragraph = document.querySelector('.quote');
const button = document.querySelector('button');

const getAdvice=function(){
    fetch("https://api.adviceslip.com/advice").then((response)=>{
        return response.json();
    }).then((data)=>{
        paragraph.textContent=data.slip.advice;
        h1.textContent=`Advice #${data.slip.id}`;
    })
}
button.addEventListener('click',getAdvice);
// button.addEventListener('click',logJSONData);
