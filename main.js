const component = {
  data() {
    //data method will return an object.
    return {
      name: "Justin",
      count: 0,
      inputTask: "",
      tasks: [],
      //   headerClass: "text-green",
    };
  },
  computed: {
    //returns
    greetings() {
      if (!this.name.length) {
        return "who are you?";
      } else {
        return "Hello Justin";
      }
    },
    headerClass() {
      return !this.name.length ? "text-red" : "text-green"; //these class names are defined in css stylesheet.
    },
  },

  methods: {
    increment() {
      // this.count = this.count + 1;
      this.count++;
    },
    decrement() {
      this.count--;
    },
    submitHandler() {
      this.tasks.push(this.inputTask);
      this.inputTask = "";
    },
  },
}; //Reactive Data is quite similar to useState in React.

Vue.createApp(component).mount("#app"); //initialize Vue app, mounted on an html div with id app.
