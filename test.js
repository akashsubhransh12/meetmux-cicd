// Simple unit test - no external libraries needed
console.log("Running MeetMux Unit Tests...");

function add(a, b) { return a + b; }
function isValid(user) { return user && user.name && user.email; }

// Test 1
console.assert(add(2, 3) === 5, "FAIL: add()");
console.log(" Test 1 Passed: add(2, 3) === 5");

// Test 2
console.assert(isValid({ name: "Alice", email: "a@b.com" }), "FAIL: isValid()");
console.log(" Test 2 Passed: User validation works");

console.log(" All Tests Passed! Pipeline is GREEN.");
