/**
 * Created by andrej on 3/7/16.
 */
'use strict';

describe ('Ordinary Buble Sort', function() {
    it("First array [3,2,1] sorted to [1,2,3]", function() {
        let arr = [3,2,1];
        assert.equal(bubleSort(arr), arr.sort(function(a,b){return a-b}))
    });

    it("Second array [17,0,14,-100] sorted to [-100,0,14,17]", function() {
        let arr = [17,0,14,-100];
        assert.equal(bubleSort(arr), arr.sort(function(a,b){return a-b}))
    });

    it("Random array sorted", function() {
        let arr = [];
        let n = Math.round(Math.random()*1000);

        for (let i = 0; i < n; i++){
            let random = Math.round(Math.random()*1000);
            arr.push(random);
        }
        assert.equal(bubleSort(arr), arr.sort(function(a,b){return a-b}))
    });
});

describe ('My Buble Sort by Steps', function() {
    it('First array [3,2,1] sorted to [1,2,3]', function() {
        let arr = [3,2,1];
        assert.equal(bubleSortBySteps(arr), arr.sort(function(a,b){return a-b}))
    });

    it("Second array [17,0,14,-100] sorted to [-100,0,14,17]", function() {
        let arr = [17,0,14,-100];
        assert.equal(bubleSortBySteps(arr), arr.sort(function(a,b){return a-b}))
    });

    it("Random array sorted", function() {
        let arr = [];
        let n = Math.round(Math.random()*1000);

        for (let i = 0; i < n; i++){
            let random = Math.round(Math.random()*1000);
            arr.push(random);
        }
        assert.equal(bubleSortBySteps(arr), arr.sort(function(a,b){return a-b}))
    });
});

describe('Dom Test', function () {
    let inputText = document.getElementById('input');
    let addElementFromInputText = document.getElementById('addelement');

    it('Input exist on page', function() {
        expect(inputText).to.not.equal(null);
    });

    it('Add button on page', function() {
        expect(addElementFromInputText).to.not.equal(null);
    });

    it('Name of button for add element', function() {
        expect(addElementFromInputText.value).to.equal("Add for sort");
    });

});
