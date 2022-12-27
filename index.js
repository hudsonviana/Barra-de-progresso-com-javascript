var progressBar = document.querySelector('#progress-bar');
var percentText = document.querySelector('#percent');
var emailsSent = document.querySelector('#emails-sent');

var totalEmails = 500;
var totalPercent = 100;
var percentBar = totalPercent/totalEmails;

var percent = 0;
var sent = 0;

var interval = setInterval(() => {

  if (Number(percent.toFixed(2)) === Number(100.00)) {
    clearInterval(interval);
    console.log('stoped');
  }

  percentText.textContent = percent.toFixed(2) + '%';
  emailsSent.textContent = sent + ' Emails enviados'
  progressBar.setAttribute('value', percent);

  percent += percentBar;
  sent++;
}, 100);
