

const imageDb = () => {

    let images = [
          {"bread": []},
          {"cake": []},
          {"drinks": []}
        ]
    
// BREAD

    const modules_bread_whole = import.meta.glob(
      "./assets/productImg/bread/whole/*.{jpg,jpeg,png,webp}",
      { eager: true });
    const images_bread_whole = Object.values(modules_bread_whole).map(module => module.default);
    images[0]["bread"].push({"whole": images_bread_whole})
    //console.log('images whole' , images[0]["bread"][0]["whole"])

    const modules_bread_wheat = import.meta.glob(
      "./assets/productImg/bread/wheat/*.{jpg,jpeg,png,webp}",
      { eager: true });
    const images_bread_wheat = Object.values(modules_bread_wheat).map(module => module.default);
    images[0]["bread"].push({"wheat": images_bread_wheat})
    //console.log('images wheat' , images[0]["bread"][1]["wheat"])

    const modules_bread_pastry = import.meta.glob(
      "./assets/productImg/bread/pastry/*.{jpg,jpeg,png,webp}",
      { eager: true });
    const images_bread_pastry = Object.values(modules_bread_pastry).map(module => module.default);
    images[0]["bread"].push({"pastry": images_bread_pastry})

//CAKE

    const modules_cake_singles = import.meta.glob(
      "./assets/productImg/cake/singles/*.{jpg,jpeg,png,webp}",
      { eager: true }
    );
    const images_cake_singles = Object.values(modules_cake_singles).map(module => module.default);
    images[1]["cake"].push({"singles": images_cake_singles})
    

    const modules_cake_company = import.meta.glob(
      "./assets/productImg/cake/company/*.{jpg,jpeg,png,webp}",
      { eager: true }
    );
    const images_cake_company = Object.values(modules_cake_company).map(module => module.default);
    images[1]["cake"].push({"company": images_cake_company})

    const modules_cake_specials = import.meta.glob(
      "./assets/productImg/cake/specials/*.{jpg,jpeg,png,webp}",
      { eager: true }
    );
    const images_cake_specials = Object.values(modules_cake_specials).map(module => module.default);
    images[1]["cake"].push({"specials": images_cake_specials})



//DRINKS

    const modules_drinks_hot = import.meta.glob(
      "./assets/productImg/drinks/hot/*.{jpg,jpeg,png,webp}",
      { eager: true }
    );
    const images_drinks_hot = Object.values(modules_drinks_hot).map(module => module.default); 
    images[2]["drinks"].push({"hot": images_drinks_hot})
    
    
    const modules_drinks_cold = import.meta.glob(
      "./assets/productImg/drinks/cold/*.{jpg,jpeg,png,webp}",
      { eager: true }
    );
    const images_drinks_cold = Object.values(modules_drinks_cold).map(module => module.default); 
    images[2]["drinks"].push({"cold": images_drinks_cold})
    
//Return    
    return images
}



export default imageDb