const component = {
  data() {
    //data method will return an object.
    return {
      name: "Justin",
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
}; //Reactive Data is quite similar to useState in React.

Vue.createApp(component).mount("#app"); //initialize Vue app, mounted on an html div with id app.
