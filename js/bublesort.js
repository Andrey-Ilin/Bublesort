

'use strict';
let divs = document.getElementsByClassName('forsort');
let buttonStep = document.getElementById('step');
let i = 0;
let j = 0;
let tmp;

function clear() {
    setTimeout(function () {
        for (let c = 0; c < divs.length - i; c++) {
            divs[c].style.backgroundColor = '';
        }
    }, 750);
};

function debounce(f, ms) {
    var check = true;

    return function() {
        if(check) {
            check = false;
            f.apply(this, arguments);
            setTimeout(function() {
                check = true;
            }, ms);
        }
    }
}

buttonStep.onclick = debounce( function () {
    addelement.style.display = 'none';
    if (i < divs.length - 1) {
        if (j < divs.length - i - 1) {
            divs[j].style.backgroundColor = divs[j + 1].style.backgroundColor = 'orange';

            if (+divs[j].textContent > +divs[j + 1].textContent) {
                divs[j].style.backgroundColor = divs[j + 1].style.backgroundColor = 'red';

                tmp = divs[j].textContent;
                divs[j].textContent = divs[j + 1].textContent;
                divs[j + 1].textContent = tmp;
            }

            if ((j + 1 == divs.length - i - 1)) {
                    divs[j + 1].style.backgroundColor = 'grey';
            }

            if (i == divs.length - 2) {
                clear = function() {};
                divs[divs.length - i - 2].style.backgroundColor = 'grey';
            }
        }
    }
    clear();
    j++;
    if (j == divs.length - i - 1) {
        j = 0;
        i++;
    }
}, 950);




