import { defineStore } from 'pinia';



export const NavigationStore = defineStore('navigation', {
  state: () => ({
    buttons: [],
    loginState : false
 
  }),
  actions: {
    setButtons(buttons) {
        this.buttons = buttons;
      },
      changeLoginState(state) {
        this.loginState = state;
      },
  },
});