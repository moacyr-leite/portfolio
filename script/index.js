const navegacao = document.querySelector('.cabecalho__navegacao');

navegacao.innerHTML = `
    <a href="index.html" class="cabecalho__navegacao__item">Home</a>
    <a href="html/about.html" class="cabecalho__navegacao__item">Sobre Mim</a>
    <a href="html/curiculum.html" class="cabecalho__navegacao__item">Currículo</a>
    <a href="html/myproject.html" class="cabecalho__navegacao__item"></a>
`

fetch('/api/webhook', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        event: 'page_view',
        timestamp: new Date().toISOString(),
    }),
});
