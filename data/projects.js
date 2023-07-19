const projects = [
  {
    title: "Blog Application",
    description:
      "This is ReactJS + Redux Toolkit powered blog website built upon MongoDB backend facilitated by NodeJS/ExpressJS combo and Tailwind CSS styling framework. Explore pages showcasing dynamic routes generated programmatically based on categories like guides, tutorials, travel, news stories or reviews.",
    img: "./blog.jpg",
    stack: ["MongoDB", "NodeJs", "React", "ExpressJs", "Tailwind CSS"],
    demoLink: "https://blog.com",
    sourceCodeLink: "https://www.github.com/basharatmehdi",
    inProgress: true,
  },
  {
    title: "E-commerce API (Backend)",
    description:
      "The solution features RESTful endpoints supporting CRUD operations against a Mongoose ORM schema representing  database schemas and models, handling user authentication using JWT, and middleware implementing CORS request for cross-origin resource sharing compatibility.",
    img: "./ecommerce.jpg",
    stack: ["NodeJs", "MongoDB", "ExpressJs", "JWT"],
    demoLink: "https://ecommerce-api-be3c.onrender.com/",
    sourceCodeLink: "https://github.com/basharatmehdi/Ecommerce-Api",
    inProgress: false,
  },
  {
    title: "This Portfolio",
    description:
      "This is a NextJS powered ,Tailwind CSS styled portfolio website showcasing our latest software engineering creations! I am to provide beautiful designs complementing well thought-out functionalities throughout each project page.",
    img: "./portfolio.jpg",
    stack: ["NextJs", "Tailwind CSS", "Node Mailer"],
    demoLink: "",
    sourceCodeLink: "",
    inProgress: false,
  },
];

export default projects;
