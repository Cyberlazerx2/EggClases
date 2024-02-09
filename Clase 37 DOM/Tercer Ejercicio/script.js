const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.innerHTML = `
<p style="color:red"> Hey soy rojo!</p>
<h3 style="color:blue"> Soy un h3 Azul!</h3>
<div style=" border: 3px solid black; background-color: pink  " >
    <h1>Estoy dentro de un div!</h1>
    <p>YO TAMBIEN!</p>
</div>
`;

container.appendChild(content);


