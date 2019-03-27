if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}

const signupForm = document.querySelector('.identity-form-signup')
signupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  auth.signup(
    this.email.value,
    this.password.value,
    { full_name: this.name.value }
  ).then(
    response => console.log("Confirmation email sent"),
    error => console.error("Error during signup: %o", error)
  );
})


