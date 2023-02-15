"use strict";
document.addEventListener("DOMContentLoaded", function () {
    togglemenu();
    menuclick();
    menuhrres();
    var vw = window.innerWidth;
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
    document.querySelector(".mobile-menu").addEventListener('click', function () {
        if (document.querySelector(".mobile-menu").classList.contains('on')) {
            document.querySelector(".mobile-menu").classList.remove('on');
        } else {
            document.querySelector(".mobile-menu").classList.add('on');
        }
    });
    document.querySelector("#mobile-collapse").addEventListener('click', function () {
        if (document.querySelector(".pcoded-navbar").classList.contains('navbar-collapsed')) {
            document.querySelector(".pcoded-navbar").classList.remove('navbar-collapsed');
        } else {
            document.querySelector(".pcoded-navbar").classList.add('navbar-collapsed');
        }
    });


    // open user list
    document.querySelector('.displayChatbox').addEventListener('click', function () {
        if (document.querySelector(".header-user-list").classList.contains('open')) {
            document.querySelector(".header-user-list").classList.remove('open');
        } else {
            document.querySelector(".header-user-list").classList.add('open');
        }
    });
    // open messages
    var elem = document.querySelectorAll(".header-user-list .userlist-box");
    for (var j = 0; j < elem.length; j++) {
        elem[j].addEventListener('click', function () {
            document.querySelector(".header-chat").classList.add('open');
            if (document.querySelector(".header-user-list").classList.contains('msg-open')) {
                document.querySelector(".header-user-list").classList.remove('msg-open');
            } else {
                document.querySelector(".header-user-list").classList.add('msg-open');
            }
        });
    }

    // close user list
    document.querySelector('.h-back-user-list').addEventListener('click', function () {
        document.querySelector(".header-chat").classList.remove('open');
        document.querySelector(".header-user-list").classList.remove('msg-open');
    });
    //  full chat
    document.querySelector('.h-close-text').addEventListener('click', function () {
        document.querySelector(".header-chat").classList.remove('open');
        document.querySelector(".header-user-list").classList.remove('open');
        document.querySelector(".header-user-list").classList.remove('msg-open');
    });

    if (vw <= 991) {
        document.querySelector(".main-search").classList.add('open');
        document.querySelector(".main-search .form-control").style.width = '90px';
    }
    // Friend scroll
    if (vw >= 1024) {
        if (!!document.querySelector('.main-friend-cont')) {
            var px = new PerfectScrollbar('.main-friend-cont', {
                wheelSpeed: .5,
                swipeEasing: 0,
                suppressScrollX: !0,
                wheelPropagation: 1,
                minScrollbarLength: 40,
            });
        }
        if (!!document.querySelector('.main-chat-cont')) {
            var px = new PerfectScrollbar('.main-chat-cont', {
                wheelSpeed: .5,
                swipeEasing: 0,
                suppressScrollX: !0,
                wheelPropagation: 1,
                minScrollbarLength: 40,
            });
        }
    }
    if (!!document.querySelector('.noti-body')) {
        var px = new PerfectScrollbar('.notification  .noti-body', {
            wheelSpeed: .5,
            swipeEasing: 0,
            suppressScrollX: !0,
            wheelPropagation: 1,
            minScrollbarLength: 40,
        });
    }
    // Menu scroll
    // pcoded-navbar
    if (!!document.querySelector('.pcoded-navbar')) {
        if (!document.querySelector('.pcoded-navbar').classList.contains('theme-horizontal')) {
            var vw = window.innerWidth;
            if (vw < 992 || document.querySelector('.pcoded-navbar').classList.contains('menupos-static')) {
                var px = new PerfectScrollbar('.navbar-content', {
                    wheelSpeed: .5,
                    swipeEasing: 0,
                    suppressScrollX: !0,
                    wheelPropagation: 1,
                    minScrollbarLength: 40,
                });
            } else {
                var px = new PerfectScrollbar('.navbar-content', {
                    wheelSpeed: .5,
                    swipeEasing: 0,
                    suppressScrollX: !0,
                    wheelPropagation: 1,
                    minScrollbarLength: 40,
                });
            }
        }
    }
    // search-bar
    
    if (document.querySelector('.pcoded-navbar').classList.contains('theme-horizontal')) {
        rmactive();
        horizontalmenu();
    }
    // remove pre-loader start
    setTimeout(function () {
        document.querySelector('.loader-bg').remove();
    }, 400);
    // remove pre-loader end

});

// ===============
function horizontalmenu() {
    var vw = window.innerWidth;
    if (document.querySelector(".pcoded-navbar").classList.contains('theme-horizontal')) {
        if (vw < 992) {
            document.querySelector(".pcoded-navbar.theme-horizontal").classList.remove("theme-horizontal");
        }
    }
}
window.addEventListener("resize", function () {
    togglemenu();
    menuhrres();
    if (document.querySelector('.pcoded-navbar').classList.contains('theme-horizontal')) {
        rmactive();
        horizontalmenu();
    }
    if (document.querySelector('body').classList.contains('layout-6') || document.querySelector('body').classList.contains('layout-7')) {
        togglemenulayout();
    }
});
// menu [ horizontal configure ]
function rmactive() {
    var elem = document.querySelectorAll(".pcoded-navbar li.pcoded-hasmenu");
    for (var j = 0; j < elem.length; j++) {
        elem[j].classList.remove("active");
        elem[j].classList.remove("pcoded-trigger");
        elem[j].children[1].removeAttribute("style");
    }
}

