const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const userName = document.querySelector('.name');                        // I've not seen these characters "$" before in a declared variable It is better to rename all of them and use getelementbyid
const nameBlog = document.querySelector('.blog');                        // Use class selector in both cases
const userLocation = document.querySelector('.location');

async function displayUser(username) {
  userName.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();                                   // Add this line to convert the raw data to object with json method
  console.log(data);
  userName.textContent = data.name;                                     // Deleted template literals, we need to acces to the object attributes and values
  nameBlog.textContent = data.blog;                                     // Deleted template literals
  userLocation.textContent = data.location;                             // Deleted template literals
}
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  nameBlog.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);