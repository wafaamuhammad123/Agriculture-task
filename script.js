document.addEventListener('DOMContentLoaded', function () {
    displayProductDetails();
});

function displayProductDetails() {
    const productDetailsDiv = document.getElementById('product-details');
    const urlParams = new URLSearchParams(window.location.search);//get par from url
    const productName = urlParams.get('name');//retrieve val from url
    const productPrice = urlParams.get('price');
    const productImage = urlParams.get('image'); 

    if (productDetailsDiv && productName && productPrice && productImage) { //check if they're available to retrieve
        productDetailsDiv.innerHTML = `
            <h2>${productName}</h2>
            <img src="${productImage}" alt="${productName}"> 
            <hr>
            <p>Price: $${productPrice}</p>
            <button>add to cart</button>
           
          
        `;
    }
}

function viewProductDetails(productName, productPrice, productImage) {//str to include target pg and data then //to ensure par val passed in url
    const url = 
     `product_details.html?name=${encodeURIComponent(productName)} 
     &price=${encodeURIComponent(productPrice)}
     &image=${encodeURIComponent(productImage)}`;
    window.location.href = url;//to redirect me from my pg to details pg
}
