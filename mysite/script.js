// Sample image data (replace with your actual data)
const imageData = [
    {
      id: 1,
      title: "Image 1",
      description: "Lorem ipsum dolor sit amet.",
      imageUrl: "path/to/image1.jpg"
    },
    {
      id: 2,
      title: "Image 2",
      description: "Consectetur adipiscing elit.",
      imageUrl: "path/to/image2.jpg"
    },
    {
      id: 3,
      title: "Image 3",
      description: "Sed do eiusmod tempor incididunt.",
      imageUrl: "path/to/image3.jpg"
    }
  ];
  
  // Function to display image details
  function showImageDetails(image) {
    document.getElementById("image-preview").innerHTML = `<img src="${image.imageUrl}" alt="${image.title}">`;
    document.getElementById("image-title").textContent = image.title;
    document.getElementById("image-description").textContent = image.description;
  }
  
  // Function to handle buy button click
  function buyImage() {
    // Replace with your own logic to handle the purchase
    alert("Thank you for your purchase!");
  }
  
  // Generate image thumbnails
  const imageContainer = document.querySelector(".image-container");
  imageData.forEach(image => {
    const imgElement = document.createElement("img");
    imgElement.src = image.imageUrl;
    imgElement.alt = image.title;
    imgElement.addEventListener("click", () => showImageDetails(image));
    imageContainer.appendChild(imgElement);
  });
  
  // Attach event listener to buy button
  const buyButton = document.getElementById("buy-btn");
  buyButton.addEventListener("click", buyImage);
  // PayPal configuration
paypal.Buttons({
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: '10.00' // Replace with the actual amount you want to charge
          }
        }]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        // Handle a successful payment
        alert('Payment successful!');
      });
    }
  }).render('#buy-btn');
  