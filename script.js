document.addEventListener('DOMContentLoaded', () => {
    const attractions = [
        { name: "Padmanabhaswamy Temple", description: "One of the richest and most famous temples in India." },
        { name: "Kovalam Beach", description: "A famous beach known for its scenic beauty and crescent-shaped coastline." },
        { name: "Napier Museum", description: "A 19th-century art and natural history museum." },
        { name: "Shanghumukham Beach", description: "A popular beach near the city known for its sunset views." },
        { name: "Kerala Science and Technology Museum", description: "An interactive museum with science and technology exhibits." },
    ];

    const attractionsList = document.getElementById('attractions-list');

    attractions.forEach(attraction => {
        const attractionDiv = document.createElement('div');
        attractionDiv.className = 'attraction';

        const attractionName = document.createElement('h3');
        attractionName.textContent = attraction.name;

        const attractionDescription = document.createElement('p');
        attractionDescription.textContent = attraction.description;

        attractionDiv.appendChild(attractionName);
        attractionDiv.appendChild(attractionDescription);

        attractionsList.appendChild(attractionDiv);
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Thank you, ${name}. We have received your message.`);
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
