(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
{a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
r.src=n;var u=t.getElementsByTagName(s)[0];
u.parentNode.insertBefore(r,u);})(window,document,
    'https://sc-static.net/scevent.min.js');

snaptr('init', '3b5a3a63-36ab-49fe-9ed9-1b8965fbe750', {
    'user_email': '__INSERT_USER_EMAIL__'
});

snaptr('track', 'PAGE_VIEW');
snaptr('track', 'SIGN_UP');

// <!-- End Snap Pixel Code -->