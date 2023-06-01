var sum;
var numberOfGrades = 1;
function calculate(e){
  numberOfGrades = 1;
  sum = document.getElementById('input').value;
  if(sum.includes('A+')){
    sum = sum.replaceAll('A+', '4.0')
  }
  if(sum.includes('A')){
    sum = sum.replaceAll('A', '4.0');
  }
  if(sum.includes('A-')){
    sum = sum.replaceAll('A-', '3.7');
  }
  if(sum.includes('B+')){
    sum = sum.replaceAll('B+', '3.3');
  }
  if(sum.includes('B')){
    sum = sum.replaceAll('B', '3.0');
  }
  if(sum.includes('B-')){
    sum = sum.replaceAll('B-', '2.7');
  }
  if(sum.includes('C+')){
    sum = sum.replaceAll('C+', '2.3');
  }
  if(sum.includes('C')){
    sum = sum.replaceAll('C', '2.0');
  }
  if(sum.includes('C-')){
    sum = sum.replaceAll('C-', '1.7');
  }
  if(sum.includes('D+')){
    sum = sum.replaceAll('D+', '1.3');
  }
  if(sum.includes('D')){
    sum = sum.replaceAll('D', '1.0');
  }
  if(sum.includes('D-')){
    sum = sum.replaceAll('D-', '0.7');
  }
  if  (sum.includes('F')){
    sum = sum.replaceAll('F', '0.0');
  }
  while(sum.includes(',')){
    sum = sum.replace(',', '+');
    numberOfGrades++;
  }
  document.getElementById("output").innerHTML = (eval(sum) / numberOfGrades);
}