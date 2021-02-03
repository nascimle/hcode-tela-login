const email = 'leandrovitor52@hotmail.com';




document.querySelector('#form-login').addEventListener('submit', e => {

    e.preventDefault();
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    
    

    let json = {
        email,
        senha
    };

    if(!json.email || !json.senha){


        alert("Os campos e-mail e senha não podem estar vazios");
        

    }

   
});