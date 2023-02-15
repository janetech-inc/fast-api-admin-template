'use strict';

(function () {
    const d_week = new Datepicker(document.querySelector('#d_week'), {
        buttonClass: 'btn',
    });
})();
(function () {
    const d_highlight = new Datepicker(document.querySelector('#d_highlight'), {
        buttonClass: 'btn',
        daysOfWeekHighlighted: [1],
    });
})();

(function () {
    const d_auto = new Datepicker(document.querySelector('#d_auto'), {
        buttonClass: 'btn',
        autohide: true
    });
})();

(function () {
    const d_disable = new Datepicker(document.querySelector('#d_disable'), {
        buttonClass: 'btn',
        datesDisabled: ["02/18/2022", "02/22/2022"]
    });
})();


// $('#d_toggle').datepicker({
//     keyboardNavigation: false,
//     forceParse: false,
//     toggleActive: true
// });

(function () {
    const d_today = new Datepicker(document.querySelector('#d_today'), {
        buttonClass: 'btn',
        todayHighlight: true
    });
})();

(function () {
    const disp_week = new Datepicker(document.querySelector('#disp_week'), {
        buttonClass: 'btn',
        calendarWeeks: true
    });
})();

(function () {
    const datepicker_range = new DateRangePicker(document.querySelector('#datepicker_range'), {
        buttonClass: 'btn',
    });
})();
