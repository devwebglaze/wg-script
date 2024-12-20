(function () {
  const style = document.createElement("style");
  style.textContent = `
    .snowflake{color:#fff;font-size:1em;font-family:Arial,sans-serif;text-shadow:0 0 5px #000;position:fixed;top:-10%;z-index:9999;-webkit-user-select:none;user-select:none;cursor:default;animation:shake 3s ease-in-out infinite, fall 10s linear infinite;}
    .snowflake .inner{animation-name:fall;animation-duration:10s;animation-timing-function:linear;}
    @keyframes fall{0%{transform:translateY(0);}100%{transform:translateY(110vh);}}
    @keyframes shake{0%,100%{transform:translateX(0);}50%{transform:translateX(80px);}}
    .snowflake:nth-of-type(0){left:1%;animation-delay:0s;}
    .snowflake:first-of-type{left:10%;animation-delay:1s;}
    .snowflake:nth-of-type(2){left:20%;animation-delay:0.5s;}
    .snowflake:nth-of-type(3){left:30%;animation-delay:2s;}
    .snowflake:nth-of-type(4){left:40%;animation-delay:2s;}
    .snowflake:nth-of-type(5){left:50%;animation-delay:3s;}
    .snowflake:nth-of-type(6){left:60%;animation-delay:2s;}
    .snowflake:nth-of-type(7){left:70%;animation-delay:1s;}
    .snowflake:nth-of-type(8){left:80%;animation-delay:0s;}
    .snowflake:nth-of-type(9){left:90%;animation-delay:1.5s;}
    .snowflake:nth-of-type(10){left:25%;animation-delay:0s;}
    .snowflake:nth-of-type(11){left:65%;animation-delay:2.5s;}
  `;
  document.head.appendChild(style);

  const snowflakesContainer = document.createElement("div");
  snowflakesContainer.className = "snowflakes";
  snowflakesContainer.setAttribute("aria-hidden", "true");
  snowflakesContainer.innerHTML = `
    <div class="snowflake"><div class="inner">❅</div></div>
    <div class="snowflake"><div class="inner">❅</div></div>
    <div class="snowflake"><div class="inner">❅</div></div>
    <div class="snowflake"><div class="inner">❅</div></div>
    <div class="snowflake"><div class="inner">❅</div></div>
    <div class="snowflake"><div class="inner">❅</div></div>
    <div class="snowflake"><div class="inner">❅</div></div>
    <div class="snowflake"><div class="inner">❅</div></div>
    <div class="snowflake"><div class="inner">❅</div></div>
    <div class="snowflake"><div class="inner">❅</div></div>
    <div class="snowflake"><div class="inner">❅</div></div>
    <div class="snowflake"><div class="inner">❅</div></div>
  `;
  document.body.appendChild(snowflakesContainer);
})();
