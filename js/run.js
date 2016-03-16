/**
 * Created by andrej on 3/6/16.
 */
'use strict';

let run = document.getElementById('run');

run.onclick = function() {
    addelement.style.display = 'none';
    buttonStep.style.display = 'none';
    buttonStep.onclick();
    setInterval(buttonStep.onclick, 1000);
};
