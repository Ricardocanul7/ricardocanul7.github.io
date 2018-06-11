
$(document).ready(function(){
    $.i18n().load({
        en : 'i18n/en.json',
        es : 'i18n/es.json'
    }
    ).done(function() {
        var language = localStorage['lang'];            // initialize variable as the value of localStorage['lang'] that is actually null

        function Initialize(){
            if(localStorage['lang'] == null)
            {
                $.i18n().locale = 'es';                 // Initialize website in spanish
                localStorage.setItem('lang', 'es');     // set StorageData lang = "es"
                language = 'es';                        // update local variable with language = spanish
            }else{
                $.i18n().locale = localStorage['lang'];         // Initialize website in language picked
                $('body').i18n();
                $('html').attr('lang', language);
            }
        }

        Initialize();

        $('.switch-locale').on('click', 'a', function(e) {
            e.preventDefault();
            $.i18n().locale = $(this).data('locale');               // set locale attribute of i18n to the language picked by the user
            localStorage.setItem("lang", $(this).data('locale'));   // set StorageData lang = "{language picked by the user}"
            language = localStorage['lang'];                        // update local variable with language picked by the user
            $('html').attr('lang', language);                       // update html tag with attribute lang = "{language picked by the user}"
            $('body').i18n();                                       // apply translation to the language picked to the tag 'body'
        });
    })
});