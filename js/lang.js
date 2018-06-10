
$(document).ready(function(){
    $.i18n().load({
        en : 'i18n/en.json',
        es : 'i18n/es.json'
    }
    ).done(function() {
        $('.switch-locale').on('click', 'a', function(e) {
            e.preventDefault();
            $.i18n().locale = $(this).data('locale');
            $('body').i18n();
        });
    })
});