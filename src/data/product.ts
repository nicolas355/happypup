import { ProductPopulate } from "../interface/products";
import randomId from "../utils/RandomUUID";
import { generateSKU } from "../utils/Skugenerate";

const productosPopulares: ProductPopulate[] = [
  {
    id: randomId,
    nombre: "Zehui Pet Dog Cat Sweater Puppy T Shirt Warm Hoodies Coat Clothes Apparel",
    price: 29.99,
    img: 'https://res.cloudinary.com/dy7qlqell/image/upload/v1727027312/popular_1_do6jgn.png',
    viewMore: {
      availability: false,
      sku: generateSKU("SKU", 1),
      barcode: "0000000444120049900",
      collections: ["birds", "Cats", "Reptiles", "Small Pets"],
      productType: "Other Pet Supplies",
      vendedor: "Spain",
      quantity: 100,
      descripcion: "A warm and comfortable coat for your pet, perfect for winter.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "Please refer to the size chart to select the appropriate size."
    }
  },
  {
    id: randomId,
    nombre: "Popamazing 6 Days Cat + Dog + Rabbit Meal Automatic Pet Feeder Auto Dispenser",
    price: 30.00,
    img: 'https://res.cloudinary.com/dy7qlqell/image/upload/v1727027312/popular_2_orzgaj.png',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 2),
      barcode: "", // Agregar barcode si lo tienes
      collections: ["Cats", "Fish", "Reptiles", "Small Pets"],
      productType: "Cat Supplies",
      vendedor: "USA",
      quantity: 97,
      descripcion: "An automatic pet feeder that can serve meals to your pets for up to 6 days.",
      delivery: "Ships within 1-3 business days.",
      sizeGuide: "Check product dimensions for compatibility with your pets."
    }
  },
  {
    id: randomId,
    nombre: "Mool Lightweight Fabric Pet Carrier Crate With Fleece Mat And Food Bag",
    price: 24.00,
    img: 'https://res.cloudinary.com/dy7qlqell/image/upload/v1727027313/popular_3_i0f0ya.png', // Agregar URL de imagen aquí
    viewMore: {
      availability: true,
      sku: "327AE-6",
      barcode: "327038522",
      collections: ["Cats", "Fish", "Reptiles"],
      productType: "Cat Supplies",
      vendedor: "China",
      quantity: 1,
      descripcion: "A lightweight pet carrier with a cozy fleece mat for comfort during travels.",
      delivery: "Available for immediate shipping.",
      sizeGuide: "Suitable for small to medium-sized pets."
    }
  },
  {
    id: randomId,
    nombre: "Leopet Tspb09 Playpen For Puppies And Small Animals Different Colours",
    price: 15.00,
    img: 'https://res.cloudinary.com/dy7qlqell/image/upload/v1727027313/popular_4_lh32bb.png', // Agregar URL de imagen aquí
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 3),
      barcode: "", // Agregar barcode si lo tienes
      collections: ["Birds", "Cats", "Reptiles"],
      productType: "Other Pet Supplies",
      vendedor: "Italy",
      quantity: 98,
      descripcion: "A colorful playpen for puppies and small animals, providing a safe play area.",
      delivery: "Usually ships within 2-4 business days.",
      sizeGuide: "Refer to size options available."
    }
  },
  {
    id: randomId,
    nombre: "Hing Designs The Bone Bowl With Non Slip Rubber Feet",
    price: 26.00,
    img: 'https://res.cloudinary.com/dy7qlqell/image/upload/v1727027313/popular_5_s3kbku.png', // Agregar URL de imagen aquí
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 4),
      barcode: "", // Agregar barcode si lo tienes
      collections: ["Dogs", "Fish", "Reptiles"],
      productType: "Feeders",
      vendedor: "Norway",
      quantity: 98,
      descripcion: "A stylish bowl for your pet that stays in place with non-slip rubber feet.",
      delivery: "Ships in 2-5 business days.",
      sizeGuide: "Available in multiple sizes."
    }
  },
  {
    id: randomId,
    nombre: "Halo Pet Microchip Scanner Mid06",
    price: 25.00,
    img: 'https://res.cloudinary.com/dy7qlqell/image/upload/v1727027313/popular_6_wbwse1.png', // Agregar URL de imagen aquí
    viewMore: {
      availability: false,
      sku: "", // No SKU disponible
      barcode: "", // No barcode disponible
      collections: ["Cats", "Dogs", "Fish", "Reptiles"],
      productType: "Cat Supplies",
      vendedor: "USA",
      quantity: 1,
      descripcion: "A reliable microchip scanner to keep track of your pets' health.",
      delivery: "Currently unavailable.",
      sizeGuide: "Check compatibility with microchips."
    }
  },
  {
    id: randomId,
    nombre: "Exo Terra Crystal Cave",
    price: 19.00,
    img: 'https://res.cloudinary.com/dy7qlqell/image/upload/v1727027313/popular_7_fpswex.png', // Agregar URL de imagen aquí
    viewMore: {
      availability: true,
      sku: "327038",
      barcode: "555-6322-1",
      collections: ["Birds", "Dogs", "Reptiles", "Small Pets"],
      productType: "Others",
      vendedor: "Italy",
      quantity: 1,
      descripcion: "An ideal hiding spot for reptiles and small animals, enhancing their habitat.",
      delivery: "Delivery within 3-7 business days.",
      sizeGuide: "Suitable for various small pets."
    }
  },
  {
    id: randomId,
    nombre: "Easipet Fabric Pet Carrier",
    price: 35.00,
    img: 'https://res.cloudinary.com/dy7qlqell/image/upload/v1727027312/popular_8_enaar9.png', 
    viewMore: {
      availability: true,
      sku: "327AE-6",
      barcode: "327038522",
      collections: ["Dogs", "Fish", "Reptiles", "Small Pets"],
      productType: "Care",
      vendedor: "France",
      quantity: 1,
      descripcion: "A soft fabric pet carrier that ensures comfort and security for your pets.",
      delivery: "Available for immediate shipping.",
      sizeGuide: "Check dimensions for compatibility."
    }
  }



];







