const scriptURL = 'https://script.google.com/macros/s/AKfycbxdPWuA-CenlhV7TvNsEH9E_atzP5L_xaj5M8j_tJeE0mDbPbnvcymgb-6ZJPycQg/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Your Enquiry Has Been Listed"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 3000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

ans = confirm("Our Website Is Not Available For Your Phone. Please Make Sure That You Are Using PC / Laptop");
console.log(ans);

document.addEventListener("contextmenu",function(x){
    x.preventDefault()
},false);