const daysElements = document.querySelector("[data-days]");
const hoursElements = document.querySelector("[data-hours]");
const minutesElements = document.querySelector("[data-minutes]");
const secondsElements = document.querySelector("[data-seconds]");

const render = (days, hours, minutes, seconds) => {
  daysElements.innerHTML = String(days).padStart(2, "0");
  hoursElements.innerHTML = String(hours).padStart(2, "0");
  minutesElements.innerHTML = String(minutes).padStart(2, "0");
  secondsElements.innerHTML = String(seconds).padStart(2, "0");
};

const countdown = () => {
  const now = new Date();
  // pegando o ano mais um para o próximo ano
  const nextYear = now.getFullYear() + 1; // 2026

  // Janeiro é 0 porque os anos são contados em um array
  // primeiro param é o ano, segundo é o mês e o terceiro é o dia
  const targetDate = new Date(nextYear, 0, 1);

  const timeLeft = targetDate - now; // retorna a data em milissegundos

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(timeLeft % (1000 * 60 * 60 * 24)/ (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor(timeLeft % (1000 * 60) / (1000));

  console.log(days);
  render(days, hours, minutes, seconds);
};

// Executando de 1 em 1 segundo
setInterval(countdown, 1000);
