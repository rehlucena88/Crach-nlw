/*variavel global pode ser usada em todo o codigo e nao deixa de existir*/
const linksSocialMedia = {
    github: "rehlucena88",
    youtube: "vMcreIuMg_faMgqbghSS4Q",
    facebook: "renato.lucena.37",
    instagram: "renato.lucena.37",
}

/*usado o for nessa funçao, quando o codigo faz a leitura ele vai no elemento ul e verifica se tem uma li se tem ele guarda o link dentro do for e pergunta novamente.*/
function changeSocialMediaLinks(){
  for (let li of socialLinks.children){
    const social = li.getAttribute('class') /* a const dente de uma funçao só existe por escopo por isso ela é mutavel enquanto o for existir ela axiste */
  li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`  
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
   const url = `https://api.github.com/users/${linksSocialMedia.github}`
    
    fetch(url) /*o fetch pega a informaçao como um objeto*/
     .then(response => response.json() ) /*esse then transforma as inforçoes em jason*/
     .then(data =>  {
         userName.textContent = data.name
         userBio.textContent = data.bio
         userLink.href = data.html_url
         userPhoto.src = data.avatar_url
         userLogin.textContent = data.login
     }) /**/
    
}

getGitHubProfileInfos()