function menuhrres() {
    if (document.querySelector('body').classList.contains('theme-horizontal')) {
        var vw = window.innerWidth;
        if (vw < 992) {
            setTimeout(function () {
                document.querySelector(".sidenav-horizontal-wrapper").classList.add("sidenav-horizontal-wrapper-dis").classList.remove("sidenav-horizontal-wrapper");
                document.querySelector(".theme-horizontal").classList.add("theme-horizontal-dis").classList.remove("theme-horizontal");
            }, 400);
        } else {
            setTimeout(function () {
                document.querySelector(".sidenav-horizontal-wrapper-dis").classList.add("sidenav-horizontal-wrapper");
                document.querySelector(".sidenav-horizontal-wrapper-dis").classList.remove("sidenav-horizontal-wrapper-dis");
                document.querySelector(".theme-horizontal-dis").classList.add("theme-horizontal");
                document.querySelector(".theme-horizontal-dis").classList.remove("theme-horizontal-dis");
            }, 400);
        }
        // Menu scroll
        setTimeout(function () {
            if (document.querySelector('.pcoded-navbar').classList.contains('theme-horizontal-dis')) {
                document.querySelector(".sidenav-horizontal-wrapper-dis").css({
                    'height': '100%',
                    'position': 'relative'
                });
                if (document.querySelector('.sidenav-horizontal-wrapper-dis')[0]) {
                    var px = new PerfectScrollbar('.sidenav-horizontal-wrapper-dis', {
                        wheelSpeed: .5,
                        swipeEasing: 0,
                        suppressScrollX: !0,
                        wheelPropagation: 1,
                        minScrollbarLength: 40,
                    });
                }
            }
        }, 1000);
    }
}
var ost = 0;
// menu [ compact ]
function togglemenu() {
    var vw = window.innerWidth;
    if (document.querySelector(".pcoded-navbar").classList.contains('theme-horizontal') == false) {
        if (vw <= 1200 && vw >= 992) {
            document.querySelector(".pcoded-navbar:not(.theme-horizontal)").classList.add("navbar-collapsed");
        }
        if (vw < 992) {
            document.querySelector(".pcoded-navbar:not(.theme-horizontal)").classList.remove("navbar-collapsed");
        }
    }
}
// Menu click for tab Layout start
var tablayclick = document.querySelector('.layout1-nav > ul > li');
if (tablayclick) {
    console.log("condition");
    var tc = document.querySelectorAll('.layout1-nav > ul > li');
    for (var t = 0; t < tc.length; t++) {
        var c = tc[t];
        c.addEventListener('click', function (event) {
            var targetElement = event.target;
            if (targetElement.tagName == "A") {
                targetElement = targetElement.parentNode;
            }
            if (targetElement.tagName == "I") {
                targetElement = targetElement.parentNode.parentNode;
            }
            var tempcont = targetElement.children[0].getAttribute('data-cont');
            document.querySelector('.navbar-content .sidelink.active').classList.remove('active');
            document.querySelector('.layout1-nav > ul > li.active').classList.remove('active');
            targetElement.classList.add('active');
            console.log(tempcont);
            document.querySelector('.navbar-content .sidelink.' + tempcont).classList.add('active');
        });
    }
}
// Menu click for tab Layout end
var tablaymenuclick = document.querySelector('.layout-1 .toggle-sidemenu');
if (tablaymenuclick) {
    document.querySelector('.layout-1 .toggle-sidemenu').addEventListener('click', function () {
        if (document.querySelector(".pcoded-navbar").classList.contains('hide-sidemenu')) {
            document.querySelector(".pcoded-navbar").classList.remove('hide-sidemenu');
        } else {
            document.querySelector(".pcoded-navbar").classList.add('hide-sidemenu');
        }
    });
}
// ===============

