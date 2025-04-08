document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subjectt = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    if(name === '' || email === '' || subject === ''  || message === '') {
        alert('ကျေးဇူးပြု၍ အချက်အလက်ဖြည့်ပါ');
    } else {
        // Here you can add code to process the payment
        alert('ပေးပို့မှုအောင်မြင်ပါသည်');
        document.getElementById('contactForm').reset();
    }
});
