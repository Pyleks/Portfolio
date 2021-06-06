window.onload = function() {
    (function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
    {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
    a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
    r.src=n;var u=t.getElementsByTagName(s)[0];
    u.parentNode.insertBefore(r,u);})(window,document,
        'https://sc-static.net/scevent.min.js');

    let signup = document.getElementById("submit-button");

    if (signup) {
        (signup).addEventListener('click', pSubmit)
    }

    function pSubmit() {
        snaptr('init', '3b5a3a63-36ab-49fe-9ed9-1b8965fbe750', {
            'user_email': document.getElementById("email_id").value

        });
        snaptr('track', 'RESERVE');
        console.log(document.getElementById("email_id").value)
    }

};

// <!-- End Snap Pixel Code -->