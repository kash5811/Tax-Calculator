const val1 = document.getElementById("r1");
const val2 = document.getElementById("r2");
const val3 = document.getElementById("r3");
const val4 = document.getElementById("r4");

function fans() {
    let temp = 0;
    const num1 = parseFloat(val1.value);
    const num2 = parseFloat(val2.value);
    const num4 = parseFloat(val4.value);
   
    const num = num1 + num2 - num4;
    
    if (isNaN(num)) {
        return 0;
    }
    if (num <= 800000) {
        temp = 0;
    } else {
        if (val3.value >= 40 && val3.value <= 60) {
            temp = 0.4 * num;
        } else if (val3.value < 40) {
            temp = 0.3 * num;
        } else if (val3.value > 60) {
            temp = 0.1 * num;
        }
    }
    console.log(temp);
    return temp;
}

document.getElementById("incomeDed").innerHTML = fans();

let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-pop");
}

function closePopup(){
    popup.classList.remove("open-pop");
}

function onSubmit(){
    const incomeDed = fans();
    document.getElementById("incomeDed").innerHTML = incomeDed;
    openPopup();
} 


const inputBoxes = document.querySelectorAll('.form input[type="text"]');


inputBoxes.forEach(inputBox => {
    
    inputBox.addEventListener('input', () => {
       
        if (isNaN(inputBox.value)) {
           
            inputBox.nextElementSibling.style.visibility = 'visible';
        } else {
           
            inputBox.nextElementSibling.style.visibility = 'hidden';
        }
    });
});
