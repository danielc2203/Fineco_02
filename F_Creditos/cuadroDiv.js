function cuadroDiv(nombreF, ColorF, iconoF){
    // 1. Crear un nuevo elemento div
    const cuadroDiv = document.createElement('div');
    cuadroDiv.classList.add('col-sm-4'); // 2. Agregar la clase "col-sm-4"
    cuadroDiv.classList.add('small-box', 'bg-maroon', 'text-center'); // 3. Agregar la clase "small-box bg-maroon text-center"
    cuadroDiv.id = nombreF;// 4. Agregar el id "casur"
    const innerDiv = document.createElement('div');// 5. Crear un elemento div con clase "inner"
    innerDiv.classList.add('inner');
    const h3 = document.createElement('h3');// Agregar los elementos h3 y h4 al div inner
    h3.textContent = nombreF;
    innerDiv.appendChild(h3);
    const h4 = document.createElement('h4');
    h4.textContent = 'Calculadora';
    innerDiv.appendChild(h4);
    const iconDiv = document.createElement('div');// 6. Crear un elemento div con clase "icon"
    iconDiv.classList.add('icon');
    const icon = document.createElement('i');// Agregar el icono deseado al div icon
    icon.classList.add('fas', iconoF);
    iconDiv.appendChild(icon);
    const a = document.createElement('a');// 7. Crear un elemento a con clase "small-box-footer"
    a.classList.add('small-box-footer');
    a.textContent = 'Calcular ';// Agregar el texto y el icono al elemento a
    const icon2 = document.createElement('i');
    icon2.classList.add('fas', 'fa-calculator');
    a.appendChild(icon2);
    cuadroDiv.appendChild(innerDiv);// 8. Agregar los elementos creados a su respectivo padre
    cuadroDiv.appendChild(iconDiv);
    cuadroDiv.appendChild(a);
    // 9. Agregar el nuevo elemento div al final de la sección con id "calculadoras"
    const calculadorasDiv = document.getElementById('calculadoras');
    calculadorasDiv.appendChild(cuadroDiv);

}