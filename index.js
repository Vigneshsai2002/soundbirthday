function question1(){
    document.getElementById("second_page_question").classList.toggle("invisible");
}

function wrong(){
  alert("wrong choice");
}

function change1(){
  document.getElementById("second_page_question").classList.toggle("invisible");
  document.getElementById("second_page").classList.toggle("invisible");
  document.getElementById("third_page_question").classList.toggle("invisible");
}

function change2(){
  document.getElementById("third_page_question").classList.toggle("invisible");
  document.getElementById("third_page").classList.toggle("invisible");
  document.getElementById("fourth_page_question").classList.toggle("invisible");
}

function change3(){
  document.getElementById("fourth_page_question").classList.toggle("invisible");
  document.getElementById("fourth_page").classList.toggle("invisible");
  document.getElementById("last_page").classList.toggle("invisible");
}
