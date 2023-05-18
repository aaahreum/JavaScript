const form = document.querySelector("#contact-form");
const dimm = document.querySelector(".dimm");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const userName = document.querySelector("#user_name");
const userEmail = document.querySelector("#user_email");
const message = document.querySelector("#message");
const inputs = document.querySelectorAll("input");

function sendEmail() {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (userName.value == "" || userEmail.value == "" || message.value == "") {
      alert("이름, 이메일, 내용을 확인하세요");
      return;
    }

    this.contact_number.value = (Math.random() * 100000) | 0;
    dimm.classList.add("active");
    emailjs.sendForm("service_tx84pxq", "template_9dkazk7", this).then(
      function () {
        modal.classList.add("active");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });

  close.addEventListener("click", function () {
    modal.classList.remove("active");
    dimm.classList.remove("active");

    inputs.forEach((input) => (input.value = ""));
    message.value = "";
  });
}

sendEmail();
