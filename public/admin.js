
   document.getElementById('apiForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const data = {
        name: document.getElementById('name').value,
        description: document.getElementById('description').value,
        price: document.getElementById('price').value,
        image_url: document.getElementById('image_url').value
    };

    fetch('/api/v1/add-menu', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});


document.getElementById('apiForm2').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const data = {
        name: document.getElementById('name-event').value,
        location: document.getElementById('location').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value
    };

    fetch('/api/v1/add-event', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});