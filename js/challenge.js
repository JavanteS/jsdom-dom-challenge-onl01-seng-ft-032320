let pause = document.getElementById('pause')
let count = document.getElementById('counter')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')


function isItmoving(){
    if (pause.innerText == 'pause'){
        return true
    }else{
        return false
    }
}

function pauseIt(){
    if (pause.innerText == 'pause'){
        pause.innerText = 'resume'
    }
    else{
        pause.innerText = 'pause'

    }

    plus.disabled = !isItmoving()
    minus.disabled = !isItmoving()


    //  disable buttons
    // else{
    //    countingTimer 
    // }
            
}

function increment(){
    count.innerText = parseInt(count.innerText) + 1
}

function decrement(){
    count.innerText = parseInt(count.innerText) - 1
}


document.addEventListener('DOMContentLoaded', function () {
    plus.addEventListener("click", increment)
    minus.addEventListener("click", decrement)
    pause.addEventListener("click", pauseIt)

    
   
  });