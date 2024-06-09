                                  // question no 1
                                  function calcsAge(){
                                    let age = 17
                                if(age >= 18){
                                    return "eligible"
                                }
                                else return "not eligible"
                                }
                                console.log(calcsAge());
                                                                   //  question no 2
                                
                                   function calcdays(n1){
                                    let num = n1;
                                    if(num === 1){console.log("monday");}
                                       else if (num === 2){ console.log("tuesday");}
                                       else if (num === 3){ console.log("wednesday");}
                                       else if (num === 4){ console.log("thursday");}
                                       else if (num === 5){ console.log("friday");}
                                       else if (num === 6){ console.log("saturday");}
                                       else if (num === 7){ console.log("sunday");}
                                       else{
                                           console.log("seats full")
                                       }
                                   } 
                                   calcdays(2)                               
                                                                     //   question n0 3
                                function calcsabs(){
                                    let number = -9
                                    if(number >= 0){console.log(number)}
                                    else  console.log(-number)
                                
                                }
                                calcsabs()
                                                                     //  question no 4
                                function calcsscore(n1){
                                    let score = n1;
                                    if(score > 80)(console.log("GOOD LUCK"))
                                 else(console.log("BETTER LUCK NEXT TIME"))
                                }
                                calcsscore(59);
                                                                    //  question no 5
                                function calcmod (n1, n2){
                                    let A = n1;
                                    let B = n2;
                                    if(A%B === 0){console.log("IT IS DIVISIBLE")}
                                     else(console.log("NOT DIVISIBLE"))
                                }
                                calcmod(18, 2)
                                calcmod(3, 2)
                                  // question no 6
                                  function calcsjoin (){
                                    const number = ["1", "4", "8", "2"];
                                  let text = number.join(" - ");
                                  console.log(text)
                                  }
                                  calcsjoin();
                                                                     //  question no 7
                                function calcweight (n1 ){
                                    let weight = 47;
                                    let planet =  n1;
                                   let venus = 0.78;
                                let mars = 0.39;
                                let jupiter = 2.65;
                                let saturn = 1.17;
                                    let uranus = 1.05;
                                    let neptune = 1.23;
                                    if(planet == "venus"){ console.log("weight on venus is:", weight * venus)}
                                     else if (planet == "uranus"){ console.log("weight on uranus is:", weight * uranus)}
                                     else if(planet == "mars"){ console.log("weight on mars is:", weight * mars)}
                                     else if(planet == "jupiter"){ console.log("weight on jupiter is:", weight * jupiter)}
                                     else if(planet == "saturn"){ console.log("weight on saturn is:", weight * saturn)}
                                     else if(planet == "neptune"){ console.log("weight on neptune is:", weight * neptune)}
                                }
                                calcweight("jupiter")
                                calcweight("mars")
                                calcweight("neptune")
                                calcweight("uranus")
                                calcweight("saturn")
                                calcweight("venus")
                                
                                
                                                                 //    question  no 8
                                  function  calccharge (){
                                    let age1 = 20;
                                    if(age1 < 3){console.log("free")}
                                    else if(age1 > 3 && age1 === 12){console.log("&5.00")}
                                    else if (age1 > 13 && age1 === 20){console.log( "&10.00")}
                                    else if (age1 > 21 && age1 ===54 ){console.log("&15.00")}
                                    else if (age1 >= 55){console.log("&10.00")}
                                    else return"sorry you are dead"
                                  }
                                calccharge(40);
                              
                                
                                 
//                              // student CGPA question no 9
    function calcsgpa (p1){                        
let CGPA = p1;
if(CGPA < 1.7){console.log("student is dropped")}
 else if (CGPA >= 1.7 && CGPA < 2.0){console.log("student is on probation")}
 else{console.log("student is safe")}
}
calcsgpa(4);
               // question no 10
               function calcsnum (n1, n2, n3){
                let largestnum = n1;
                let secondlargest =n2;
               let smallestnum = n3;
              
              if (n1 > n2 && n1 > n3 && n2 > n3 ){console.log("the largest number is", n1,  "the second largest number is ", n2, "the smallest number is ", n3)}
              else if (n1 > n2 && n1 > n3 && n3 > n2 ){console.log("the largest number is", n1,  "the second largest number is ", n3, "the smallest number is ", n2)}
              else if (n2 > n1 && n2 > n3 && n1 > n3 ){console.log("the largest number is", n2,  "the second largest number is ", n1, "the smallest number is ", n3)}
               else if (n2 > n1 && n2 > n3 && n3 > n1 ){console.log("the largest number is", n2,  "the second largest number is ", n3, "the smallest number is ", n1)}
               else if (n3 > n1 && n3 > n2 && n1 > n2 ){console.log("the largest number is", n3,  "the second largest number is ", n1, "the smallest number is ", n2)}
               else if (n3 > n1 && n3 > n2 && n2 > n1 ){console.log("the largest number is", n3,  "the second largest number is ", n2, "the smallest number is ", n1)}
              
              }
              calcsnum(12, 55,90)
              




//                     // empluee hours worked question no 11
function calcstime (h1, h2){
    let hours = h1;
    let pay = h2;
    let overtime = (hours - 40)*pay * 1.5
    if( hours <= 40){console.log("TOTAL PAY OF AN EMPLOYEE", hours*pay)}
      else if (hours > 40){console.log("TOTAL PAY OF AN EMPLOYEE",(40*pay)+overtime)}
     }
     calcstime(45, 10);
     // //                       //    letter grade and grade point question no 12
 function calcsgrade (m1){
    let marks = m1;
    if(marks >= 0 && marks <= 49){console.log("letter grade = F ", "grade point = 0")}
  else  if(marks >= 50 && marks <= 54){console.log("letter grade = D ", "grade point = 1")}
  else  if(marks >= 55 && marks <= 57){console.log("letter grade = C- ", "grade point = 1.7")}
  else  if(marks >= 58 && marks <= 60){console.log("letter grade = C ", "grade point = 2")}
  else  if(marks >= 61 && marks <= 64){console.log("letter grade = C+ ", "grade point = 2.3")}
  else  if(marks >= 65 && marks <= 69){console.log("letter grade = B- ", "grade point = 2.7")}
  else  if(marks >= 70 && marks <= 74){console.log("letter grade = B ", "grade point = 3")}
  else  if(marks >= 75 && marks <= 79){console.log("letter grade = B+ ", "grade point = 3.3")}
  else  if(marks >= 80 && marks <= 84){console.log("letter grade = A- ", "grade point = 3.7")}
  else  if(marks >= 85 && marks <= 100){console.log("letter grade = A ", "grade point = 4")}
   else {console.log("not required")}
  }
  calcsgrade(0);
                      
// //                              // questuon no 13
function calcssheets (){
 let sheets = 800  ;
 if(sheets < 100){console.log("total=", sheets*0.10, "package type = SINGLE SHEETS")}
 else if (sheets <= 500){console.log("total=", sheets*0.055, "package type = MULTIPLE OF 100 SHEETS")}
 else if (sheets <= 1000 && sheets > 500){console.log("total=", sheets *0.04, "package type = MULTIPLE OF 500 SHEETS")}
 else("total=",sheets*0.03, "package type = MULTIPLE OF 1000 SHEETS")
}
calcssheets();