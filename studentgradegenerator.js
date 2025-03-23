function gradeMachine(marks){
    let results
    if(marks<=100,marks<0) {
        results="incorrectInput"
        return results
    }else if (marks<=100,marks>=79) {
        results="A"
        return results
    }else if (marks<=79,marks>=60) {
        results="B"
        return results
    }else if (marks<=59,marks>49) {
        results="C"
        return results
    }else if (marks<=49,marks>=40) {
        results="D"
        return results
    }else {
        results="E"
        return results
    }



}
console.log(gradeMachine(58))