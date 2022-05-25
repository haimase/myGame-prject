let timer_var = 30;
let k = 0;
let sqr = 0;
let x = 45;
let y = 45;

let number = 0;

let inter = setInterval(timer, 1000);


function timer(){
    if (k > 0)
    timer_var--;
    
    if (timer_var >= 0)
    document.getElementById('timer').innerHTML = timer_var;
    else {
        document.getElementById('timer').innerHTML = 'Game over'
        clearInterval(inter);

        document.getElementById('square').style.display = 'none';
        document.getElementById('result').style.display = 'block';
        document.getElementById('result_title').style.display = 'block';

        let result = number / 30;
        document.getElementById('score_p').innerHTML = result;


        document.getElementById('square').style.display = 'none';
        document.getElementById('square').style.left = x;
        document.getElementById('square').style.top = y;
    }
}
timer_var = 30;

function beginGame() {
    if (k == 0){
        k++;
        sqr++;
    }


    document.getElementById('start_btn').style.display = 'none';
    document.getElementById('square').style.display = 'block';

    
}

function square(){

    x = Math.random() * (400 - 65);
    y = Math.random() * (400 - 65);
    
    number++; 

    document.getElementById('square').style.left = x + 'px';
    document.getElementById('square').style.top = y + 'px';
}