const allProducts: ProductPopulate[] = [
  // Categoría: Birds
  {
    id: randomId,
    nombre: "Aviary Bird Seed Mix",
    price: 19.99,
    img: 'https://res.cloudinary.com/dy7qlqell/image/upload/v1727027312/popular_1_do6jgn.png',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 2),
      barcode: "0000000444120049901",
      collections: ["birds"],
      productType: "Food",
      vendedor: "Germany",
      quantity: 50,
      descripcion: "A nutritious mix for all types of birds.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Bird Cage with Accessories",
    price: 89.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/zehui_pet_dog_cat_sweater_puppy_t_shirt_warm_hoodies_coat_clothes_apparel_2_270x270_crop_top.png?v=1571136373',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 3),
      barcode: "0000000444120049902",
      collections: ["birds"],
      productType: "Cage",
      vendedor: "Germany",
      quantity: 20,
      descripcion: "A spacious cage with perches and toys.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Colorful Parakeet Toys",
    price: 12.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/silvercell_pets_puppy_dogs_clothes_jacket_little_heart_knit_sweater_coat_2_270x270_crop_top.png?v=1571136356',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 4),
      barcode: "0000000444120049903",
      collections: ["birds"],
      productType: "Toys",
      vendedor: "USA",
      quantity: 100,
      descripcion: "Colorful toys for your parakeets to play with.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Bird Water Bottle",
    price: 9.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/petown_soft_sided_pet_carrier_pet_carriers_airline_approved_with_foldable_and_washable_2_270x270_crop_top.png?v=1571136336',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 5),
      barcode: "0000000444120049904",
      collections: ["birds"],
      productType: "Accessories",
      vendedor: "Germany",
      quantity: 75,
      descripcion: "A convenient water bottle for birds.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Bird Treats - Nutri-Berries",
    price: 7.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/pet_dog_rain_boots_booties_waterproof_protective_rubber_shoes_2_270x270_crop_top.png?v=1571136320',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 6),
      barcode: "0000000444120049905",
      collections: ["birds"],
      productType: "Treats",
      vendedor: "France",
      quantity: 120,
      descripcion: "Delicious treats that provide essential nutrients.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Natural Coconut Bird House",
    price: 15.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/leopet_tspb09_playpen_for_puppies_and_small_animals_different_colours_2_270x270_crop_top.png?v=1571136302',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 7),
      barcode: "0000000444120049906",
      collections: ["birds"],
      productType: "House",
      vendedor: "France",
      quantity: 30,
      descripcion: "A natural coconut birdhouse for nesting.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Bird Seed Feeder",
    price: 24.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/leopet_kbd010_cat_tree_scratching_post_kitten_climbing_excercise_2_270x270_crop_top.png?v=1571136284',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 8),
      barcode: "0000000444120049907",
      collections: ["birds"],
      productType: "Feeder",
      vendedor: "China",
      quantity: 40,
      descripcion: "A feeder designed for multiple bird types.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Bird Bath for Outdoor Use",
    price: 29.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/leopet_htbt03_dog_bed_different_sizes_and_colours_2_270x270_crop_top.png?v=1571136267',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 9),
      barcode: "0000000444120049908",
      collections: ["birds"],
      productType: "Bath",
      vendedor: "China",
      quantity: 25,
      descripcion: "An outdoor bird bath for birds to refresh.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Natural Wood Perch",
    price: 10.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/hdp_dog_boots_2_270x270_crop_top.png?v=1571136251',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 10),
      barcode: "0000000444120049909",
      collections: ["birds"],
      productType: "Perch",
      vendedor: "France",
      quantity: 60,
      descripcion: "A natural wood perch for your birds.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },

  // Categoría: Cats
  {
    id: randomId,
    nombre: "Catnip Toy Mouse",
    price: 5.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/leopet_htbt10_75x60_small_dog_bed_75x60x19_cm_different_colours_2_270x270_crop_center.png?v=1571136275',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 11),
      barcode: "0000000444120050001",
      collections: ["cats"],
      productType: "Toys",
      vendedor: "Germany",
      quantity: 150,
      descripcion: "A fun catnip toy mouse for your cat.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Premium Cat Litter",
    price: 19.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/halo_pet_microchip_scanner_mid06_2_270x270_crop_center.png?v=1571136242',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 12),
      barcode: "0000000444120050002",
      collections: ["cats"],
      productType: "Litter",
      vendedor: "Germany",
      quantity: 100,
      descripcion: "High-quality cat litter for odor control.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Cat Scratching Post",
    price: 39.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/zehui_pet_dog_cat_sweater_puppy_t_shirt_warm_hoodies_coat_clothes_apparel_2_270x270_crop_center.png?v=1571136373',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 13),
      barcode: "0000000444120050003",
      collections: ["cats"],
      productType: "Furniture",
      vendedor: "USA",
      quantity: 75,
      descripcion: "A sturdy scratching post for cats.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Cat Carrier Backpack",
    price: 49.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/trixie_39813_traveller_capri_i_pet_carrier_2_270x270_crop_center.png?v=1571136367',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 14),
      barcode: "0000000444120050004",
      collections: ["cats"],
      productType: "Carriers",
      vendedor: "Germany",
      quantity: 30,
      descripcion: "A comfortable backpack carrier for cats.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Interactive Laser Cat Toy",
    price: 25.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/silvercell_pets_puppy_dogs_clothes_jacket_little_heart_knit_sweater_coat_2_270x270_crop_center.png?v=1571136356',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 15),
      barcode: "0000000444120050005",
      collections: ["cats"],
      productType: "Toys",
      vendedor: "France",
      quantity: 200,
      descripcion: "An interactive laser toy for endless fun.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Cat Food Bowl",
    price: 12.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/popamazing_6_days_cat_dog_rabbit_meal_automatic_pet_feeder_auto_dispenser_2_270x270_crop_center.png?v=1571136344',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 16),
      barcode: "0000000444120050006",
      collections: ["cats"],
      productType: "Dishes",
      vendedor: "USA",
      quantity: 100,
      descripcion: "A stylish food bowl for your cat.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Cat Bed with Soft Cushion",
    price: 34.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/petown_soft_sided_pet_carrier_pet_carriers_airline_approved_with_foldable_and_washable_2_270x270_crop_center.png?v=1571136336',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 17),
      barcode: "0000000444120050007",
      collections: ["cats"],
      productType: "Bedding",
      vendedor: "Italy",
      quantity: 60,
      descripcion: "A cozy bed with a soft cushion for your cat.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Flea and Tick Prevention Collar",
    price: 15.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/petfusion_pet_food_mat_in_premium_fda_grade_silicone_2_270x270_crop_center.png?v=1571136327',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 18),
      barcode: "0000000444120050008",
      collections: ["cats"],
      productType: "Collars",
      vendedor: "USA",
      quantity: 80,
      descripcion: "A collar that prevents fleas and ticks.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Grooming Glove for Cats",
    price: 9.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/pet_dog_rain_boots_booties_waterproof_protective_rubber_shoes_2_270x270_crop_center.png?v=1571136320',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 19),
      barcode: "0000000444120050009",
      collections: ["cats"],
      productType: "Grooming",
      vendedor: "USA",
      quantity: 150,
      descripcion: "A glove for easy grooming and de-shedding.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },

  // Categoría: Dogs
  {
    id: randomId,
    nombre: "Dog Chew Toys - Durable Rubber",
    price: 14.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/leopet_kbd010_cat_tree_scratching_post_kitten_climbing_excercise_2_270x270_crop_center.png?v=1571136284',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 20),
      barcode: "0000000444120060001",
      collections: ["dogs"],
      productType: "Toys",
      vendedor: "Italy",
      quantity: 200,
      descripcion: "Durable rubber chew toys for aggressive chewers.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Premium Dog Food - Chicken Flavor",
    price: 29.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/leopet_htbt10_75x60_small_dog_bed_75x60x19_cm_different_colours_2_270x270_crop_center.png?v=1571136275',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 21),
      barcode: "0000000444120060002",
      collections: ["dogs"],
      productType: "Food",
      vendedor: "USA",
      quantity: 150,
      descripcion: "High-quality dog food with chicken flavor.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Dog Harness - Adjustable",
    price: 22.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/leopet_htbt03_dog_bed_different_sizes_and_colours_2_270x270_crop_center.png?v=1571136267',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 22),
      barcode: "0000000444120060003",
      collections: ["dogs"],
      productType: "Harness",
      vendedor: "USA",
      quantity: 80,
      descripcion: "Adjustable harness for comfort and control.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Dog Training Pads",
    price: 24.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/hing_designs_the_bone_bowl_with_non_slip_rubber_feet_2_270x270_crop_center.png?v=1571136259',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 23),
      barcode: "0000000444120060004",
      collections: ["dogs"],
      productType: "Training",
      vendedor: "USA",
      quantity: 100,
      descripcion: "Training pads for house training your puppy.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Orthopedic Dog Bed",
    price: 49.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/hdp_dog_boots_2_270x270_crop_center.png?v=1571136251',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 24),
      barcode: "0000000444120060005",
      collections: ["dogs"],
      productType: "Bedding",
      vendedor: "Italy",
      quantity: 60,
      descripcion: "An orthopedic bed for extra comfort.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Dog Grooming Kit",
    price: 39.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/halo_pet_microchip_scanner_mid06_2_270x270_crop_center.png?v=1571136242',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 25),
      barcode: "0000000444120060006",
      collections: ["dogs"],
      productType: "Grooming",
      vendedor: "Italy",
      quantity: 50,
      descripcion: "A complete grooming kit for your dog.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Dog Collar with ID Tag",
    price: 12.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/exo_terra_crystal_cave_2_270x270_crop_center.png?v=1571136235',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 26),
      barcode: "0000000444120060007",
      collections: ["dogs"],
      productType: "Collars",
      vendedor: "Italy",
      quantity: 120,
      descripcion: "A durable collar with an ID tag.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Dog Water Bottle",
    price: 9.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/easipet_fabric_pet_carrier_1_270x270_crop_center.png?v=1571662057',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 27),
      barcode: "0000000444120060008",
      collections: ["dogs"],
      productType: "Accessories",
      vendedor: "Norway",
      quantity: 80,
      descripcion: "A portable water bottle for dogs.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Dog Life Jacket",
    price: 29.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/black_water_proofing_dog_boots_pet_shoes_dogs_snow_booties_2_270x270_crop_center.png?v=1571136219',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 28),
      barcode: "0000000444120060009",
      collections: ["dogs"],
      productType: "Safety",
      vendedor: "Norway",
      quantity: 40,
      descripcion: "A life jacket for dogs that love water.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },

  // Categoría: Fish
  {
    id: randomId,
    nombre: "Aquarium Starter Kit",
    price: 99.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/popamazing_6_days_cat_dog_rabbit_meal_automatic_pet_feeder_auto_dispenser_2_270x270_crop_top.png?v=1571136344',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 29),
      barcode: "0000000444120070001",
      collections: ["fish"],
      productType: "Aquariums",
      vendedor: "Spain",
      quantity: 50,
      descripcion: "Complete aquarium starter kit with tank and accessories.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Fish Food Pellets",
    price: 12.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/petfusion_pet_food_mat_in_premium_fda_grade_silicone_2_270x270_crop_top.png?v=1571136327',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 30),
      barcode: "0000000444120070002",
      collections: ["fish"],
      productType: "Food",
      vendedor: "Spain",
      quantity: 200,
      descripcion: "High-quality pellets for tropical fish.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Aquarium Heater",
    price: 29.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/mool_lightweight_fabric_pet_carrier_crate_with_fleece_mat_and_food_bag_2_270x270_crop_top.png?v=1571136312',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 31),
      barcode: "0000000444120070003",
      collections: ["fish"],
      productType: "Heaters",
      vendedor: "USA",
      quantity: 100,
      descripcion: "Heater to maintain optimal water temperature.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Aquarium Filter",
    price: 49.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/leopet_kbm0012grau_cat_tree_scratching_post_kitten_climbing_excercise_2_270x270_crop_top.png?v=1571136292',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 32),
      barcode: "0000000444120070004",
      collections: ["fish"],
      productType: "Filters",
      vendedor: "USA",
      quantity: 80,
      descripcion: "Filter for maintaining water quality in your aquarium.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Aquarium Decorations - Plants and Rocks",
    price: 15.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/leopet_htbt10_75x60_small_dog_bed_75x60x19_cm_different_colours_2_270x270_crop_top.png?v=1571136275',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 33),
      barcode: "0000000444120070005",
      collections: ["fish"],
      productType: "Decorations",
      vendedor: "USA",
      quantity: 150,
      descripcion: "Beautiful decorations for your aquarium.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Aquarium Gravel",
    price: 9.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/hing_designs_the_bone_bowl_with_non_slip_rubber_feet_2_270x270_crop_top.png?v=1571136259',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 34),
      barcode: "0000000444120070006",
      collections: ["fish"],
      productType: "Substrate",
      vendedor: "USA",
      quantity: 120,
      descripcion: "High-quality gravel for your aquarium.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Aquarium Light - LED",
    price: 29.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/halo_pet_microchip_scanner_mid06_2_270x270_crop_top.png?v=1571136242',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 35),
      barcode: "0000000444120070007",
      collections: ["fish"],
      productType: "Lighting",
      vendedor: "Spain",
      quantity: 70,
      descripcion: "Energy-efficient LED light for your aquarium.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Fish Net",
    price: 5.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/easipet_fabric_pet_carrier_1_270x270_crop_top.png?v=1571662057',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 36),
      barcode: "0000000444120070008",
      collections: ["fish"],
      productType: "Accessories",
      vendedor: "USA",
      quantity: 200,
      descripcion: "A net for safely catching fish.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Fish Tank Divider",
    price: 15.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/andrew_james_4_day_meal_automatic_pet_feeder_bowl_2_270x270_crop_top.png?v=1571136211',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 37),
      barcode: "0000000444120070009",
      collections: ["fish"],
      productType: "Accessories",
      vendedor: "Spain",
      quantity: 90,
      descripcion: "A divider for creating separate areas in your tank.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },

  // Categoría: Reptiles
  {
    id: randomId,
    nombre: "Reptile Terrarium Kit",
    price: 79.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/zehui_pet_dog_cat_sweater_puppy_t_shirt_warm_hoodies_coat_clothes_apparel_2_270x270_crop_center.png?v=1571136373',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 38),
      barcode: "0000000444120080001",
      collections: ["reptiles"],
      productType: "Terrariums",
      vendedor: "USA",
      quantity: 50,
      descripcion: "Complete terrarium kit for reptiles.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Reptile Heat Mat",
    price: 29.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/popamazing_6_days_cat_dog_rabbit_meal_automatic_pet_feeder_auto_dispenser_2_270x270_crop_center.png?v=1571136344',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 39),
      barcode: "0000000444120080002",
      collections: ["reptiles"],
      productType: "Heating",
      vendedor: "USA",
      quantity: 100,
      descripcion: "Heat mat for maintaining optimal temperature.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Reptile Food - Crickets",
    price: 12.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/mool_lightweight_fabric_pet_carrier_crate_with_fleece_mat_and_food_bag_2_270x270_crop_center.png?v=1571136312',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 40),
      barcode: "0000000444120080003",
      collections: ["reptiles"],
      productType: "Food",
      vendedor: "Spain",
      quantity: 150,
      descripcion: "Live crickets for feeding reptiles.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Reptile Water Bowl",
    price: 9.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/leopet_tspb09_playpen_for_puppies_and_small_animals_different_colours_2_270x270_crop_center.png?v=1571136302',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 41),
      barcode: "0000000444120080004",
      collections: ["reptiles"],
      productType: "Accessories",
      vendedor: "USA",
      quantity: 200,
      descripcion: "Water bowl for reptiles.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Reptile Climbing Branch",
    price: 14.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/leopet_kbm0012grau_cat_tree_scratching_post_kitten_climbing_excercise_2_270x270_crop_center.png?v=1571136292',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 42),
      barcode: "0000000444120080005",
      collections: ["reptiles"],
      productType: "Accessories",
      vendedor: "USA",
      quantity: 80,
      descripcion: "Climbing branch for reptiles.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Reptile Hides - Cave",
    price: 17.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/hing_designs_the_bone_bowl_with_non_slip_rubber_feet_2_270x270_crop_center.png?v=1571136259',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 43),
      barcode: "0000000444120080006",
      collections: ["reptiles"],
      productType: "Hides",
      vendedor: "USA",
      quantity: 90,
      descripcion: "Hiding place for reptiles.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Reptile Tank Cleaner",
    price: 8.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/halo_pet_microchip_scanner_mid06_2_270x270_crop_center.png?v=1571136242',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 44),
      barcode: "0000000444120080007",
      collections: ["reptiles"],
      productType: "Cleaning",
      vendedor: "Spain",
      quantity: 150,
      descripcion: "Cleaner for reptile tanks.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Reptile Enrichment Toys",
    price: 19.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/exo_terra_crystal_cave_2_270x270_crop_center.png?v=1571136235',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 45),
      barcode: "0000000444120080008",
      collections: ["reptiles"],
      productType: "Toys",
      vendedor: "USA",
      quantity: 60,
      descripcion: "Enrichment toys for reptiles.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },

  // Categoría: Small Mammals
  {
    id: randomId,
    nombre: "Small Animal Habitat Kit",
    price: 89.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/leopet_htbt03_dog_bed_different_sizes_and_colours_2_270x270_crop_center.png?v=1571136267',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 46),
      barcode: "0000000444120090001",
      collections: ["small pets"],
      productType: "Habitat",
      vendedor: "Spain",
      quantity: 70,
      descripcion: "Complete habitat kit for small animals.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Small Animal Food - Pellets",
    price: 14.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/hdp_dog_boots_2_270x270_crop_center.png?v=1571136251',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 47),
      barcode: "0000000444120090002",
      collections: ["small pets"],
      productType: "Food",
      vendedor: "USA",
      quantity: 150,
      descripcion: "High-quality pellets for small mammals.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Small Animal Chew Toys",
    price: 5.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/zehui_pet_dog_cat_sweater_puppy_t_shirt_warm_hoodies_coat_clothes_apparel_2_270x270_crop_center.png?v=1571136373',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 48),
      barcode: "0000000444120090003",
      collections: ["small pets"],
      productType: "Toys",
      vendedor: "USA",
      quantity: 200,
      descripcion: "Chew toys for small animals.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Small Animal Water Bottle",
    price: 8.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/silvercell_pets_puppy_dogs_clothes_jacket_little_heart_knit_sweater_coat_2_270x270_crop_center.png?v=1571136356',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 49),
      barcode: "0000000444120090004",
      collections: ["small pets"],
      productType: "Accessories",
      vendedor: "Spain",
      quantity: 250,
      descripcion: "Water bottle for small animals.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Small Animal Exercise Wheel",
    price: 12.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/popamazing_6_days_cat_dog_rabbit_meal_automatic_pet_feeder_auto_dispenser_2_270x270_crop_center.png?v=1571136344',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 50),
      barcode: "0000000444120090005",
      collections: ["small pets"],
      productType: "Accessories",
      vendedor: "USA",
      quantity: 100,
      descripcion: "Exercise wheel for small animals.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Small Animal Hideout",
    price: 19.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/pet_dog_rain_boots_booties_waterproof_protective_rubber_shoes_2_270x270_crop_center.png?v=1571136320',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 51),
      barcode: "0000000444120090006",
      collections: ["small pets"],
      productType: "Hides",
      vendedor: "USA",
      quantity: 80,
      descripcion: "Hiding place for small animals.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Small Animal Grooming Kit",
    price: 24.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/leopet_kbm0012grau_cat_tree_scratching_post_kitten_climbing_excercise_2_270x270_crop_center.png?v=1571136292',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 52),
      barcode: "0000000444120090007",
      collections: ["small pets"],
      productType: "Grooming",
      vendedor: "Germany",
      quantity: 150,
      descripcion: "Grooming kit for small animals.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Small Animal Travel Carrier",
    price: 29.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/leopet_htbt10_75x60_small_dog_bed_75x60x19_cm_different_colours_2_270x270_crop_center.png?v=1571136275',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 53),
      barcode: "0000000444120090008",
      collections: ["small pets"],
      productType: "Carriers",
      vendedor: "USA",
      quantity: 90,
      descripcion: "Travel carrier for small animals.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  },
  {
    id: randomId,
    nombre: "Small Animal Bedding",
    price: 12.99,
    img: 'https://theme789-domestic-animals.myshopify.com/cdn/shop/products/exo_terra_crystal_cave_2_270x270_crop_center.png?v=1571136235',
    viewMore: {
      availability: true,
      sku: generateSKU("SKU", 54),
      barcode: "0000000444120090009",
      collections: ["small pets"],
      productType: "Bedding",
      vendedor: "USA",
      quantity: 200,
      descripcion: "Comfortable bedding for small animals.",
      delivery: "Delivery in 3-5 business days.",
      sizeGuide: "N/A"
    }
  }
];











export { productosPopulares,allProducts };