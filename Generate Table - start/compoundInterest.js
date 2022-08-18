// Write the code to generate table
// This function generates a compound interest table.
function generateTable(form) {
  var amount; // accumulated value for each new year
  var rate; // interest rate
  var years; // years for principal to grow
  var interest; // interest earned each year
  var table; // compound interest table
  var year = 1; // the year being calculated
  amount = form.elements['deposit'].valueAsNumber;
  rate = form.elements['rate'].valueAsNumber;
  years = form.elements['years'].valueAsNumber;
  table =
    '<table>' +
    '<tr><th>Year</th><th>Starting Value</th>' +
    '<th>Interest Earned</th><th>Ending Value</th></tr>';

// ---> Write your code here to generate the table and show it in the page
let result = ""
let ending = 0;
for(let i = 0; i < years; i++){
  //function calculation
  interest = (amount * rate) / 100;
  ending = amount + interest;

  //display 
  let formatedAmount = amount.toFixed(2);
  let formatedEnding = ending.toFixed(2);
  let formatedInterest = interest.toFixed(2);
  result +=  '<tr><td>'+ year +'</td><td>'+ formatedAmount +'</td>' +
  '<td>' + formatedInterest + '</td><td> ' + formatedEnding + '</td></tr>'

  //iteration
  amount = ending
  year++
}
var ans = table + result + "</table>"
document.getElementById("result").innerHTML = ans


} // end generateTable
