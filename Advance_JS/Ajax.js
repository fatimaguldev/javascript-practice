// AJAX stands for Asynchronous JavaScript and XML.
//
// In simple terms, AJAX is not a programming language or a specific tool—it is a technique that allows a webpage to request and load data from a server in the background without reloading the entire page.

// Before AJAX was introduced, if you liked a post, submitted a comment, or searched for a product, the browser had to refresh the entire page to show the updated result.With AJAX, only the specific piece of data changes.


// The "X" in AJAX stands for XML because years ago, servers used to exchange data using XML format. Today, JSON has completely replaced XML, but developers still use the historical name "AJAX" to describe any asynchronous page update.



// The Old Way: XMLHttpRequest

// This was the original way to perform AJAX. It required a lot of clunky boilerplate code and was famous for creating callback hell.

// Legacy AJAX
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://example.com");
xhr.onload = function() {
    console.log(JSON.parse(xhr.responseText));
};
xhr.send();



// The Modern Standard Way: fetch() (Recommended)Modern JavaScript introduced the fetch() API, which uses Promises (exactly what we practiced earlier) to handle AJAX calls in a clean, beautiful way.


// Modern AJAX with Async/Await
async function loadData() {
    const response = await fetch("https://example.com");
    const data = await response.json();
    console.log(data); // Webpage updates using this data
}

