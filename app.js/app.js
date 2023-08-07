//Variables
const resultado = document.querySelector("#resultado");


fetch("data.json")
  .then((response) => response.json())
  .then((datos) => {
    console.log(datos);
    let resultadoHTML = "";
    datos.forEach((dato) => {
    
      //   id, company, logo, new, featured, position, role, level, postedAt, contract, location, languages, tools
      resultadoHTML += `
      <div class="card">
      <div class="card-titulo">
        <div class="card-logo">
          <img src="${dato.logo}" alt="" class="logo">
        </div>
        <div class="card-textos">
          <div class="primer-div">
            <p class="card-nombre">${dato.company}</p>
            <p class="new">${dato.neew}</p>
            <p>${dato.featured}</p>
          </div>
          <div>
            <p class="titulo">${dato.position}</p>
          </div>
          <div>
            <p>${dato.postedAt}</p>
            <p>${dato.contract}</p>
            <p>${dato.location}</p>
          </div>
        </div>
      </div>
      <div class="card-etiquetas"></div>
    </div>
      `;

      resultado.innerHTML = resultadoHTML;
    });
  })
  .catch((error) => console.error("Error al cargar los datos:", error));
