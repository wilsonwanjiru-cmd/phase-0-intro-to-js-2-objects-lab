// Update the employee object by creating a new object with the updated key-value pair
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

// Update the employee object by mutating the original object
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Delete a key-value pair from the employee object by creating a new object without the specified key
function deleteFromEmployeeByKey(employee, key) {
  let newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// Delete a key-value pair from the employee object by mutating the original object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// Example usage:
const employee = {
  name: 'John Doe',
  streetAddress: '123 Main St',
};

console.log(updateEmployeeWithKeyAndValue(employee, 'streetAddress', '456 Elm St'));
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '789 Oak St'));
console.log(deleteFromEmployeeByKey(employee, 'name'));
console.log(destructivelyDeleteFromEmployeeByKey(employee, 'name'));
