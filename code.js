"use strict";
// variables
let bill;
let tipPorcentage;
let numberPeople;
let tipAmountPerson;
let totalPerson;


//buttons

const btnReset = document.querySelector("#btn-reset")

//inputs
const inputBill = document.querySelector("#input-bill");
const inputCustomTip = document.querySelector("#input-custom-tip");
const inputNumberPeople = document.querySelector("#input-number-people");

//outputs
const opTipAmountPerson = document.querySelector("#tip-amount-person");
const opTotalPerson = document.querySelector("#total-person");


//functions
//check if the input is a number or != 0
const checkInput = (element) => {
    let inputId = element.id;
    let value = element.value;
    if (isNaN(value) || value == 0) {
        if (inputId == "input-custom-tip" && document.querySelector(".btn-selected")!=null) {

        }else{
            element.classList.add("input-error");
        }
    }
    else {
        element.classList.remove("input-error");
        if (inputId == "input-bill") bill = parseFloat(value)
        else if (inputId == "input-number-people") numberPeople = parseFloat(value)
        else if (inputId == "input-custom-tip") {
            tipPorcentage = parseFloat(value);
            let previuslyButtonSelected = document.querySelector(".btn-selected");
            if (previuslyButtonSelected != null) previuslyButtonSelected.classList.remove("btn-selected")

        }
    }
    calculate();
}


//select a button and  Check if already there is a button selected
const selectButton = (element) => {
    //Check if already there is a button selected
    let previuslyButtonSelected = document.querySelector(".btn-selected");
    if (previuslyButtonSelected != null) previuslyButtonSelected.classList.remove("btn-selected")
    document.querySelector("#input-custom-tip").classList.remove("input-error");
    //select the button 
    element.classList.add("btn-selected");
    tipPorcentage = element.value;
    calculate();
}

//calculate  the results

const calculate = () => {

    if (bill != undefined && tipPorcentage != undefined && numberPeople != undefined) {

        let totalTip = bill * (tipPorcentage / 100);
        tipAmountPerson = Math.round((totalTip / numberPeople) * 100) / 100;
        totalPerson = Math.round(((totalTip + bill) / numberPeople) * 100) / 100;

        opTipAmountPerson.innerHTML = `$${tipAmountPerson}`;
        opTotalPerson.textContent = `$${totalPerson}`;
    }


}


//inputs
document.querySelectorAll(".input").forEach(item => {
    item.addEventListener("focusout", (e) => {
        e.preventDefault
        checkInput(item);
    });
});


//butons
document.querySelectorAll(".selectTip__item-btn").forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault;
        selectButton(item);
    });
});

//buton reset

btnReset.addEventListener("click", (e) => {
    let previuslyButtonSelected = document.querySelector(".btn-selected");
    if (previuslyButtonSelected != null) previuslyButtonSelected.classList.remove("btn-selected")

    document.querySelectorAll(".input").forEach(item => {
        item.value = null;
        item.classList.remove("input-error");
    });

    opTotalPerson.textContent = "$0.0";
    opTipAmountPerson.textContent = "$0.0";


});
