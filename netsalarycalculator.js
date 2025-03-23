
function calculateNetSalary(basicSalary, benefits) {
  
  
  const taxRate = 0.2
  const nhifRate = 0.1
  const nssfRate = 0.2

  
  const grossSalary = basicSalary + benefits;

  const tax = grossSalary * taxRate; 
  const nhif = grossSalary * nhifRate;
  const nssf = grossSalary * nssfRate;
  //Net salary calculation
  const netSalary = grossSalary - (tax + nhif + nssf);

  return {
    grossSalary,
    tax,
    nhif,
    nssf,
    netSalary
  };
}
console.log(calculateNetSalary(50000,5000));
