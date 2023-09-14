//ceo => 2200
//manager => 1800
//cto => 1800
//developer => 1500
//default => 1000

function calculateSalary(role) {
  let salaryBase;
  switch (role) {
    case "ceo":
      salaryBase = "2200€";
      break;
    case "manager":
      salaryBase = "1800€";
      break;
    case "cto":
      salaryBase = "1800€";
      break;
    case "developer":
      salaryBase = "1500€";
      break;
    default:
      salaryBase = "1000€";
  }
  return salaryBase;
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);