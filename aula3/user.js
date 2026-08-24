var users = JSON.parse(localStorage.getItem("users")) || [];

var formR = document.getElementById("formRegister");
// get = pegar, elemento = elemento do html
formR.addEventListener("submit", (e) => {
    e.preventDefault();

    // document é a pagína toda

    let name = document.getElementById("iName").value
    let email = document.getElementById("iEmail").value
    let pass = document.getElementById("iPass").value
    let birth = document.getElementById("iBirth").value

    const user = {
        nome: name,
        email: email,
        senha: pass,
        nascimento: birth
    }
    users.push(user)
    localStorage.setItem("users", JSON.stringify(users))
})

var formL = document.getElementById("formLogin");
formL.addEventListener("submit", (e) => {
    e.preventDefault();

     let email = document.getElementById("iEmailLogin").value;
     let pass = document.getElementById("iPassLogin").value;

    let user = users.find(u => {
        return u.email == email
    })

    if(!user){
        console.log("usúario não encontrado")
    return
    } 

    if(user.senha == pass){
        console.log("usuario logado")
        window.location.href = "painel.html"
    }else{
        console.log("senha invalida")
    }

})