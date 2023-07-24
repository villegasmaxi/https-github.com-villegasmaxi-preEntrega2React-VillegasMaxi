const list = [
  {
    id: "01",
    category: "comida",
    name: "Picada",
    stock: 25,
    price: 1200,
    description:
      "Embutiods de exportación para disfrutar de una picada con amigos ",
    img: "https://i.postimg.cc/k4gTHfsT/picada.jpg",
  },
  {
    id: "02",
    category: "comida",
    name: "Entrada",
    stock: 20,
    price: 2400,
    description: "Variedad de entradas día a día, consulta la carta",
    img: "https://i.postimg.cc/sgK1Q4tz/entrada.jpg",
  },
  {
    id: "03",
    name: "Pastas",
    category: "comida",
    stock: 20,
    price: 800,
    description: "Pastas caseras con las mejores salsas ",
    img: "https://i.postimg.cc/fyXJVnhq/pastas.jpg",
  },
  {
    id: "04",
    name: "Plato del dia",
    category: "comida",
    stock: 40,
    price: 500,
    description: "Consultá la carta semanal de variedades ",
    img: "https://i.postimg.cc/m2fP0DQv/plato-del-dia.jpg",
  },
  {
    id: "05",
    name: "Parrillada",
    category: "comida",
    stock: 10,
    price: 500,
    description: "Las mejores carnes argentinas ",
    img: "https://i.postimg.cc/8krFKWrd/parrillada.jpg",
  },
  {
    id: "06",
    name: "Sushi",
    category: "comida",
    stock: 15,
    price: 500,
    description: "Barco de sushi 40 pcs",
    img: "https://i.postimg.cc/MpzvpF3t/sushi.jpg",
  },
  {
    id: "07",
    name: "Postre",
    category: "postre",
    stock: 20,
    price: 500,
    description: "Variedad de postres europeos",
    img: "https://i.postimg.cc/cJbHT4x5/volcan-de-chocolate.jpg",
  },
  {
    id: "08",
    name: "Café",
    category: "cafe",
    stock: 30,
    price: 500,
    description: "Café de autor",
    img: "https://i.postimg.cc/02Yzxsnb/cafe.jpg",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    let error = false;
    setTimeout(() => {
      if (error) {
        reject("no hay data");
      } else resolve(list);
    }, 2000);
  });
};
 export const getItem = (id) =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(list.find((item)=> item.id === id))
        },2000)
    })
 }