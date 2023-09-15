prompt("what is your name?");
prompt("what is her name?");

var lovescore = Math.random() * 100;
lovescore = Math.floor(lovescore) + 1;

if (lovescore >= 70) {
  alert(
    "Your love is " + lovescore + "%. You love each other like tom and jerry. "
  );
} else {
  alert("your love is " + lovescore + "%");
}
