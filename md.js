// set confirmation
var con = false;
// Set title
var tit = undefined;
var loc = undefined;

// Start by suggesting to add selected test
var select = window.getSelection().toString();
if (select) {
    if (confirm("Use '" + select + "' as a title ? ")) {
        tit = select;
    }
}

// If still no title, try <title>
if (tit === undefined) {
    var titleq = document.querySelector("title");
    if (titleq && confirm("Use '" + titleq.innerText + "' as a title ? ")) {
        tit = titleq.innerText;
    }
}

// If still no title, try h1
if (tit === undefined) {
    var titleq = document.querySelector("h1");
    if (titleq && confirm("Use '" + titleq.innerText + "' as a title ? ")) {
        tit = titleq.innerText;
    }
}

// If still no title, prompt
if (tit === undefined) {
    tit = prompt("Enter the title manually:");
}

// Suggest location with query params
var select = window.location.href.split('?')[0]
if (select) {
    if (confirm("Use '" + select + "' as a url ? ")) {
        loc = select;
    }
}

// If not confirmed, try without split
var select = window.location.href
if (loc === undefined) {
    if (confirm("Use '" + select + "' as a url ? ")) {
        loc = select;
    }
}

// If still no loc, prompt
if (loc === undefined) {
    loc = prompt("Enter the url manually:");
}

var md = "[" + tit + "](" + loc + ")";

if (confirm("Copy to clipboard?")) {
    chrome.runtime.sendMessage({ md }, function(response) {
        console.log(response);
    });
    alert("Copied!");
} else {
    alert(md);
};
