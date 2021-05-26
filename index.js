var firstTime = localStorage['first_time']
let theme = localStorage['theme']
document.getElementById('theme-style').href = `${theme}.css`;
const scriptURL = 'https://script.google.com/macros/s/AKfycbzOmhZrBJwEldnsQ-RxvtpEiaojiJN_v6fSVgij0YsU2JXkSdcRkFdMGDvPaRNoOdqJ/exec'
const form = document.forms['form']


let themeDots = document.getElementsByClassName('theme-dot');
for(var i = 0;themeDots.length > i;i++){
    themeDots[i].addEventListener('click',function(){
        let mode = this.dataset.mode
        localStorage['theme'] = mode
        setTheme(mode);
        console.log('option clcked',mode)
    })
}

function setTheme(mode){
    file = `${mode}.css`;
    document.getElementById('theme-style').href = file;

}

form.addEventListener('submit', e => {
    e.preventDefault()
    if(firstTime == false){
        return;
    }
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        console.log('Success!', response)
        firstTime = false
        alert("Message sent successfully")
      })
      .catch(error => console.error('Error!', error.message))
  })

