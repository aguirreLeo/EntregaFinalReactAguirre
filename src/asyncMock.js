const products = [
    {
      id: 1,
      name: "Ford Mustang GT",
      price: 65000,
      category: "autos",
      img: "https://fotos.perfil.com/2020/04/06/ford-mustang-gt-50-935793.jpg",
      stock: 5,
      description: "Un clásico deportivo con motor V8 y diseño icónico."
    },
    {
      id: 2,
      name: "Chevrolet Camaro",
      price: 58000,
      category: "autos",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX1MXWv3-z_ERGPO-9rOffvN23YQNB6yMHnQ&s",
      stock: 4,
      description: "Deportivo de alta gama con gran rendimiento y estilo."
    },
    {
      id: 3,
      name: "Tesla Model S",
      price: 80000,
      category: "autos",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5a4EvkxkPWijtgniN4TavHt087a6ng7DE6A&s",
      stock: 3,
      description: "Sedán eléctrico de lujo con autonomía avanzada y alta tecnología."
    },
    {
      id: 4,
      name: "BMW M3",
      price: 70000,
      category: "autos",
      img: "https://www.bmw.com.ar/content/dam/bmw/common/all-models/m-series/m3-sedan/2023/highlights/bmw-3-series-cs-m-automobiles-gallery-impressions-m3-competition-02_1920.jpg.asset.1669650892281.jpg",
      stock: 2,
      description: "Sedán deportivo con potente motor y acabados de lujo."
    },
    {
      id: 5,
      name: "Audi R8",
      price: 140000,
      category: "autos",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShTufDsmVhJQU0lIczsajZXuDCRmnzkw3srQ&s",
      stock: 1,
      description: "Auto deportivo de alto rendimiento con diseño aerodinámico."
    },
    
    {
        id: 6,
        name: "Ford F-150",
        price: 75000,
        category: "camionetas",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2W71Q8PQY6-uQKyvSIrj4Hmv0aIKz6DzqTA&s",
        stock: 5,
        description: "Camioneta pickup robusta y versátil, ideal para trabajo y aventura."
      },
      {
        id: 7,
        name: "Chevrolet Silverado",
        price: 72000,
        category: "camionetas",
        img: "https://vehicle-images.dealerinspire.com/0459-110005032/1GCPDBEK7RZ176240/453c9bf9c405433102119e4028ade8df.jpg",
        stock: 3,
        description: "Potente y confiable, perfecta para carga pesada y terreno difícil."
      },
      {
        id: 8,
        name: "Toyota Hilux",
        price: 60000,
        category: "camionetas",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTreRfCkGShfk2pz-pL8BbCvIiXpex7Ux0tgm-j-4mb492eXYMsnZhn5DjVQZyMdcLv5DY&usqp=CAU",
        stock: 4,
        description: "Camioneta de alto rendimiento, conocida por su durabilidad y resistencia."
      },
      {
        id: 9,
        name: "RAM 1500",
        price: 80000,
        category: "camionetas",
        img: "https://cdn.motor1.com/images/mgl/7ZveqA/s1/4x3/dsc0727.webp",
        stock: 2,
        description: "Confort y capacidad en una camioneta robusta y moderna."
      },
      {
        id: 10,
        name: "Nissan Frontier",
        price: 55000,
        category: "camionetas",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxP-jhTnWJ6UknvyiDRCtP-yFiAdgsCEO3Aw&s",
        stock: 6,
        description: "Versátil y económica, ideal para trabajo diario y viajes largos."
      },
      
      {
        id: 11,
        name: "Honda CBR600RR",
        price: 12000,
        category: "motos",
        img: "https://lamoto.com.ar/wp-content/uploads/2020/08/HONDA-CBR600-3.jpeg",
        stock: 7,
        description: "Motocicleta deportiva de alto rendimiento con gran velocidad y maniobrabilidad."
      },
      {
        id: 12,
        name: "Yamaha YZF-R3",
        price: 9000,
        category: "motos",
        img: "https://motos0km.com.ar/models/yamaha-yzf-r3-gallery-002075-020180612164437.jpg",
        stock: 5,
        description: "Moto ligera y versátil, ideal para principiantes y uso urbano."
      },
      {
        id: 13,
        name: "Kawasaki Ninja 650",
        price: 10500,
        category: "motos",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbACOyyQyZnV9bYRM-nso8Ku0PJkkKCB-Uew&s",
        stock: 4,
        description: "Moto deportiva de mediana cilindrada, perfecta para carretera y ciudad."
      },
      {
        id: 14,
        name: "Ducati Panigale V4",
        price: 22000,
        category: "motos",
        img: "https://ducaticordoba.com.ar/wp-content/uploads/sites/10/2023/07/www.ducati.com267panigale-v4-s-red-my18-02-model-preview-1050x650-1.png.webp",
        stock: 2,
        description: "Moto premium de alto rendimiento con diseño italiano y gran potencia."
      },
      {
        id: 15,
        name: "BMW R 1250 GS",
        price: 19000,
        category: "motos",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGRj-emP0OmGkoNtNwoYXf4924F94ohfCGg&s",
        stock: 3,
        description: "Moto todoterreno, ideal para viajes largos y aventuras en cualquier terreno."
      },
    ];

    export const getProducts = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(products);
          }, 2500);
        });
      };
      
      export const getProductsByCategory = (categoryId) => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(products.filter((prod)=> prod.category === categoryId));
          }, 2500);
        });
      }
      
      export const getProductByID = (id) => {
        return new Promise((resolve, reject) => {
          const product = products.find((prod) => prod.id === parseInt(id));
          if (product) {
            resolve(product);
          } else {
            reject("Producto no encontrado");
          }
        });
      };