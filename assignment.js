//1 Topic: Online Store Discount Calculator (If-Else Statement)

function calculateDiscount(purchaseAmount) {
  let discountPercentage = 0;
    
  if (purchaseAmount >= 200) {
    discountPercentage = 0.15;
  } else if (purchaseAmount >= 100) {
    discountPercentage = 0.10;
  } else if (purchaseAmount >= 50) {
    discountPercentage = 0.05;
  } else {
    'You are not eligible for discount'
  }
  
  const discountAmount = purchaseAmount * discountPercentage;
  const discountedTotal = purchaseAmount - discountAmount;

  document.write(`Total Purchase Amount = $${purchaseAmount}`+'<br>');
  document.write(`Discounted Amount = $${discountAmount}`+'<br>');
  document.write(`Total Amount + Discount Amount = $${discountedTotal}`);
}

const totalAmount = parseInt(prompt('Enter the total purchase amount:'))

calculateDiscount(totalAmount)


//2 Topic: Filter Even Numbers

var randomNumners = [12, 34, 45, 23, 6, 78, 54, 90];
var evenNumbers = randomNumners.filter(function(item){
    return item % 2 == 0;
})
document.write('Original Array: '+ randomNumners +'<br>');
document.write('Filtered Even Numbers: '+evenNumbers);


//3 Topic: Multiplication Table Generator

function calculateMultiplication() {
  const givenNumber = parseInt(prompt('Enter any number: '));

  for (let i = 1; i <= 10; i++) {
    var result = givenNumber * i;
    var multyTable = `${i} x ${givenNumber} = ${result}`;
    console.log(multyTable);
  }
}
calculateMultiplication();


//4 Topic: Grade Calculator (JavaScript Switch Case)

function calculateGrade(score) {
    let grade;
  
    switch (true) {
      case score >= 90 && score <=100:
        grade = 'A';
        break;
      case score >= 80 && score < 90:
        grade = 'B';
        break;
      case score >= 70 && score < 80:
        grade = 'C';
        break;
      case score >= 60 && score < 70:
        grade = 'D';
        break;
      case score <60:
        grade = 'F';
        break;
      default:
        grade = 'Please enter a valid number.';
        break;
    }
  
    return grade;
  }
  
  const score = parseInt(prompt("Enter the student's score:"));
  const grade = calculateGrade(score);
  document.write(grade);