// toggle full screen
function toggleFullScreen() {
    var a = window.innerHeight - 10;

    if (!document.fullscreenElement && // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement) { // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
    document.querySelector('.full-screen > i').classList.toggle('icon-maximize');
    document.querySelector('.full-screen > i').classList.toggle('icon-minimize');
}
// =============   layout builder   =============

// Menu click start
function menuclick() {
    var vw = window.innerWidth;
    var elem = document.querySelectorAll(".pcoded-navbar li");
    for (var j = 0; j < elem.length; j++) {
        elem[j].removeEventListener("click", function () {});
    }
    if (!document.querySelector("body").classList.contains("minimenu")) {
        var elem = document.querySelectorAll(".pcoded-navbar li:not(.pcoded-trigger) .pcoded-submenu");
        for (var j = 0; j < elem.length; j++) {
            elem[j].style.display = "none";
        }
        var pclinkclick = document.querySelectorAll(".pcoded-inner-navbar > li:not(.pcoded-menu-caption)");
        for (var i = 0; i < pclinkclick.length; i++) {
            pclinkclick[i].addEventListener("click", function (event) {
                event.stopPropagation();
                var targetElement = event.target;
                if (targetElement.tagName == "SPAN") {
                    targetElement = targetElement.parentNode;
                }
                if (targetElement.parentNode.classList.contains("pcoded-trigger")) {
                    targetElement.parentNode.classList.remove("pcoded-trigger");
                    slideUp(targetElement.parentNode.children[1], 200);
                } else {
                    var tc = document.querySelectorAll("li.pcoded-trigger");
                    for (var t = 0; t < tc.length; t++) {
                        var c = tc[t];
                        c.classList.remove("pcoded-trigger");
                        slideUp(c.children[1], 200);
                    }
                    targetElement.parentNode.classList.add("pcoded-trigger");
                    var tmp = targetElement.children[1];
                    if (tmp) {
                        slideDown(targetElement.parentNode.children[1], 200);
                    }
                }
            });
        }
        var pcsublinkclick = document.querySelectorAll(".pcoded-inner-navbar > li:not(.pcoded-menu-caption) li");
        for (var i = 0; i < pcsublinkclick.length; i++) {
            pcsublinkclick[i].addEventListener("click", function (event) {
                var targetElement = event.target;
                if (targetElement.tagName == "SPAN") {
                    targetElement = targetElement.parentNode;
                }
                event.stopPropagation();
                if (targetElement.parentNode.classList.contains("pcoded-trigger")) {
                    targetElement.parentNode.classList.remove("pcoded-trigger");
                    slideUp(targetElement.parentNode.children[1], 200);
                } else {
                    var tc = targetElement.parentNode.parentNode.children;
                    for (var t = 0; t < tc.length; t++) {
                        var c = tc[t];
                        c.classList.remove("pcoded-trigger");
                        if (c.tagName == "LI") {
                            c = c.children[0];
                        }
                        if (c.parentNode.classList.contains("pcoded-hasmenu")) {
                            slideUp(c.parentNode.children[1], 200);
                        }
                    }
                    targetElement.parentNode.classList.add("pcoded-trigger");
                    var tmp = targetElement.parentNode.children[1];
                    if (tmp) {
                        tmp.removeAttribute('style');
                        slideDown(tmp, 200);
                    }
                }
            });
        }
    }
}

// menu [ Mobile ]
if (!!document.querySelector('#mobile-collapse1')) {
    document.querySelector("#mobile-collapse1").addEventListener("click", function (e) {
        var vw = window.innerWidth;
        if (vw < 992) {
            if (document.querySelector(".pcoded-navbar").classList.contains('mob-open')) {
                document.querySelector(".pcoded-navbar").classList.remove('mob-open');
            } else {
                document.querySelector(".pcoded-navbar").classList.add('mob-open');
            }
            e.stopPropagation();
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    var vw = window.innerWidth;
    document.querySelector(".pcoded-navbar").addEventListener('click tap', function (e) {
        e.stopPropagation();
    });
    document.querySelector('.pcoded-main-container').addEventListener("click", function () {
        if (vw < 992) {
            if (document.querySelector(".pcoded-navbar").classList.contains("mob-open") == true) {
                document.querySelector(".pcoded-navbar").classList.remove('mob-open');
                document.querySelector("#mobile-collapse,#mobile-collapse1").classList.remove('on');
            }
        }
    });
});

// active menu item list start
var elem = document.querySelectorAll('.pcoded-navbar .pcoded-inner-navbar a');
for (var l = 0; l < elem.length; l++) {
    var pageUrl = window.location.href.split(/[?#]/)[0];
    if (elem[l].href == pageUrl && elem[l].getAttribute('href') != "") {
        elem[l].parentNode.classList.add("active");
        elem[l].parentNode.parentNode.parentNode.classList.add("active");
        elem[l].parentNode.parentNode.parentNode.classList.add("pcoded-trigger");
        elem[l].parentNode.parentNode.style.display = 'block';

        elem[l].parentNode.parentNode.parentNode.parentNode.parentNode.classList.add("active");
        elem[l].parentNode.parentNode.parentNode.parentNode.parentNode.classList.add("pcoded-trigger");
        elem[l].parentNode.parentNode.parentNode.parentNode.style.display = 'block';

        if (document.body.classList.contains('tab-layout')) {
            var temp = document.querySelector('.sidelink.active').getAttribute('data-value');
            document.querySelector('.layout1-nav > ul > li').classList.remove('active');
            document.querySelector('.layout1-nav > ul > li > a[data-cont="' + temp + '"]').parentNode.classList.add('active');
        }
    }
}
// active menu item list end
// =======================================================
// =======================================================
let slideUp = (target, duration = 0) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
}
let slideDown = (target, duration = 0) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;

    if (display === 'none')
        display = 'block';

    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}
var slideToggle = (target, duration = 0) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
}