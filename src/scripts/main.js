import $ from 'jquery';
import handlebars from 'handlebars';

$(document).ready(() => {
    const quoteTemplate = handlebars.compile($('#quote-template').html()),
        errorTemplate = handlebars.compile($('#error-template').html());
    $('#quote-button').on('click', getData);
    getData();
    function getData(event) {
        if(event) {
            event.preventDefault();
        }

        $.get('http://localhost:9000/quote').then(data => {
            $('#quote').html(quoteTemplate(data));
        }).catch(error => {
            $('#quote').html(errorTemplate(error));
        });
}
}).ajaxStart(() => {
    $('#loader').show();
    $('#quote-button').hide();
    $('#quote').hide();
}).ajaxStop(() => {
    $('#loader').hide();
    $('#quote-button').show();
    $('#quote').show();
});

