const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

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
})