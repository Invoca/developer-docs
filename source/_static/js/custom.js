window.onload =
    function () {
        $('#welcome-to-the-invoca-developer-portal table.home-page.docutils tr a img').each(function (index, element) {
            var $link = $(this).parent('a');
            $link.closest('tr').click(function () {
                $link[0].click();
            });
        });
    };
