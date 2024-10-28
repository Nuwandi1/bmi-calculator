document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
  
    if (weight > 0 && height > 0) {
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      let message = '';
  
      if (bmi < 18.5) {
        message = 'Underweight';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        message = 'Normal weight';
      } else if (bmi >= 25 && bmi < 29.9) {
        message = 'Overweight';
      } else {
        message = 'Obesity';
      }
  
      document.getElementById('result').innerHTML = `Your BMI: ${bmi} <br> ${message}`;
    } else {
      alert('Please enter valid weight and height.');
    }
  });
  