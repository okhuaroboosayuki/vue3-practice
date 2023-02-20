const posts = [
  {
    id: 1,
    title: "I'm learning Vue.js",
    body: `<strong><em>Nothing is too hard for me to learn!</em></strong> I'm learning Vue.js. I will become a master of Vue. It is not hard for me to understand`,
  },

  {
    id: 2,
    title: "Vue.js is easy for me",
    body: "Whether options API or composition API, Vue.js is easy for me to understand and become a master of. I will be good at Vue.js.",
  },

  {
    id: 3,
    title: "I understand Vue.js",
    body: "Vue is easy for me to learn. I'm learning Vue.js. I will become a master of Vue. It is not hard for me to understand",
  },
];

const links = [
  {
    id: 1,
    title: "home",
    url: "/",
  },

  {
    id: 2,
    title: "portfolio",
    url: "/portfolio",
  },

  {
    id: 3,
    title: "contact me",
    url: "/contact",
  },
];

const appHeader = {
  data() {
    return {
      name: "Osayuki",
      links,
    };
  },
  template: `<header>
  <h1>{{ name }}'s Portfolio</h1>
  <nav>
    <ul>
      <li v-for="link in links" :key="link.id">
        <a :href="link.url">{{ link.title }}</a>
      </li>
    </ul>
  </nav>
</header>`,
};
const blogPost = {
  props: ["post"],

  template: `
  <article>
    <h3>{{ post.title }}</h3>
    <p v-html="post.body"></p>
    <p class="read_more">Read More</p>
  </article>
  `,
};

const app = Vue.createApp({
  components: {
    "app-header": appHeader,
    "blog-post": blogPost,
  },
  created() {
    this.getPosts();
  },
  data() {
    return {
      posts: [],
      darkMode: false,
      darkStyle: {
        background: "#38383a",
        color: "whitesmoke",
      },
      baseFont: {
        fontFamily: "monospace",
      },
    };
  },

  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
    async getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      this.posts = data;
    },
  },
});

// app.component("app-header", {
//   data() {
//     return {
//       name: "Osayuki",
//       links,
//     };
//   },
//   template: `<header>
//   <h1>{{ name }}'s Portfolio</h1>
//   <nav>
//     <ul>
//       <li v-for="link in links" :key="link.id">
//         <a :href="link.url">{{ link.title }}</a>
//       </li>
//     </ul>
//   </nav>
// </header>`,
// });

// app.component("blog-post", {
//   props: ["post"],

//   template: `
//   <article>
//     <h3>{{ post.title }}</h3>
//     <p v-html="post.body"></p>
//     <p class="read_more">Read More</p>
//   </article>
//   `,
// });

app.mount("body");
