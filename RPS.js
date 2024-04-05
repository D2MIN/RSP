// ---Function code---

function getResult(userStep,compStep){
    let final = {
        "r s" : "Вы выйграли",
        "r p" : "Вы проиграли",
        "s r" : "Вы проиграли",
        "s p" : "Вы выйграли",
        "p r" : "Вы выйграли",
        "p s" : "Вы проиграли",
    }
    if(final[`${userStep} ${compStep}`] != undefined) return(final[`${userStep} ${compStep}`]);
    else return("Ничья");
};

function getStep(key){
    let steps = {
        '1':'r',
        '2':'s',
        '3':'p',
    };
    return steps[key];
};

function getCompStep(){
    let arr = ['r','s','p'];
    return arr[Math.floor(Math.random()*3)];
};

function getImageCompStep(step){
    let imgStep = {
        'r':'./img/stoun.png',
        'p':'./img/peper.png',
        's':'./img/s.png',
    };
    return imgStep[step];
}

function calcScore(result,score){
    if(result == "Вы выйграли")score[0]+=1;
    if(result == "Вы проиграли")score[1]+=1;
    if(result == "Ничья")score[2]+=1;
};

function getScore(score){
    return `
    <div class="score">
        <p class="win">Побед:${score[0]} </p>
        <p class="los">Поражен:${score[1]} </p>
        <p class="tie">Ничья:${score[2]} </p>
    </div>`;
}
// ---Main code---

let result = document.getElementById('result');
let score = [0,0,0];

document.addEventListener('click', function(event) {
    if(event.target.tagName === 'BUTTON'){
        let compStep = getCompStep();
        let imgUrl = getImageCompStep(compStep); 
        let res = getResult( getStep(event.target.classList.value), compStep );
        calcScore(res,score);

        let html = `<p>Итог: ${res}</p> <img class="botStepImg" src="${imgUrl}" width="200"> ${getScore(score)}`;
        result.innerHTML = html;
    }
  });

window.addEventListener('keydown', (event)=>{
    if( ['1','2','3'].includes(event.key) ){
        let compStep = getCompStep();
        let urlImg = getImageCompStep(compStep);
        let res = getResult(getStep(event.key),compStep);
        calcScore(res,score);
        
        let html = `<p>Итог: ${res}</p> <img class="botStepImg" src="${urlImg}" width="200"> ${getScore(score)}`;
        result.innerHTML = html;
    };
});