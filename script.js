


// Service.html

    function openModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Disable scroll when modal is open
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = "none";
    // document.body.style.overflow = "auto"; // Re-enable scroll
    const forms = document.querySelectorAll(`#${modalId} form`);
    forms.forEach(form => form.style.display = 'none');
  }

  function toggleForm(formId) {
    const form = document.getElementById(formId);
   if (form.style.display === 'none' || form.style.display === '') {
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
    }
  }

  window.onclick = function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = "none";
        // document.body.style.overflow = "auto";
        const forms = modal.querySelectorAll('form');
        forms.forEach(f => f.style.display = 'none');
      }
    });
  };

        // Contact form

  document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Clear previous error messages
  const errors = document.querySelectorAll('.error');
  errors.forEach(error => error.remove());

  let valid = true;

  const fields = ['firstName', 'lastName', 'email', 'password', 'confirmPassword', 'phone'];
  fields.forEach(id => {
    const input = document.getElementById(id);
    if (!input.value.trim()) {
      const error = document.createElement('div');
      error.className = 'error';
      error.innerText = 'This field is required';
      input.parentNode.insertBefore(error, input.nextSibling);
      valid = false;
    }
  });

  if (valid) {
    alert('Form submitted successfully!');
    this.reset();
  }
});

// Contact.html
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const fields = ["firstName", "lastName", "email", "password", "confirmPassword", "phone"];

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    fields.forEach((id) => {
      const field = document.getElementById(id);
      field.classList.remove("error");

      if (!field.value.trim()) {
        field.classList.add("error");
        isValid = false;
      }
    });

    // Email format check
    const emailField = document.getElementById("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
      emailField.classList.add("error");
      isValid = false;
    }

    // Password match check
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    if (password.value !== confirmPassword.value) {
      confirmPassword.classList.add("error");
      isValid = false;
    }

    // Phone number format (basic)
    const phone = document.getElementById("phone");
    const phoneRegex = /^[0-9]{7,15}$/;
    if (!phoneRegex.test(phone.value)) {
      phone.classList.add("error");
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });
});

// Whatsapp

let whatsappContainer = document.getElementById("whatsapp");
window.onscroll = function(){
  scrollfunction();
}
function scrollfunction(){
  if (document.body.scrollTop > 600||
     document.documentElement.scrollTop > 600 ) {
    whatsappContainer.style.display = "block";
    
  } else {
    whatsappContainer.style.display = "none"
    
  }
}
// whatsapp.onclick = function(){
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }


