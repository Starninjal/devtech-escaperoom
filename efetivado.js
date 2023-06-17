

function extractPageNumberFromUrl(url) {
    const regex = /page(\d+)\.html/;
    const matches = url.match(regex);
    if (matches && matches.length > 1) {
        return parseInt(matches[1]);
    }
    return null;
}

function goToNextQuestion() {
    const currentPageNumber = extractPageNumberFromUrl(document.referrer);
    if (currentPageNumber !== null) {
        const nextPageNumber = currentPageNumber + 1;
        const nextPageUrl = `page${nextPageNumber}.html`;
        alert(nextPageUrl)
        window.location.href = nextPageUrl;
    }
}


