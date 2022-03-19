  
  // Esto es un ejemplo para consumir el api
  
  let tbody = document.querySelector("#bodyData")

  fetch("https://rickandmortyapi.com/api/character")
  .then(res => res.json())
  .then(data => {

    let rowData = data.results.map(item => {

    return `<tr>
              <td>${item.name}</td>
              <td>${item.species}</td>
              <td>${item.gender}</td>
              <td><img src="${item.image}"></td>
            </tr>`
    }).join('')
    
    tbody.innerHTML = rowData


  })



  


  



