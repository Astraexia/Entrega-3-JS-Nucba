const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", " Tomate", " Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", " Tomate", " Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      " Tomate",
      " Queso Azul",
      " Parmesano",
      " Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", " Tomate", " Rucula", " Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", " Tomate", " Anana"],
    imagen: "./img/anana.png",
  },
];

const LS_DATOS = "LS_DATOS";
const container = document.querySelector(".container");
const inputNumber = document.querySelector("#input-number");
const containerError = document.querySelector(".container-error");


const error = (msj) => {

  container.innerHTML = "";

  inputNumber.classList.add("msj-error");

  containerError.innerHTML = "";
  
  const small = document.createElement("small");
  small.classList.add("msj-error");
  small.innerText = msj;

  containerError.appendChild(small);
}


 const mostrarPizza = (pizza) => {
   
  container.innerHTML = "";

  const div = document.createElement("div");
           div.classList.add("container-pizza");
        
            const h3 = document.createElement("h3");
            h3.classList.add("nombre-pizza");
            h3.innerText = pizza.nombre;
    
            const img = document.createElement("img");
            img.classList.add("imagen-pizza");
            img.src = pizza.imagen;
    
            const p = document.createElement("p");
            p.classList.add("precio-pizza");
            p.textContent = "$" + pizza.precio;

            const ingredientes = document.createElement("p");
            ingredientes.classList.add("ingredientes");
            ingredientes.innerText = `Ingredientes: ${pizza.ingredientes}.`;

            container.appendChild(div);
            div.appendChild(h3);
            div.appendChild(img);
            div.appendChild(p);
            div.appendChild(ingredientes);

 }

 const buscarPizza = () => {

    let number = inputNumber.value;
    inputNumber.classList.remove("msj-error");
    containerError.innerHTML = "";

    if (number.trim() === ""){
      error("Por favor ingresa un numero");
      return;
    }

    for (let i = 0; i < pizzas.length; i++) {
      const pizza = pizzas[i];
      if (pizza.id == number) {
        mostrarPizza(pizza);
            localStorage.setItem(LS_DATOS,JSON.stringify(pizza));
            return;
      }
    }
    error("No se encontro ninguna pizza con ese numero");
} 

init = () => {
  const pizzaString = localStorage.getItem(LS_DATOS);
  if(pizzaString !== null){
    const pizza = JSON.parse(pizzaString);
    mostrarPizza(pizza);
  }
}

init();