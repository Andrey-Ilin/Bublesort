/**
 * Created by andrej on 3/6/16.
 */
'use strict';

let input = document.getElementById('input');
let addelement = document.getElementById('addelement');
let container = document.getElementById('container')

addelement.onclick = function () {
    if ((input.value == "") || (isNaN(input.value))) {
        input.value = "";
        alert("You must enter a number!!!");
    } else {
        let div = document.createElement('div');
        div.className = 'forsort';
        div.textContent = input.value;
        container.appendChild(div);
        input.value = "";
    }
};
