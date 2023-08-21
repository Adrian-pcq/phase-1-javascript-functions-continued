// code your solution here
function saturdayFun(value){
if (value){
    return `This Saturday, I want to ${value}!`
}else {return "This Saturday, I want to roller-skate!"}
}
saturdayFun("bath my dog");

function mondayWork(value){
    if(value){
        return `This Monday, I will ${value}.`
    } else {return "This Monday, I will go to the office."}
}

function wrapAdjective(value = '*'){
    return function (who= "a hard worker"){
        return `You are ${value}${who}${value}!`
    }
}