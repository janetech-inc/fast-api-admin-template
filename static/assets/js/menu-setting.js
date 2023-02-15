"use strict";
document.addEventListener("DOMContentLoaded", function () {
    // =========================================================
    // =========    Menu Customizer [ HTML ] code   ============
    // =========================================================
    document.querySelector('body').insertAdjacentHTML("beforeend", '' +
        '<div id="styleSelector" class="menu-styler">' +
        '<div class="style-toggler">' +
        '<a href="#!"></a>' +
        '</div>' +
        '<div class="style-block">' +
        '<h6 class="mb-2">Datta Able Live Menu Customizer</h6>' +
        '<hr class="my-0">' +
        '<h6>Layouts</h6>' +
        '<div class="theme-color layout-type">' +
        '<a href="#!" class=" active" data-value="menu-dark" data-bs-toggle="tooltip" title="Default Layout"><span></span><span></span></a>' +
        '<a href="#!" class="" data-value="menu-light" data-bs-toggle="tooltip" title="Light"><span></span><span></span></a>' +
        '<a href="#!" class="" data-value="dark" data-bs-toggle="tooltip" title="Dark"><span></span><span></span></a>' +
        '<a href="#!" class="" data-value="reset" data-bs-toggle="tooltip" title="Reset">Reset to Default</a>' +
        '</div>' +
        '<h6>Prebuild Layout</h6>' +
        '<p class="f-12"><span class="text-c-red">*</span> in Prebuild Layout you redirect to new page</p>' +
        '<div class="theme-color prelayout-color">' +
        '<a href="/index-2.html" class="" data-value="l2" target="_blank"><span></span><span></span></a>' +
        '<a href="/index-2-2.html" class="" data-value="l2-2" target="_blank"><span></span><span></span></a>' +
        '<a href="/index-3.html" class="" data-value="l3" target="_blank"><span></span><span></span></a>' +
        '<a href="/index-4.html" class="" data-value="l4" target="_blank"><span></span><span></span></a>' +
        '<a href="/index-4-2.html" class="" data-value="l4-2" target="_blank"><span></span><span></span></a>' +
        '<a href="/index-5-h.html" class="" data-value="l5-h" target="_blank"><span></span><span></span></a>' +
        '<a href="/index-light.html" class="" data-value="l-lite" target="_blank"><span></span><span></span></a>' +
        '<a href="/index-6.html" class="" data-value="l6" target="_blank"><span></span><span></span></a>' +
        '<a href="/index-8.html" class="" data-value="l8" target="_blank"><span></span><span></span></a>' +
        '<a href="/index-1.html" class="" data-value="l1" target="_blank"><span></span><span></span></a>' +
        '</div>' +
        '<div class="form-group mb-3">' +
        '<div class="switch switch-primary d-inline m-r-10">' +
        '<input type="checkbox" id="icon-colored">' +
        '<label for="icon-colored" class="cr"></label>' +
        '</div>' +
        '<label>Icon Color</label>' +
        '</div>' +
        '<ul class="nav nav-pills mb-2 text-center" id="pills-cust-tab" role="tablist">' +
        '<li class="nav-item">' +
        '<a class="nav-link active" id="pills-color-tab" data-bs-toggle="pill" href="#pills-color" role="tab" aria-controls="pills-color" aria-selected="true">Color</a>' +
        '</li>' +
        '<li class="nav-item">' +
        '<a class="nav-link" id="pills-pages-tab" data-bs-toggle="pill" href="#pills-pages" role="tab" aria-controls="pills-pages" aria-selected="false">Layout</a>' +
        '</li>' +
        '<li class="nav-item">' +
        '<a class="nav-link" id="pills-extra-tab" data-bs-toggle="pill" href="#pills-extra" role="tab" aria-controls="pills-extra" aria-selected="false">Extra</a>' +
        '</li>' +
        '</ul>' +
        '<div class="tab-content" id="pills-cust-tabContent">' +
        '<div class="tab-pane fade show active" id="pills-color" role="tabpanel" aria-labelledby="pills-color-tab">' +
        '<h6>header background</h6>' +
        '<div class="theme-color header-color">' +
        '<a href="#!" class=" active" data-value="header-default"><span></span><span></span></a>' +
        '<a href="#!" class="" data-value="header-blue"><span></span><span></span></a>' +
        '<a href="#!" class="" data-value="header-red"><span></span><span></span></a>' +
        '<a href="#!" class="" data-value="header-purple"><span></span><span></span></a>' +
        '<a href="#!" class="" data-value="header-lightblue"><span></span><span></span></a>' +
        '<a href="#!" class="" data-value="header-dark"><span></span><span></span></a>' +
        '</div>' +
        '<h6>Menu background</h6>' +
        '<div class="theme-color navbar-color">' +
        '<a href="#!" class=" active" data-value="navbar-default"><span></span><span></span></a>' +
        '<a href="#!" class="" data-value="navbar-blue"><span></span><span></span></a>' +
        '<a href="#!" class="" data-value="navbar-red"><span></span><span></span></a>' +
        '<a href="#!" class="" data-value="navbar-purple"><span></span><span></span></a>' +
        '<a href="#!" class="" data-value="navbar-lightblue"><span></span><span></span></a>' +
        '<a href="#!" class="" data-value="navbar-dark"><span></span><span></span></a>' +
        '</div>' +
        '<h6>Menu Brand Color</h6>' +
        '<div class="theme-color brand-color">' +
        '<a href="#!" class=" active" data-value="brand-default"><span></span><span></span></a>' +
        '<a href="#!" class="" data-value="brand-blue"><span></span><span></span></a>' +
        '<a href="#!" class="" data-value="brand-red"><span></span><span></span></a>' +
        '<a href="#!" class="" data-value="brand-purple"><span></span><span></span></a>' +
        '<a href="#!" class="" data-value="brand-lightblue"><span></span><span></span></a>' +
        '<a href="#!" class="" data-value="brand-dark"><span></span><span></span></a>' +
        '</div>' +
        '<h6>Navbar Image</h6>' +
        '<div class="theme-color navbar-images">' +
        '<a href="#!" class="" data-value="navbar-image-1"><span></span><span></span></a>' +
        '<a href="#!" class="" data-value="navbar-image-2"><span></span><span></span></a>' +
        '<a href="#!" class="" data-value="navbar-image-3"><span></span><span></span></a>' +
        '<a href="#!" class="" data-value="navbar-image-4"><span></span><span></span></a>' +
        '<a href="#!" class="" data-value="navbar-image-5"><span></span><span></span></a>' +
        '</div>' +
        '</div>' +
        '<div class="tab-pane fade" id="pills-pages" role="tabpanel" aria-labelledby="pills-pages-tab">' +
        '<div class="form-group mb-0">' +
        '<div class="switch switch-primary d-inline m-r-10">' +
        '<input type="checkbox" id="theme-rtl">' +
        '<label for="theme-rtl" class="cr"></label>' +
        '</div>' +
        '<label>RTL</label>' +
        '</div>' +
        '<div class="form-group mb-0">' +
        '<div class="switch switch-primary d-inline m-r-10">' +
        '<input type="checkbox" id="menu-fixed" checked>' +
        '<label for="menu-fixed" class="cr"></label>' +
        '</div>' +
        '<label>Menu Fixed</label>' +
        '</div>' +
        '<div class="form-group mb-0">' +
        '<div class="switch switch-primary d-inline m-r-10">' +
        '<input type="checkbox" id="header-fixed">' +
        '<label for="header-fixed" class="cr"></label>' +
        '</div>' +
        '<label>Header Fixed</label>' +
        '</div>' +
        '<div class="form-group mb-0">' +
        '<div class="switch switch-primary d-inline m-r-10">' +
        '<input type="checkbox" id="box-layouts">' +
        '<label for="box-layouts" class="cr"></label>' +
        '</div>' +
        '<label>Box Layouts</label>' +
        '</div>' +

        '</div>' +
        '<div class="tab-pane fade" id="pills-extra" role="tabpanel" aria-labelledby="pills-extra-tab">' +
        '<h6>Menu Dropdown Icon</h6>' +
        '<div class="theme-color">' +
        '<div class="form-group d-inline">' +
        '<div class="radio radio-primary d-inline">' +
        '<input type="radio" name="radio-in-1" id="drpicon-1" checked onchange="drpicon(\'style1\')">' +
        '<label for="drpicon-1" class="cr"><i class="feather icon-chevron-right"></i></label>' +
        '</div>' +
        '</div>' +
        '<div class="form-group d-inline">' +
        '<div class="radio radio-primary d-inline">' +
        '<input type="radio" name="radio-in-1" id="drpicon-2" onchange="drpicon(\'style2\')">' +
        '<label for="drpicon-2" class="cr"><i class="feather icon-chevrons-right"></i></label>' +
        '</div>' +
        '</div>' +
        '<div class="form-group d-inline">' +
        '<div class="radio radio-primary d-inline">' +
        '<input type="radio" name="radio-in-1" id="drpicon-3" onchange="drpicon(\'style3\')">' +
        '<label for="drpicon-3" class="cr"><i class="feather icon-plus"></i></label>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<h6>Menu List Icon</h6>' +
        '<div class="theme-color">' +
        '<div class="form-group d-inline">' +
        '<div class="radio radio-primary d-inline">' +
        '<input type="radio" name="radio-in" id="subitem-1" checked onchange="menuitemicon(\'style1\')">' +
        '<label for="subitem-1" class="cr"><i class=" "> </i>     </label>' +
        '</div>' +
        '</div>' +
        '<div class="form-group d-inline">' +
        '<div class="radio radio-primary d-inline">' +
        '<input type="radio" name="radio-in" id="subitem-2" onchange="menuitemicon(\'style2\')">' +
        '<label for="subitem-2" class="cr"><i class="feather icon-minus"></i></label>' +
        '</div>' +
        '</div>' +
        '<div class="form-group d-inline">' +
        '<div class="radio radio-primary d-inline">' +
        '<input type="radio" name="radio-in" id="subitem-3" onchange="menuitemicon(\'style3\')">' +
        '<label for="subitem-3" class="cr"><i class="feather icon-check"></i></label>' +
        '</div>' +
        '</div>' +
        '<div class="form-group d-inline">' +
        '<div class="radio radio-primary d-inline">' +
        '<input type="radio" name="radio-in" id="subitem-4" onchange="menuitemicon(\'style4\')">' +
        '<label for="subitem-4" class="cr"><i class="icon feather icon-corner-down-right"></i></label>' +
        '</div>' +
        '</div>' +
        '<div class="form-group d-inline">' +
        '<div class="radio radio-primary d-inline">' +
        '<input type="radio" name="radio-in" id="subitem-5" onchange="menuitemicon(\'style5\')">' +
        '<label for="subitem-5" class="cr"><i class="icon feather icon-chevrons-right"></i></label>' +
        '</div>' +
        '</div>' +
        '<div class="form-group d-inline">' +
        '<div class="radio radio-primary d-inline">' +
        '<input type="radio" name="radio-in" id="subitem-6" onchange="menuitemicon(\'style6\')">' +
        '<label for="subitem-6" class="cr"><i class="icon feather icon-chevron-right"></i></label>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<h6>Active Color</h6>' +
        '<div class="theme-color active-color small">' +
        '<a href="#!" class=" active" data-value="active-default"></a>' +
        '<a href="#!" class="" data-value="active-blue"></a>' +
        '<a href="#!" class="" data-value="active-red"></a>' +
        '<a href="#!" class="" data-value="active-purple"></a>' +
        '<a href="#!" class="" data-value="active-lightblue"></a>' +
        '<a href="#!" class="" data-value="active-dark"></a>' +
        '</div>' +
        '<h6>Menu Title Color</h6>' +
        '<div class="theme-color title-color small">' +
        '<a href="#!" class=" active" data-value="title-default"></a>' +
        '<a href="#!" class="" data-value="title-blue"></a>' +
        '<a href="#!" class="" data-value="title-red"></a>' +
        '<a href="#!" class="" data-value="title-purple"></a>' +
        '<a href="#!" class="" data-value="title-lightblue"></a>' +
        '<a href="#!" class="" data-value="title-dark"></a>' +
        '</div>' +
        '<div class="form-group mb-0">' +
        '<div class="switch switch-primary d-inline m-r-10">' +
        '<input type="checkbox" id="caption-hide">' +
        '<label for="caption-hide" class="cr"></label>' +
        '</div>' +
        '<label>Menu Title Hide</label>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>');
    setTimeout(function () {
        document.querySelector('#pills-cust-tabContent').style.cssText = `
            height: calc(100vh - 430px);
            position: relative;
        `;
        var px = new PerfectScrollbar('#pills-cust-tabContent', {
            wheelSpeed: .5,
            swipeEasing: 0,
            suppressScrollX: !0,
            wheelPropagation: 1,
            minScrollbarLength: 40,
        });
    }, 400);
    // =========================================================
    // ==================    Menu Customizer Start   ===========
    // =========================================================
    // open Menu Styler
    var pctoggle = document.querySelector("#styleSelector > .style-toggler");
    if (pctoggle) {
        pctoggle.addEventListener('click', function () {
            if (!document.querySelector("#styleSelector").classList.contains('open')) {
                document.querySelector("#styleSelector").classList.add("open");
            } else {
                document.querySelector("#styleSelector").classList.remove("open");
            }
        });
    }
    // // layout types
    var layouttypes = document.querySelectorAll(".layout-type > a");
    for (var h = 0; h < layouttypes.length; h++) {
        var c = layouttypes[h];
        c.addEventListener('click', function (event) {
            document.querySelector(".layout-type > a.active").classList.remove("active");
            var targetElement = event.target;
            if (targetElement.tagName == "SPAN") {
                targetElement = targetElement.parentNode;
            }
            targetElement.classList.add("active");
            var temp = targetElement.getAttribute('data-value');
            document.querySelector('head').insertAdjacentHTML("beforeend", '<link rel="stylesheet" class="layout-css" href="">');
            if (temp == "menu-dark") {
                removeClassByPrefix(document.querySelector(".pcoded-navbar"), 'menu-');
                document.querySelector(".pcoded-navbar").classList.add('navbar-dark');
            }
            if (temp == "menu-light") {
                removeClassByPrefix(document.querySelector(".pcoded-navbar"), 'menu-');
                document.querySelector(".pcoded-navbar").classList.remove(('navbar-dark'));
                document.querySelector(".pcoded-navbar").classList.add(temp);
            }
            if (temp == "reset") {
                location.reload();
            }
            if (temp == "dark") {
                removeClassByPrefix(document.querySelector(".pcoded-navbar"), 'menu-');
                document.querySelector(".pcoded-navbar").classList.add("navbar-dark");
                document.querySelector(".layout-css").setAttribute('href', '/static/assets/css/layouts/dark.css');
            } else {
                document.querySelector(".layout-css").setAttribute('href', '');
            }
        });
    }
    // // Header Color
    var headercolor = document.querySelectorAll(".header-color > a");
    for (var h = 0; h < headercolor.length; h++) {
        var c = headercolor[h];
        c.addEventListener('click', function (event) {
            document.querySelector(".header-color > a.active").classList.remove("active");
            var targetElement = event.target;
            if (targetElement.tagName == "SPAN") {
                targetElement = targetElement.parentNode;
            }
            targetElement.classList.add("active");
            var temp = targetElement.getAttribute('data-value');
            if (temp == "header-default") {
                removeClassByPrefix(document.querySelector(".pcoded-header"), 'header-');
            } else {
                removeClassByPrefix(document.querySelector(".pcoded-header"), 'header-');
                document.querySelector(".pcoded-header").classList.add(temp);
            }
        });
    }
    // // Menu Color
    var menucolor = document.querySelectorAll(".navbar-color > a");
    for (var h = 0; h < menucolor.length; h++) {
        var c = menucolor[h];
        c.addEventListener('click', function (event) {
            document.querySelector(".navbar-color > a.active").classList.remove("active");
            var targetElement = event.target;
            if (targetElement.tagName == "SPAN") {
                targetElement = targetElement.parentNode;
            }
            targetElement.classList.add("active");
            var temp = targetElement.getAttribute('data-value');
            if (temp == "navbar-default") {
                removeClassByPrefix(document.querySelector(".pcoded-navbar"), 'navbar-');
            } else {
                removeClassByPrefix(document.querySelector(".pcoded-navbar"), 'navbar-');
                document.querySelector(".pcoded-navbar").classList.add(temp);
            }
        });
    }
    // // Active Color
    var activecolor = document.querySelectorAll(".active-color > a");
    for (var h = 0; h < activecolor.length; h++) {
        var c = activecolor[h];
        c.addEventListener('click', function (event) {
            document.querySelector(".active-color > a.active").classList.remove("active");
            var targetElement = event.target;
            if (targetElement.tagName == "SPAN") {
                targetElement = targetElement.parentNode;
            }
            targetElement.classList.add("active");
            var temp = targetElement.getAttribute('data-value');
            if (temp == "active-default") {
                removeClassByPrefix(document.querySelector(".pcoded-navbar"), 'active-');
            } else {
                removeClassByPrefix(document.querySelector(".pcoded-navbar"), 'active-');
                document.querySelector(".pcoded-navbar").classList.add(temp);
            }
        });
    }
    // // rtl layouts
    var rtllayout = document.querySelector("#theme-rtl");
    rtllayout.addEventListener('click', function () {
        document.querySelector('head').insertAdjacentHTML("beforeend", '<link rel="stylesheet" class="rtl-css" href="">');
        if (rtllayout.checked) {
            document.querySelector(".rtl-css").setAttribute('href', '../assets/css/layouts/rtl.css');
        } else {
            document.querySelector(".rtl-css").setAttribute('href', '');
        }
    });
    // // Menu Fixed
    var Menufixed = document.querySelector("#menu-fixed");
    Menufixed.addEventListener('click', function () {
        if (Menufixed.checked) {
            document.querySelector(".pcoded-navbar").classList.remove("menupos-static");
        } else {
            document.querySelector(".pcoded-navbar").classList.add("menupos-static");
            setTimeout(function () {
                document.querySelector('.navbar-content').style.cssText = `
                    overflow: visible;
                    height: calc(100% - 70px);
                `;
            }, 400);
        }
    });
    // // Header Fixed
    var Headerfixed = document.querySelector("#header-fixed");
    Headerfixed.addEventListener('click', function () {
        if (Headerfixed.checked) {
            document.querySelector(".pcoded-header").classList.add("headerpos-fixed");
            document.querySelector(".pcoded-header").classList.add("header-blue");
            document.querySelector(".header-color > a.active").classList.remove("active");
            document.querySelector(".header-color > a[data-value='header-blue']").classList.add("active");
        } else {
            document.querySelector(".pcoded-header").classList.remove("headerpos-fixed");
        }
    });
    // // Menu Icon Color
    var Menuicon = document.querySelector("#icon-colored");
    Menuicon.addEventListener('click', function () {
        if (Menuicon.checked) {
            document.querySelector(".pcoded-navbar").classList.add("icon-colored");
        } else {
            document.querySelector(".pcoded-navbar").classList.remove("icon-colored");
        }
    });
    // // Box layouts
    var boxlayout = document.querySelector("#box-layouts");
    boxlayout.addEventListener('click', function () {
        if (boxlayout.checked) {
            document.querySelector("body").classList.add("container");
            document.querySelector("body").classList.add("box-layout");
        } else {
            document.querySelector("body").classList.remove("container");
            document.querySelector("body").classList.remove("box-layout");
        }
    });
    // // Caption Hide
    var captionhide = document.querySelector("#caption-hide");
    captionhide.addEventListener('click', function () {
        if (captionhide.checked) {
            document.querySelector(".pcoded-navbar").classList.add("caption-hide");
        } else {
            document.querySelector(".pcoded-navbar").classList.remove("caption-hide");
        }
    });

    // // Menu image background
    var Menuimage = document.querySelectorAll(".navbar-images > a");
    for (var h = 0; h < Menuimage.length; h++) {
        var c = Menuimage[h];
        c.addEventListener('click', function (event) {
            if (!!document.querySelector('.navbar-images > a.active')) {
                document.querySelector(".navbar-images > a.active").classList.remove("active");
            }
            var targetElement = event.target;
            if (targetElement.tagName == "SPAN") {
                targetElement = targetElement.parentNode;
            }
            targetElement.classList.add("active");
            var temp = targetElement.getAttribute('data-value');
            removeClassByPrefix(document.querySelector(".pcoded-navbar"), 'menu-');
            removeClassByPrefix(document.querySelector(".pcoded-navbar"), 'navbar-image-');
            document.querySelector(".pcoded-navbar").classList.add(temp);
        });
    }
    // // title Color
    var activecolor = document.querySelectorAll(".title-color > a");
    for (var h = 0; h < activecolor.length; h++) {
        var c = activecolor[h];
        c.addEventListener('click', function (event) {
            document.querySelector(".title-color > a.active").classList.remove("active");
            var targetElement = event.target;
            if (targetElement.tagName == "SPAN") {
                targetElement = targetElement.parentNode;
            }
            targetElement.classList.add("active");
            var temp = targetElement.getAttribute('data-value');
            if (temp == "title-default") {
                removeClassByPrefix(document.querySelector(".pcoded-navbar"), 'title-');
            } else {
                removeClassByPrefix(document.querySelector(".pcoded-navbar"), 'title-');
                document.querySelector(".pcoded-navbar").classList.add(temp);
            }
        });
    }
    // // brand Color
    var brandcolor = document.querySelectorAll(".brand-color > a");
    for (var h = 0; h < brandcolor.length; h++) {
        var c = brandcolor[h];
        c.addEventListener('click', function (event) {
            document.querySelector(".brand-color > a.active").classList.remove("active");
            var targetElement = event.target;
            if (targetElement.tagName == "SPAN") {
                targetElement = targetElement.parentNode;
            }
            targetElement.classList.add("active");
            var temp = targetElement.getAttribute('data-value');
            if (temp == "brand-default") {
                removeClassByPrefix(document.querySelector(".pcoded-navbar"), 'brand-');
            } else {
                removeClassByPrefix(document.querySelector(".pcoded-navbar"), 'brand-');
                document.querySelector(".pcoded-navbar").classList.add(temp);
            }
        });
    }
    // ==================    Menu Customizer End   =============
    // =========================================================
});
// Menu Dropdown icon
function drpicon(temp) {
    if (temp == "style1") {
        removeClassByPrefix(document.querySelector(".pcoded-navbar"), 'drp-icon-');
    } else {
        removeClassByPrefix(document.querySelector(".pcoded-navbar"), 'drp-icon-');
        document.querySelector(".pcoded-navbar").classList.add('drp-icon-' + temp);
    }
}
// Menu subitem icon
function menuitemicon(temp) {
    if (temp == "style1") {
        removeClassByPrefix(document.querySelector(".pcoded-navbar"), 'menu-item-icon-');
    } else {
        removeClassByPrefix(document.querySelector(".pcoded-navbar"), 'menu-item-icon-');
        document.querySelector(".pcoded-navbar").classList.add('menu-item-icon-' + temp);
    }
}

function removeClassByPrefix(node, prefix) {
    for (let i = 0; i < node.classList.length; i++) {
        let value = node.classList[i];
        if (value.startsWith(prefix)) {
            node.classList.remove(value);
        }
    }
}
 //We handle our user interaction here.
 themeSwitch.addEventListener('change', function() {
    
    if (this.checked) {
        changeMode(0)
    } else {
        changeMode(1)
    }
});
