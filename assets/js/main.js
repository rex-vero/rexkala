// fetch('https://fakestoreapi.com/products').then(res => { return res.json() }).then(data => {
//     data.map(item => {
//         const here = document.getElementById('here');
//         const cards = document.createElement('div');
//         cards.setAttribute('id', 'hi')
//         cards.classList.add('d-flex');
//         cards.classList.add('bg');
//         cards.innerHTML = `
//     <a href="./pages/account.html"
//     class="text-decoration-none white">
//     <img src="${item.image}" class="img-fluid w-25 card-img-top">
//     <div class="card-body text-center">
//             <h4 class="card-title">${item.title}</h4>
//     </div>
//     <div class="card-footer">
//         <small class="text-body-secondary">Buy Now ${item.price}$ </small>
//     </div>
//     </a>`;
//         here.appendChild(cards);
//     })
// })