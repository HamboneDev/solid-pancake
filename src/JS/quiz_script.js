

//Question constructor
(function(){

var questionConst = function (question, answer, potentialAnsers){   
    this.question = question;
    this.answer = answer;
    this.potentialAnsers = potentialAnsers ;
}

var question1,question2,question3,question4,question5;


question1 = new questionConst('How many states is in USA?', 50,' 40, 20 ,50');
question2 = new questionConst('6 + 6 * 6', 42);
question3 = new questionConst('Mountain ... . What is the full na of a popular drink?', 'Dew','Mew , Dew, Jew');
question4 = new questionConst('10 + 10', 20,' 20, 30, 40');
question5 = new questionConst('George ... . What is a surname of a President of USA', 'Washington',' Janusz, Washington, Dupa');

var questions = [question1,question2,question3,question4,question5];

var questionPicker = Math.floor(Math.random()* 5  );
console.log(question1);

var questionWindow = prompt('Answer the question : ' + questions[questionPicker].question + ' ' +  questions[questionPicker].potentialAnsers);
 
if(questionWindow == questions[questionPicker].answer){
   console.log('Corrent answer!');
}
    else
    {
        console.log('Try again :(')
    }

})();