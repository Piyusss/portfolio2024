export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: " I do Love Competitive Programming ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Collaborative in sharing knowledge and learning from others",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Technical skills",
    description: "Some of",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech Enthusiast with a passion for Coding.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently pursuing B.Tech in 5th Semester",
    description: "Present Scenerio",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Have a Query! Drop a request on LinkedIn",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Spotify UI Clone",
    des: "Incorporated smooth transitions and animations to enhance user engagement.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/js.svg", "/tail.svg","/html5.svg"],
    link: "https://piyusss.github.io/Spotify-Clone/",
  },
  {
    id: 2,
    title: "Chat-Cord",
    des: "The web application, powered by Socket.io enables Realtime communication b-w multiple users sitting in any part of world.",
    img: "/p2.svg",
    iconLists: ["/js.svg", "/tail.svg", "/mongodb.svg", "/html5.svg", "/re.svg"],
    link: "https://mern-chatcord-application.onrender.com/login",
  },
  {
    id: 3,
    title: "SaaS Automation Builder",
    des: "Automating the work becomes easier than ever.",
    img: "/temp-banner.png",
    iconLists: ["/ts.svg", "/tail.svg", "/re.svg", "/c.svg","prisma-svgrepo-com.svg","stripe-icon.svg"],
    link: "",
  },
  // {
  //   id: 4,
  //   title: "Lorem Epsum",
  //   des: "Lorem epsum",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "",
  // },
];

export const testimonials = [
  {
    quote:
      "There is no passion to be found in settling for less than what are you capable of living.",
    name: "-Nelson Mandela",
    title: "",
  },
  {
    quote:
      "Hey. Don’t ever let somebody tell you… You can’t do something. Not even me. Alright? You got a dream… You gotta protect it. People can’t do something themselves, they wanna tell you ‘you can’t do it.’ If you want something, go get it. Period.",
    name: "-Will Smith as Chris Gardner",
    title: "",
  },
  {
    quote:
      "You need to learn how to select your thoughts just the same way you select your clothes every day. This is a power you can cultivate. If you want to control things in your life so bad, work on the mind. That’s the only thing you should be trying to control.",
    name: "-Elizabeth Gilbert",
    title: "",
  },
  {
    quote:
      "In this life, you don’t have to prove nothing to nobody but yourself. And after what you’ve gone through, if you haven’t done that by now, it ain’t gonna never happen. Now go on back.",
    name: "-Fortune",
    title: "",
  },
  {
    quote:
      "Nobody is gonna hit as hard as life, but it ain’t how hard you can hit. It’s how hard you can get hit and keep moving forward. It’s how much you can take, and keep moving forward. That’s how winning is done.",
    name: "-Rocky Balboa",
    title: "",
  },
];

export const companies = [
  {
    id: 1,
    name: "C++",
    img: "/html5.svg",
    nameImg: "/html5below.svg",
  },
  {
    id: 2,
    name: "NodeJS",
    img: "/mongodb.svg",
    nameImg: "/mongodbbelow.svg",
  },
  {
    id: 3,
    name: "Codeforces",
    img: "/js.svg",
    nameImg: "/jsbelow.svg",
  },
  {
    id: 4,
    name: "NextJS",
    img: "/re.svg",
    nameImg: "/reactbelow.svg",
  },
  {
    id: 5,
    name: "Leetcode.",
    img: "/ts.svg",
    nameImg: "/tsbelow.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "NIT Jamshedpur (2026)",
    desc: "Electronics and Communication Engineering",
    className: "md:col-span-2",
    thumbnail: "/books.svg",
  },
  {
    id: 2,
    title: "Delhi Public School Ranchi (2022)",
    desc: "Secondory High School, 96.2%",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/dpsschool.svg",
  },
  {
    id: 3,
    title: "DAV Public School Tapin North (2020)",
    desc: "Primary High School, 94%",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/davschool.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
