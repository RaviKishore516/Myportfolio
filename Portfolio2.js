// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

// Side NavIgation Menu JS Code
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}

 const chatBox = document.getElementById("Let's Chat");

    function sendMessage() {
      const input = document.getElementById("message");
      const msg = input.value.trim();
      if (msg === "") return;

      // User message
      const userMsg = document.createElement("div");
      userMsg.classList.add("message", "user");
      userMsg.textContent = msg;
      chatBox.appendChild(userMsg);

      // Bot response (placeholder)
      const botMsg = document.createElement("div");
      botMsg.classList.add("message", "bot");
      botMsg.textContent = "Thanks for reaching out! We’ll connect with you shortly.";
      chatBox.appendChild(botMsg);

      chatBox.scrollTop = chatBox.scrollHeight;
      input.value = "";
    }

    const mailbox = document.getElementById("hireme");

    if(mailbox){
      mailbox.addEventListener("click", function() {
        window.location.href = "mailto:ravikishoreyenugula@gmail.com?subject=Hiring%20Request&body=Hello,%20I%20would%20like%20to%20discuss%20a%20job%20opportunity%20with%20you.";
      });
    }