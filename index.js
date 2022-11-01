function saturdayFun(activity) {
        if (activity === undefined){ 
    return `This Saturday, I want to roller-skate!`
    } else {
        return `This Saturday, I want to ${activity}!`
    }   
}

function mondayWork (todo) {
    if (todo === undefined) {
        return "This Monday, I will go to the office."
    } else {
        return `This Monday, I will ${todo}.`
    }
}  

function wrapAdjective( x = "*"){
  return function(y = "special"){
    return `You are ${x}${y}${x}!`
  }
    
}
