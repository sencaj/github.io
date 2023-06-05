
var body = document.body || document.getElementsByTagName('body')[0]
var head = document.head || document.getElementsByTagName('head')[0]

document.getElementById("menu").addEventListener("click", function (){
    var style = body.getAttribute('style')
    style.length > 0 ? body.setAttribute('style','overflow-x:hidden;') : body.setAttribute('style','')
    var menuClass = document.getElementById("header-m-drop").getAttribute('class')
    menuClass = menuClass == 'css-d0n7q' ? 'css-1k32rax' : 'css-d0n7q'
    document.getElementById("header-m-drop").setAttribute('class',menuClass)
});

// hotjar
var hotjar = document.createElement('script')
hotjar.innerText = "(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:3514930,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');"
head.appendChild(hotjar)

// google
var google = document.createElement('script')
google.setAttribute('async','')
google.setAttribute('src','https://www.googletagmanager.com/gtag/js?id=G-490CDYV0P3')
head.appendChild(google)

google = document.createElement('script')
google.innerText = "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-490CDYV0P3');"
head.appendChild(google)

var upwork = document.createElement('script')
upwork.setAttribute('type','text/javascript')
upwork.innerText = "(function (i, m, p, a, c, t) { c.ire_o = p; c[p] = c[p] || function () { (c[p].a = c[p].a || []).push(arguments) }; t = a.createElement(m); var z = a.getElementsByTagName(m)[0]; t.async = 1; t.src = i; z.parentNode.insertBefore(t, z) })('https://utt.impactcdn.com/P-A4345834-f732-48db-8ea6-7128d22cd3541.js', 'script', 'impactStat', document, window); impactStat('transformLinks'); impactStat('trackImpression');"
head.appendChild(upwork)

// Create cookie
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Delete cookie
function deleteCookie(cname) {
    const d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=;" + expires + ";path=/";
}

// Read cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Set cookie consent
function acceptCookieConsent(){
    deleteCookie('user_cookie_consent');
    setCookie('user_cookie_consent', 1, 30);
    document.getElementById("cookieNotice").style.display = "none";
}

let cookie_consent = getCookie("user_cookie_consent");
if(cookie_consent != ""){
    document.getElementById("cookieNotice").style.display = "none";
}else{
    document.getElementById("cookieNotice").style.display = "block";
}