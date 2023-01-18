function calculateInterest() {
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var time = document.getElementById("time").value;
  
  var interest = (principal * rate * time);
  document.getElementById("principal_value").innerHTML = principal;
  document.getElementById("rate_value").innerHTML = rate;
  document.getElementById("time_value").innerHTML = time;
  document.getElementById("interest_value").innerHTML = interest;
}