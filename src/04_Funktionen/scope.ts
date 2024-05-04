const pi1 = Math.PI;

function calculateTax(percentage: number, isMarried: boolean): void {
  const myTax = 2000;
  console.log(pi1);

  let resultMarried: number = 0;

  if (isMarried) {
    resultMarried = percentage * 50 * myTax;
    console.log(resultMarried);
    console.log(pi1);
    console.log(myTax);
  } else {
    const resultUnMarried = percentage * 80 * myTax;
    console.log(resultUnMarried);
    console.log(pi1);
    console.log(myTax);
    console.log(resultMarried);
  }
}

//console.log(myTax);