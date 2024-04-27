console.log("this is script")

let result ={
    "tag": "",
    "free": true,
    "role": false,
    "user": "rachna",
    "email": "rachna@gmail.com",
    "score": 0.48,
    "state": "undeliverable",
    "domain": "gmail.com",
    "reason": "invalid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "format_valid": true
}
submitBtn.addEventListener("click" , async (e)=>{
    e.preventDefault()
    console.log("clicked")
   let key="ema_live_pCL0NNsgFzf9sh038Sh1Qg30SRgpFntVecyTKkAZ"
   let email= document.getElementById("username").value
   let url=`https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
   let res= await fetch(url)
   let result =await res.json()
   let str = ``
   for(key of Object.keys(result)){
    str =str + `<div>${key}: ${result[key]}</div>`
   }
   console.log(str)
   resultCont.innerHTML = str
})