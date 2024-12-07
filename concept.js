function performTask1() {
    alert('Task 1: You clicked the first button!');
}

function performTask2() {
    document.body.style.backgroundColor = 'lightblue';
}

function performTask3() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Loading data...';

    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => {
            resultDiv.innerHTML = 'Error fetching data.';
            console.error('Error:', error);
        });
}
