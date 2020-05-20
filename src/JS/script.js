//Chalange nr_1
var nameOne, nameTwo,BMI, BMI_1, BMI_2, heightOne, heightTwo, massOne, massTwo;
nameOne = 'Mark';
nameTwo = 'John';
heightOne = 1.80;
heightTwo = 1.90;
massOne = 80;
massTwo = 100;
BMI_1 = massOne / (heightOne * heightOne);
BMI_2 = massTwo / (heightTwo * heightTwo);
BMI = BMI_1 <  BMI_2;
console.log (BMI_1 + '    ' + BMI_2 )
console.log('is ' + nameOne + ' BMI higher than ' + nameTwo + '?. Answear : ' + BMI);
// Chalange nr_2
var scoreBoardTeamJohn = [116, 123, 20];
var scoreBoardTeamMike = [116, 94, 123];
var scoreTeamJohn = 0;
var scoreTeamMike = 0;
for (i = 0; i<scoreBoardTeamJohn.length; i++){
        scoreTeamJohn = scoreTeamJohn + scoreBoardTeamJohn[i];
    }
for (i = 0; i<scoreBoardTeamMike.length; i++){
        scoreTeamMike = scoreTeamMike + scoreBoardTeamMike[i];
    }
if (scoreTeamJohn > scoreTeamMike ){
    console.log('Team John have Won the game!. With a score of :' + scoreTeamJohn/scoreBoardTeamJohn.length);
    }
    else if (scoreTeamJohn == scoreTeamMike){
        console.log('Draw!' );
    }
    else  {
        console.log('Team Mike have Won the game!. With a score of :' + scoreTeamMike/scoreBoardTeamMike.length);
    }
//Chalange nr_3 
function calculator (moneyPaid){
    if (moneyPaid < 50){
        return moneyPaid * 0.2;
    }
    else if(moneyPaid>50 && moneyPaid<200){
        return moneyPaid * 0.15  ;  
    }
    else {
        return moneyPaid * 0.1;
    }
}
 var bill = [124, 48, 268];
 var tip =[0, 0, 0];
 for (i=0; i<bill.length; i++){
     tip[i] = calculator (bill[i]);
     console.log(tip[i]);
     
 }
 for (i=0; i<bill.length; i++){
    console.log(tip[i]+bill[i]);
 }


 //Chalange nr_4

 var firstGuy = {
firstName : 'John',
secondName : 'White',
mass: 90,
height : 1.80,
BMI_John: function (){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi ;
}

 } ;


var secondGuy = {
firstName: 'Mark',
secondName: 'Black',
mass: 100,
height: 1.95,    
BMI_Mark: function (){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi ;
 }
}
firstGuy.BMI_John();
secondGuy.BMI_Mark();
console.log(firstGuy, secondGuy);
 



if (firstGuy.bmi > secondGuy.bmi){
    console.log(firstGuy.firstName + firstGuy.secondName + 'has BMI of:' + firstGuy.bmi );
}
    else if (firstGuy.bmi < secondGuy.bmi){
    console.log(secondGuy.firstName + secondGuy.secondName + 'has BMI of:' + secondGuy.bmi );
    }
    else {
        console.log(firstGuy.firstName + ' and ' + secondGuy.firstName + ' They have the same BMI of ' + firstGuy.bmi);
    }

        


    