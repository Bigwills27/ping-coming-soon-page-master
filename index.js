const submitBtn = document.querySelector(".submit-btn");
const email = document.querySelector(".email");
const err = document.querySelector(".err");
const socials = document.querySelectorAll(".socials");

socials.forEach((social) => {
  social.addEventListener("mouseenter", () => {
    let socialBg = social.childNodes[0];
    socialBg.style.backgroundColor = "var(--Blue)";
    socialBg.style.borderColor = "var(--Blue)";
    let socialImg = social.childNodes[0].childNodes[0];
    socialImg.style.filter = "brightness(8)";
  });
});

socials.forEach((social) => {
  social.addEventListener("mouseleave", () => {
    let socialBg = social.childNodes[0];
    socialBg.style.backgroundColor = "white";
    socialBg.style.borderColor = "var(--Pale-Blue)";
    let socialImg = social.childNodes[0].childNodes[0];
    socialImg.style.filter = "unset";
  });
});

submitBtn.addEventListener("click", () => {
  //   email input validation
  function isValidEmail(userEmail) {
    var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(userEmail);
  }

  let userEmail = email.value;

  if (isValidEmail(userEmail)) {
    // console.log("valid email format");
    email.style.borderColor = "var(--Pale-Blue)";
    err.style.transform = "translate3d(-1800px,0px,0px)";
  } else {
    // console.log("invalid email format");
    email.style.borderColor = "red";
    err.style.transform = "translate3d(0px,0px,0px)";
  }
});
