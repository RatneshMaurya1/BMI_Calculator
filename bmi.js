const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the results
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results.innerHTML = `you are Under Weight`;
      results.style.color = "white"
    }
    if (bmi > 18.6 && bmi < 24.9) {
      results.innerHTML = `you weight is Normal`;
      results.style.color = "green"
    }
    if (bmi > 24.9) {
      results.innerHTML = `you are Over Weight`;
      results.style.color = "red"
    }
  }
});