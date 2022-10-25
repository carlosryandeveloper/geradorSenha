let sliderElement = document.querySelector('#slider')
let buttonElement = document.querySelector('#button')

let sizePassword = document.querySelector('#valor')
let password = document.querySelector('#password')

let containerPassword = document.querySelector('#container-password')

let charset =   "abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVXYWZ0123456789";

let novaSenha = '';

sizePassword.innerHTML = sliderElement.value; //irá mostrar o valor atual

slider.oninput = function(){  //irá atualizar com a mudança emt empo real, seja para diminuir a quantidade de caracteres ou aumentá-las.
    sizePassword.innerHTML = this.value; //valor que estiver atualmente.
}


//Função para gerar senhas !!!!!
function generationPassword(){
    let pass = '';
    for(let i = 0, n = charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random()*n));
    }
    containerPassword.classList.remove("hide"); //remove a invisilidade colocada na classe no style. tornando um efeito de "aparição" ao clicar em gerar uma senha

    password.innerHTML = pass;

    novaSenha = pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha); //copiar o texto
}