function googleTranslateElementInit() {
    setTimeout(function () {
        new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
        const event = new CustomEvent("googleTranslateElementInitLoaded", {});
        document.dispatchEvent(event)
    }, 10);
}

require(['Magento_Theme/js/countries'], function (countries) {
    countries.init();
});