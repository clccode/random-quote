$(document).ready(function() {
    randomQuote();
})

function randomQuote() {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?",
    function(data) {
        var text = '<em>"' + data.quoteText + '"</em>';
        var author = '- ' + data.quoteAuthor;

        if (data.quoteAuthor === "") {
            author = '- Unknown';
        }

        document.getElementById('text').innerHTML = text;
        document.getElementById('author').innerHTML= author;
    });
}

$("#new-quote").on("click", function(e) {
    e.preventDefault();
    randomQuote();
})