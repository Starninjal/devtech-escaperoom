let clicksCounter = parseInt(sessionStorage.getItem("clicksCounter")) || 0;

function countClick() {
    clicksCounter++;
    sessionStorage.setItem("clicksCounter", clicksCounter);

    if (clicksCounter >= 3) {
        document.querySelector(".btn-anterior").disabled = true;
        alert("Você já selecionou esse botão " + 3 + " vezes. Esse é o limite, agora você só pode avançar. Boa sorte :)");
    } else {
        window.location.href = document.referrer;
    }
}


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
            if(nextPageUrl == 'page9.html') {
                window.location.href = 'storypage2-1.html'
            } else if(nextPageUrl == 'page5.html') {
                window.location.href = 'storypage1.html'
            } else if(nextPageUrl == 'page17.html'){
                window.location.href = 'pagewin.html'
            } else {
                window.location.href = nextPageUrl;
            }
            
            
        } 
    }


