const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const userName = document.querySelector('name');                        // I've not seen these characters "$" before in a declared variable It is better to rename all of them 
const nameBlog = document.querySelector('#blog');
const userLocation = document.querySelector('.location');

async function displayUser(username) {
  userName.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  userName.textContent = '${data.name}';
  nameBlog.textContent = '${data.blog}';
  userLocation.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);