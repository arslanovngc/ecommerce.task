import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

const links = [
  {
    id: 1,
    txt: "home",
    route: "/",
  },
  {
    id: 2,
    txt: "about",
    route: "/about",
  },
  {
    id: 3,
    txt: "products",
    route: "/products",
  },
];

const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

const products_url = "https://course-api.com/react-store-products";

const product_details_url = `https://course-api.com/react-store-single-product?id=`;

export { links, services, products_url, product_details_url };
