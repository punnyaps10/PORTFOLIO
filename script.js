
function openImage(imgSrc) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");

    modal.classList.remove("hidden");
    modal.classList.add("flex");

    modalImg.src = imgSrc;
}

// document.getElementById("close-modal").addEventListener("click", () =>{
//     document.getElementById("image-modal").classList.add("hidden");
// });

// // click outside image to close

// document.getElementById("image-modal").addEventListener("click", (e) =>{
//     if (e.target.id === "image-modal") {
//         e.currentTarget.classList.add("hidden");
//     }
// });
const closeBtn = document.getElementById("close-modal");
if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    document.getElementById("image-modal").classList.add("hidden");
  });
}

const modal = document.getElementById("image-modal");
if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target.id === "image-modal") {
      e.currentTarget.classList.add("hidden");
    }
  });
}





// emailjs
document.addEventListener("DOMContentLoaded", function () {

  emailjs.init("wpbzjfBmx3iMN2icA");

  document.getElementById("contact-form")
  .addEventListener("submit", function(event) {
      event.preventDefault();

      emailjs.sendForm(
          "service_tnt0e2f",
          "template_gvcd4gp",
          this
      )

      .then(function() {
  showAlert("Message Sent Successfully!");
}, function(error) {
  showAlert(" Failed: " + error.text);
});






     function showAlert(message) {
  document.getElementById("alertMessage").innerText = message;
  const alertBox = document.getElementById("customAlert");
  alertBox.classList.remove("hidden");
  alertBox.classList.add("flex");
}

const closeBtn = document.getElementById('close-btn');

closeBtn.addEventListener("click", function () {
    const alertBox = document.getElementById("customAlert");
  alertBox.classList.remove("flex");
  alertBox.classList.add("hidden");
})


    
  });

}
);
const barIcon = document.getElementById('bar');

barIcon.addEventListener("click", function () {
    const mobile_nav = document.getElementById("mobile-nav");
    mobile_nav.classList.add("block")
    mobile_nav.classList.remove("hidden")
})
function closeNav () {
  const mobile_nav = document.getElementById("mobile-nav");
    mobile_nav.classList.add("hidden")
    mobile_nav.classList.remove("block")
}
