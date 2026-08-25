var users = JSON.parse(localStorage.getItem("users")) || [];

var usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado")) || {};

var hi = document.getElementById("hi");
if (hi && usuarioLogado) hi.innerHTML = "Olá " + usuarioLogado?.nome

var list = document.getElementById("list") 
if (list)
    list.innerHTML = JSON.stringify(users,null,4)


var formR = document.getElementById("formRegister");
// get = pegar, elemento = elemento do html
formR?.addEventListener("submit", (e) => {
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

 const modalRegister = document.getElementById("modalRegister");
    modalRegister.classList.remove("flex");
    modalRegister.classList.add("hidden");
    window.location.href = "painel.html"


var formL = document.getElementById("formLogin");
formL?.addEventListener("submit", (e) => {
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
        localStorage.setItem("usuarioLogado", JSON.stringify(user))

        
        window.location.href = "painel.html"
    }else{
        console.log("senha invalida")
    }

})
