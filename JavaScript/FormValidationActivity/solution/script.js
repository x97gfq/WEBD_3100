
function validateForm(e) {

    console.log("validating form...")
    let messages = "";

    // --- Get values (trim where applicable) ---
    var nameEl = document.getElementById('name');
    var emailEl = document.getElementById('email');
    var passwordEl = document.getElementById('password');
    var countryEl = document.getElementById('country');
    var commentsEl = document.getElementById('comments');
    var subscribeEl = document.getElementById('subscribe');

    var nameVal = nameEl && nameEl.value ? nameEl.value.trim() : "";
    var emailVal = emailEl && emailEl.value ? emailEl.value.trim() : "";
    var passwordVal = passwordEl && passwordEl.value ? passwordEl.value : "";
    var countryVal = countryEl ? countryEl.value : "";
    var commentsVal = commentsEl && commentsEl.value ? commentsEl.value.trim() : "";

    // --- Required: Name ---
    if (nameVal === "") {
      messages += "- Name is required.\n";
    }

    // --- Required: Email (simple checks, no regex) ---
    if (emailVal === "") {
      messages += "- Email is required.\n";
    } else {
      // Very basic email sanity checks using indexOf and position checks
      var atPos = emailVal.indexOf("@");
      var dotPos = emailVal.lastIndexOf(".");
      var hasSpace = emailVal.indexOf(" ") !== -1;

      // Conditions: one "@" not at start, "." occurs after "@", at least 1 char before/after symbols, and no spaces
      if (
        atPos <= 0 ||                      // must not be first and must exist
        dotPos <= atPos + 1 ||             // dot must come after @ with at least one char between
        dotPos === emailVal.length - 1 ||  // must have something after the last dot
        hasSpace
      ) {
        messages += "- Email format looks invalid (must include '@' and a '.' after it, and contain no spaces).\n";
      }
    }

    // --- Required: Password ---
    if (passwordVal === "") {
      messages += "- Password is required.\n";
    } else {
      // Optional minimal length check without regex (feel free to remove if you want only required)
      if (passwordVal.length < 6) {
        messages += "- Password should be at least 6 characters.\n";
      }
    }

    // --- Required: Age (radio group) ---
    // At least one radio with name="age" must be checked
    var ageChecked =
      (document.querySelector('input[name="age"]:checked') !== null);
    if (!ageChecked) {
      messages += "- Please select your age option (18+ or Under 18).\n";
    }

    // --- Required: Subscribe (checkbox) ---
    // You said all fields are required, so require this to be checked.
    if (!subscribeEl || !subscribeEl.checked) {
      messages += "- You must agree to subscribe to the newsletter.\n";
    }

    // --- Required: Country (must not be the empty option) ---
    if (countryVal === "") {
      messages += "- Please select your country.\n";
    }

    // --- Required: Comments ---
    if (commentsVal === "") {
      messages += "- Comments are required.\n";
    }

    // --- If there are any messages, prevent submit and show them ---
    if (messages !== "") {
      e.preventDefault();
      // You can replace alert() with rendering into the DOM if you prefer
      alert("Please fix the following:\n\n" + messages);
    }

}


document.getElementById('myForm').addEventListener('submit', validateForm);
