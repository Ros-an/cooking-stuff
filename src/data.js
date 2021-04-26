import { v4 as uuidv4 } from "uuid";
import faker from "faker";

export const productList = [
  {
    id: uuidv4(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/km0x5zk0/spice-masala/h/n/b/tikhalal-chilli-powder-pouch-everest-powder-original-imagfydnv8efbzmt.jpeg?q=70",
    name: "",
    price: faker.random.arrayElement([199, 249, 100, 150, 99, 134]),
    quantity: 1,
    delivery: faker.random.arrayElement(["standard", "fast"]),
    isAddedToCart: false,
    inStock: true,
    brand: "",
  },
  {
    id: uuidv4(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/kgv5x8w0/spice-masala/n/f/b/100-jeera-whole-pouch-catch-whole-original-imafxyf4zffn7vfp.jpeg?q=70",
    name: "",
    price: faker.random.arrayElement([199, 249, 100, 150, 99, 134]),
    quantity: 1,
    delivery: faker.random.arrayElement(["standard", "fast"]),
    isAddedToCart: false,
    inStock: false,
    brand: "",
  },
  {
    id: uuidv4(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/km0x5zk0/spice-masala/j/7/a/garam-masala-box-everest-powder-original-imagfydnhyr89f8z.jpeg?q=70",
    name: "",
    price: faker.random.arrayElement([199, 249, 100, 150, 99, 134]),
    quantity: 1,
    delivery: faker.random.arrayElement(["standard", "fast"]),
    isAddedToCart: false,
    inStock: true,
    brand: "",
  },
  {
    id: uuidv4(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/kgv5x8w0/spice-masala/g/5/d/25-kasuri-methi-box-catch-whole-original-imafxyf4cwzxyrhq.jpeg?q=70",
    name: "",
    price: faker.random.arrayElement([199, 249, 100, 150, 99, 134]),
    quantity: 1,
    delivery: faker.random.arrayElement(["standard", "fast"]),
    isAddedToCart: false,
    inStock: true,
    brand: "",
  },
  {
    id: uuidv4(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/kjabs7k0-0/spice-masala/v/h/k/cumin-powder-box-everest-powder-original-imafyvpgfzu8wvfn.jpeg?q=70",
    name: "",
    price: faker.random.arrayElement([199, 249, 100, 150, 99, 134]),
    quantity: 1,
    delivery: faker.random.arrayElement(["standard", "fast"]),
    isAddedToCart: false,
    inStock: true,
    brand: "",
  },
  {
    id: uuidv4(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/kgv5x8w0/spice-masala/y/n/d/100-chicken-masala-box-catch-powder-original-imafxyf4nhxv33yj.jpeg?q=70",
    name: "",
    price: faker.random.arrayElement([199, 249, 100, 150, 99, 134]),
    quantity: 1,
    delivery: faker.random.arrayElement(["standard", "fast"]),
    isAddedToCart: false,
    inStock: true,
    brand: "",
  },
  {
    id: uuidv4(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/kjabs7k0-0/spice-masala/x/q/d/sabji-masala-powder-box-everest-powder-original-imafyvpgahefzx8n.jpeg?q=70",
    name: "",
    price: faker.random.arrayElement([199, 249, 100, 150, 99, 134]),
    quantity: 1,
    delivery: faker.random.arrayElement(["standard", "fast"]),
    isAddedToCart: false,
    inStock: true,
    brand: "",
  },
  {
    id: uuidv4(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/kjabs7k0-0/spice-masala/t/i/f/chaat-masala-box-everest-powder-original-imafyvpghbpt3ggg.jpeg?q=70",
    name: "",
    price: faker.random.arrayElement([199, 249, 100, 150, 99, 134]),
    quantity: 1,
    delivery: faker.random.arrayElement(["standard", "fast"]),
    isAddedToCart: false,
    inStock: true,
    brand: "",
  },
  {
    id: uuidv4(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/kgv5x8w0/spice-masala/h/s/g/50-kitchen-king-box-catch-powder-original-imafxyf5etugfpt2.jpeg?q=70",
    name: "",
    price: faker.random.arrayElement([199, 249, 100, 150, 99, 134]),
    quantity: 1,
    delivery: faker.random.arrayElement(["standard", "fast"]),
    isAddedToCart: false,
    inStock: true,
    brand: "",
  },
  {
    id: uuidv4(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/kgv5x8w0/spice-masala/f/n/z/50-meat-masala-box-catch-powder-original-imafxyf5fzyt76zz.jpeg?q=70",
    name: "",
    price: faker.random.arrayElement([199, 249, 100, 150, 99, 134]),
    quantity: 1,
    delivery: faker.random.arrayElement(["standard", "fast"]),
    isAddedToCart: false,
    inStock: false,
    brand: "",
  },
  {
    id: uuidv4(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/kjabs7k0-0/spice-masala/r/8/a/sambhar-masala-box-everest-powder-original-imafyvpggzfngpra.jpeg?q=70",
    name: "",
    price: faker.random.arrayElement([199, 249, 100, 150, 99, 134]),
    quantity: 1,
    delivery: faker.random.arrayElement(["standard", "fast"]),
    isAddedToCart: false,
    inStock: true,
    brand: "",
  },
  {
    id: uuidv4(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/kk1h5e80/spice-masala/h/g/k/400-black-pepper-kali-mirch-premium-quality-whole-black-pepper-original-imafzh97bnuqswgv.jpeg?q=70",
    name: "",
    price: faker.random.arrayElement([199, 249, 100, 150, 99, 134]),
    quantity: 1,
    delivery: faker.random.arrayElement(["standard", "fast"]),
    isAddedToCart: false,
    inStock: true,
    brand: "",
  },
  {
    id: uuidv4(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/kjabs7k0-0/spice-masala/8/y/z/chhole-masala-box-everest-powder-original-imafyvpgjzkz86nv.jpeg?q=70",
    name: "",
    price: faker.random.arrayElement([199, 249, 100, 150, 99, 134]),
    quantity: 1,
    delivery: faker.random.arrayElement(["standard", "fast"]),
    isAddedToCart: false,
    inStock: true,
    brand: "",
  },
  {
    id: uuidv4(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/kiew3gw0/spice-masala/b/3/t/200-dry-ginger-root-powder-adrak-powder-sunth-daily-spices-original-imafy7g7nngtktfr.jpeg?q=70",
    name: "",
    price: faker.random.arrayElement([199, 249, 100, 150, 99, 134]),
    quantity: 1,
    delivery: faker.random.arrayElement(["standard", "fast"]),
    isAddedToCart: false,
    inStock: true,
    brand: "",
  },
  {
    id: uuidv4(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/kfk0e4w0/spice-masala/z/f/j/200-amchoor-powder-row-mango-100-pure-plastic-bottle-vedcare-original-imafvzv4a7krjkwc.jpeg?q=70",
    name: "",
    price: faker.random.arrayElement([199, 249, 100, 150, 99, 134]),
    quantity: 1,
    delivery: faker.random.arrayElement(["standard", "fast"]),
    isAddedToCart: false,
    inStock: true,
    brand: "",
  },
  {
    id: uuidv4(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/kkh6zrk0/spice-masala/k/8/n/100-dried-whole-curry-leaf-curry-patta-karuveppillai-100g-by-original-imafztbga4bhhjgm.jpeg?q=70",
    name: "",
    price: faker.random.arrayElement([199, 249, 100, 150, 99, 134]),
    quantity: 1,
    delivery: faker.random.arrayElement(["standard", "fast"]),
    isAddedToCart: false,
    inStock: true,
    brand: "",
  },
  {
    id: uuidv4(),
    image:
      "https://rukminim1.flixcart.com/image/612/612/kihqz680-0/spice-masala/0/w/a/500-organic-handpicked-cinnamon-dalchini-sticks-in-pet-jar-500g-original-imafy9svbfv6wcrv.jpeg?q=70",
    name: "",
    price: faker.random.arrayElement([199, 249, 100, 150, 99, 134]),
    quantity: 1,
    delivery: faker.random.arrayElement(["standard", "fast"]),
    isAddedToCart: false,
    inStock: true,
    brand: "",
  },
];

export const dataOfCategory = [
  {
    id: uuidv4(),
    heading: "bartan le lo",
    route: "bartan",
  },
  {
    id: uuidv4(),
    heading: "masala le lo",
    route: "masala",
  },
  {
    id: uuidv4(),
    heading: "aaloo, piyaj le lo",
    route: "aaloo",
  },
  {
    id: uuidv4(),
    heading: "chai pee lo",
    route: "tea",
  },
];

export const brandData = [
  "Everest",
  "MDH",
  "Badshah",
  "Catch",
  "Patanjali",
  "Rajesh",
  "Ramdev",
  "MTR",
  "Goldiee",
];
