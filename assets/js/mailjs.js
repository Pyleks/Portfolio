function sendMail(contactForm) {
    // Free mail API with restrictions, aquired from https://www.mailjs.com
    emailjs.init("user_qeOnqYBPzVybZ4G2BOqsg");
    let templateParams = {
        "first_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "Blockworm_feedback": contactForm.feedback.value
    };
    // Sends the email through mailJS
    // Also makes the button responsive when clicked, if success the button will changed text
    // And become green
    emailjs.send("gmail", "blockworm_feedback", templateParams)
        .then(
            function(response) {
                if(response) {
                    $("#submit-button").text("Thank you");
                    $("#submit-button").removeClass("btn-secondary");
                    $("#submit-button").addClass("bg-green");
                    $("#submit-button").addClass("font_white");
                }
            },
            // Change the color of button to red, with "Try Again Later"
            function(error) {
                if(error) {
                    $("#submit-button").text("Try Again Later");
                    $("#submit-button").removeClass("btn-secondary");
                    $("#submit-button").addClass("white_cl");
                    $("#submit-button").addClass("red_bg");
                }
            }
        );
    return false;  // To block from loading a new page

}