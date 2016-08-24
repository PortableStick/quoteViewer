import $ from 'jquery';
import handlebars from 'handlebars';

$(document).ready(() => {
    const quoteTemplate = handlebars.compile($(''))
    getData().then(data => {
        $('#quote').html(quoteTemplate(data));
    }).catch(error => {

    });
});

function getData() {
    return $.get('http://localhost:9000/quote');
}