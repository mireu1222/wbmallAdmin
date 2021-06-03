$(function () {
    //checkbox All checked 
    allChecker('.chk-all');
    allChecker('.chk-all2');
});

// checkbox all check
function allChecker(input) {
    var $input = $(input),
        name = $input.attr('name');

    $input.on('change', function () {
        var $this = $(this);
        if ($this.prop("checked")) {
            $('input[name=' + name + ']').prop("checked", true);
        } else {
            $('input[name=' + name + ']').prop("checked", false);
        }
    });

    $('input[name=' + name + ']').each(function () {
        var $this = $(this);

        $this.on('change', function () {
            var total = $('input[name=' + name + ']').length;
            var chked = $('input[name=' + name + ']:checked').not($input).length + 1;
            if (chked == total) {
                $input.prop("checked", true);
            } else {
                $input.prop("checked", false);
            }
        });
    });
}

