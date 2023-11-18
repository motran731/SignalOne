const myocardial = document.querySelector('#myocardial')
const stroke = document.querySelector('#stroke')
const pulmonary = document.querySelector('#pulmonary')


document.querySelector('#myocardialSelect').addEventListener('click', myocardialSelect)
document.querySelector('#strokeSelect').addEventListener('click', strokeSelect)
document.querySelector('#pulmonarySelect').addEventListener('click', pulmonarySelect)

document.querySelector('#weight').addEventListener('input', runCalc)

var selected
var weight
var strokeDose

function calcDose(){
    strokeDose = document.querySelector('#strokeDose').value
    strokeDose = Number(weight) * 0.9
    console.log(strokeDose)
    
}


function runCalc(){
    weight = document.querySelector('#weight').value
     calcDose()
    //document.getElementsById('strokeDose')[0].value=strokeDose
    document.getElementById("strokeDose").innerHTML = strokeDose +" mg"


    // Get each of the tables
    let myoTable = document.getElementById("myocardialTable")
    let strokeTable = document.getElementById("strokeTable")
    let pulmonaryTable = document.getElementById("pulmonaryTable")

    switch(selected){
        case 'myo':
            // Make the table we want show and hide the rest
            myoTable.classList.remove("hidden")
            strokeTable.classList.add("hidden")
            pulmonaryTable.classList.add("hidden")

            // Change numbers inside table
            /*if(weight > 67 && selected == 'myo'){
                myoTable1.classList.add("myoTable1")
                // get the element wher u show the number
               // change it here using innerHTML
            }*/
            if(weight <= 67){
                let myoInfusion1=document.getElementById("myoInfusion1")
                myoInfusion1.innerHTML = (0.75 * weight).toFixed(2) + " mg"
                let myoInfusion2=document.getElementById("myoInfusion2")
                myoInfusion2.innerHTML = (0.5 * weight).toFixed(2) + " mg"

            } else {
                let myoInfusion1=document.getElementById("myoInfusion1")
                myoInfusion1.innerHTML = "50 mg"
                let myoInfusion2=document.getElementById("myoInfusion2")
                myoInfusion2.innerHTML = "35 mg"

            }

            break;
        case 'stroke':
            myoTable.classList.add("hidden")
            strokeTable.classList.remove("hidden")
            pulmonaryTable.classList.add("hidden")

            if(weight < 100){
                let strokeBolus=document.getElementById("strokeBolus")
                strokeBolus.innerHTML = (0.09 * weight).toFixed(2) + " mg"
                let strokeInfusion=document.getElementById("strokeInfusion")
                strokeInfusion.innerHTML = (0.81 * weight).toFixed(2) + " mg"

                let strokeDose=document.getElementById("strokeDose")
                strokeDose = (0.9* weight)

            } else {
                let strokeBolus=document.getElementById("strokeBolus")
                strokeBolus.innerHTML = "9 mg"
                let strokeInfusion=document.getElementById("strokeInfusion")
                strokeInfusion.innerHTML = "81 mg"

            }
            break;

        case 'pulm':
            myoTable.classList.add("hidden")
            strokeTable.classList.add("hidden")
            pulmonaryTable.classList.remove("hidden")
            break;
        
    }

}

function myocardialSelect() {
    selected = 'myo'
    runCalc()

    // myocardial.classList.toggle('hidden')
    // stroke.classList.add('hidden')
    // pulmonary.classList.add('hidden')
}

function strokeSelect() {
    selected = 'stroke'
    runCalc()
   
    // stroke.classList.toggle('hidden')
    // myocardial.classList.add('hidden')
    // pulmonary.classList.add('hidden')
}  

function pulmonarySelect() {
    selected = 'pulmonary'
    runCalc()
    // pulmonary.classList.toggle('hidden')
    // myocardial.classList.add('hidden')
    // stroke.classList.add('hidden')
}  