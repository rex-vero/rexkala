const search = document.getElementById('search');
search.addEventListener('input', () => {
    const searchDiv = document.getElementById('searcher');
    searchDiv.innerHTML = '';
    fetch('https://fakestoreapi.com/products').then(res => { return res.json() }).then(data => {
        data.map(item => {
            if (item.title.toLowerCase().includes(search.value.toLowerCase())) {
                const cards = document.createElement('div');
                searchDiv.classList.remove('d-none');
                cards.innerHTML = `<a href="#" class="d-flex flex-column text-decoration-none">
                <img src="${item.image}" class="img-fluid img align-self-center">
                <div class="card-body text-center">
                <h5 class="card-title">${item.title}</h5>
                </div>
                <div class="card-footer">
                <small class="text-body-secondary">Buy Now ${item.price}$ </small>
                </div>
                </a>`;
                searchDiv.appendChild(cards);
            }
        })
        if (search.value === '') {
            searchDiv.classList.add('d-none');
        }
    })
});
fetch('https://fakestoreapi.com/products').then(res => { return res.json() }).then(data => {
    data.map(item => {
        const here = document.getElementById('here');
        const cards = document.createElement('div');
        cards.classList.add('d-flex');
        cards.innerHTML = `
        <a href="#"
        class="text-decoration-none">
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