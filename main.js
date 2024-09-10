let stars = document.querySelectorAll(".star");
stars.forEach(element => {
    element.onclick = function() {
        this.classList.toggle("clicked");
        let num=this.innerHTML;
        let button=document.querySelector("button");
        button.onclick=function(){
            button.classList.toggle("clicked");
            setTimeout(() => {
            let body=document.querySelector("section");
            body.innerHTML=`<img class="thankImg" src="./img/illustration-thank-you.svg" alt="thank_you">
            <button class="thankButton">You selected ${num} out of 5 Thank you!</button>
            <h1 class="title">Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch! </p>`
            },500)
        }
    }
});
