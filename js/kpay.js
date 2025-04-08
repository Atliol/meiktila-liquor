document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let phonenumber = document.getElementById('phonenumber').value;
    let amount = document.getElementById('amount').value;
    let opt = document.getElementById('opt').value;

    if(phonenumber === '' || amount === '' || opt === '') {
        alert('ကျေးဇူးပြု၍ အချက်အလက်ဖြည့်ပါ');
    } else {
        // Here you can add code to process the payment
        alert('ငွေပေးသွင်းမှု‌အောင်မြင်ပါသည်');
        document.getElementById('paymentForm').reset();
    }
});
