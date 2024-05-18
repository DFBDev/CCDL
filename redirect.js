const form = document.querySelector("form");
const submitButtonHolder = document.querySelector("#submitHolder");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    submitButtonHolder.innerHTML = "Loading...<img id=\"loadingIcon\"src=\"/assets/loadingIcon.svg\" width=\"20\"/>"
    const data = new URLSearchParams(new FormData(form));
    const res = await fetch('https://ts-be.onrender.com/actions/wRiRLhavu8-wuch$dLBI', {method:"POST", body: data});
    const resText = await res.json();

    if (res.status == 200) {
        sessionStorage.setItem("authKey", resText.AUTHCODE);
        window.location.replace(resText.URL);
    }
    else {
        alert("Error: " + resText.status);
    }
    submitButtonHolder.innerHTML = "<input type=\"submit\" id=\"submit\" value=\"Login\">";
})