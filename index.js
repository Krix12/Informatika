var questionDivs = document.getElementsByClassName("questiondiv")
var answers = document.getElementsByClassName("answer")
var questions = document.getElementsByClassName("question");
var curr = 0;
var solutions = [3, 6, 12, 13, 18, 23, 28, 29, 35, 37];
var selected = [];
var clicked = false;
var end = false;
var wrong = 0;
    console.log(questionDivs)
function start() {
    for (i = 1; i < questionDivs.length; i++) {
        questionDivs[i].style.display = "none";
    }
  
}

function next() {
    if(!selected[curr]) {
    alert("Izberi nekaj")
    } else {
    if(curr < questionDivs.length - 1) {
    questionDivs[curr].style.display = "none";
    questionDivs[curr + 1].style.display = "block";
    curr++
    clicked = false
    } else {
        end = true;
        document.getElementsByClassName("mark")[0].style = "display: block;"
        document.getElementById("nextButton").style.display = "none";
        console.log("last");
   
      /*   questions.forEach((item, index) => {
            item.style = "color: white;"
        }) */


        questionDivs[questionDivs.length-1].style.display = "none";
        for (i = 0; i < questionDivs.length; i++) {
            questionDivs[i].style.display = "block";
        }
        console.log(selected)
        selected.forEach((item, index) => {
            if(item == solutions[index]) {
                answers[item-1].style = "background: #80ed99"

            } else {
                wrong++
                answers[item-1].style = "background: #d90429"
                answers[solutions[index]-1].style = "background: #80ed99"
            }
        })
        document.getElementById("grade").innerHTML = 10-wrong + "/10"


    }
}

}

function select(element) {
    if(!end){
    if(clicked) {
        selected.splice(selected.length-1, 1)
        clicked = false
    }
    element.style = "background: #3a86ff; border: 2px solid #3a86ff;"
    selected.push(Math.abs(Array.prototype.slice.call(answers).indexOf(element)+1))
    clicked = true
    if(curr == 0) {
        for (i=0;i<4;i++) {
            console.log(i)
            if(i != Array.prototype.slice.call(answers).indexOf(element)) {
            answers[i].style = "background-color: white; border: 2px solid gray;"
            }
        }
    }
    else {
        console.log("more than 0")
    for (i=((curr+1)*4-4);i<((curr+1)*4);i++) {
        console.log(i)
        if(i != Array.prototype.slice.call(answers).indexOf(element)) {
        answers[i].style = "background-color: white; border: 2px solid gray;"
        }
    }
}
} 
}

