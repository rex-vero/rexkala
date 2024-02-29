const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const search = document.getElementById('search').value.toLowerCase();
    const searchDiv = document.getElementById('searcher');
    searchDiv.innerHTML = '';
    fetch('https://fakestoreapi.com/products').then(res => { return res.json() }).then(data => {
        data.map(item => {
            if (item.title.toLowerCase().includes(search)) {
                searchDiv.classList.remove('d-none');
                const cards = document.createElement('div');
                cards.classList.add('d-flex');
                cards.innerHTML = `
            <a href="./pages/account.html"
            class="text-decoration-none white">
            <img src="${item.image}" class="img-fluid w-25 card-img-top">
            <div class="card-body text-center">
                    <h4 class="card-title">${item.title}</h4>
            </div>
            <div class="card-footer">
                <small class="text-body-secondary">Buy Now ${item.price}$ </small>
            </div>
            </a>`;
                searchDiv.append(cards);
            }
            // else have problem
        })
    })
});
fetch('https://fakestoreapi.com/products').then(res => { return res.json() }).then(data => {
    data.map(item => {
        const here = document.getElementById('here');
        const cards = document.createElement('div');
        cards.classList.add('d-flex');
        cards.innerHTML = `
    <a href="./pages/account.html"
    class="text-decoration-none white">
    <img src="${item.image}" class="img-fluid w-25 card-img-top">
    <div class="card-body text-center">
            <h4 class="card-title">${item.title}</h4>
    </div>
    <div class="card-footer">
        <small class="text-body-secondary">Buy Now ${item.price}$ </small>
    </div>
    </a>`;
        here.appendChild(cards);
    })
})