function showanswer() {
  let a = document.getElementById('fname').value;
  document.getElementById('row1').innerHTML = "" + a;

  let b = document.getElementById('lname').value;
  document.getElementById('row2').innerHTML = "" + b;

  let c = document.getElementById('dob').value;
  document.getElementById('row3').innerHTML = "" + c;

  let d = document.getElementById('age').value;
  document.getElementById('row4').innerHTML = "" + d;

  let e = document.getElementById('city').value;
  document.getElementById('row5').innerHTML = "" + e;

  let f = document.getElementsByName("gender");
  let i;
  for (i = 0; i < f.length; i++) {
    if (f[i].checked) {
      document.getElementById("row6").innerText = "" + f[i].value;
    }
  }

  let g = document.getElementsByName("hobby");
  let x = " "
  let j;
  for (j = 0; j < g.length; j++) {
    if (g[j].checked) {
      x += g[j].value
      if (j != g.length-1) x += ", ";
    }
  }
  document.getElementById("row7").innerText = "" + x;
}

