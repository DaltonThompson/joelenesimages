document.getElementsByTagName('header')[0].innerHTML = `
    <nav class="navbar">
        <a class="navbar-brand" href="./index.html">Joelene's Images</a>
        <div class="navbar-collapse">
            <a class="nav-link" href="./index.html">Home</a>
            <a class="nav-link" href="./about.html">About</a>
            <a class="nav-link" href="./packages.html">Packages</a>
            <a class="nav-link" href="./photographs.html">Photographs</a>
        </div>
    </nav>
`;
document.getElementsByTagName('footer')[0].innerHTML = `
    <div>
        <strong>Hours:</strong><br>
        Wed-Thurs: 11:00am - 7:00pm<br>
        Fri: 12:00pm - 7:00pm<br>
        Sat: 10:00am - 5:00pm<br>
        Sun-Tues: Closed<br>
        <em>Appointments during closed hours only 2 weeks in advance.</em>
    </div>
    <div>
        <a href="https://www.facebook.com/Joelenes-Images-590683597654573/" target="_blank"><img class="icon" src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/xX_5R5twdVm.png" alt="Facebook logo">
            <span  class="logo-text">Facebook</span>
        </a>
        <a href="tel:845-758-0610">
            <!--following SVG is just copy-pasted, besides some simplifications I made for the external CSS to be compatible. --><svg class="icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 172 172" style=" fill:#000000;">
                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                    <path d="M0,172v-172h172v172z" fill="none"></path>
                    <g fill="#ffffff">
                        <path d="M148.09676,119.25781c-10.23317,-8.76022 -20.64724,-14.08353 -30.75121,-5.32332l-6.04687,5.27163c-4.41887,3.85037 -12.63642,21.78426 -44.39544,-14.78125c-31.75901,-36.48798 -12.86899,-42.17308 -8.42428,-45.97175l6.07272,-5.29748c10.05228,-8.76021 6.2536,-19.79447 -1.00781,-31.16466l-4.36719,-6.8738c-7.28726,-11.31851 -15.2464,-18.76081 -25.32452,-10.02644l-5.45253,4.78065c-4.47055,3.23017 -16.92608,13.79928 -19.94952,33.85216c-3.64363,24.05829 7.85577,51.63101 34.13642,81.86538c26.25481,30.26022 51.99279,45.45493 76.33534,45.19651c20.23377,-0.23257 32.48257,-11.08594 36.30709,-15.03966l5.45253,-4.78065c10.07812,-8.73438 3.82452,-17.64964 -6.4345,-26.40986z"></path>
                    </g>
                </g>
            </svg>
            <span  class="logo-text">845-758-0610</span>
        </a>
        <br>
        <br>
        <address>
            7578 N. Broadway, Suite #3<br>
            Red Hook, NY 12571
        </address><br>
        <div id="copyright">&copy; Joelene's Images, 2020</div>
    </div>    
`