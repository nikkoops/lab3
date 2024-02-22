const myEmail = 'albaniaromannikko@gmail.com'

function contact() {
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const message = document.getElementById('message')
    window.open(`mailto:${myEmail}?subject=from ${name} (${email})&body=${message}`);
} 



