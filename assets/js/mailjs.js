function sendMail(contactForm) {
    // Free mail API with restrictions, obtained from https://www.mailjs.com
    emailjs.init("user_3G60vDRXrJTJeNKzSxOOV");
    let templateParams = {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "portfolio_message": contactForm.feedback.value
    };
    // Sends the email through mailJS
    // Also makes the button responsive when clicked, if success the button will changed text
    // And become green
    emailjs.send("gmail", "portfolio", templateParams)
        .then(
            function (response) {
                if (response) {
                    $("#submit-button").text("Thank you").removeClass("btn-secondary").addClass("bg-green font_white");

                }
            },
            // Change the color of button to red, with "Try Again Later"
            function (error) {
                if (error) {
                    $("#submit-button").text("Try Again Later").removeClass("btn-secondary").addClass("white_cl red_bd");

                }
            }
        );
    return false;  // To block from loading a new page




}