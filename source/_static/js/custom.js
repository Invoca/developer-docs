window.onload =
    function () {
        $('#welcome-to-the-invoca-developer-portal table.home-page.docutils tr a img').each(function (index, element) {
            var $link = $(this).parent('a');
            $link.closest('tr').click(function () {
                $link[0].click();
            });
        });
    };

window.addEventListener('load', function () {
    document.querySelectorAll(".opblock-summary-description").forEach(function (el) {
        el.textContent = "";
    });

    document.querySelectorAll(".opblock-summary-path").forEach(function (el) {
        el.style.width = '100%';
    });
}, false);