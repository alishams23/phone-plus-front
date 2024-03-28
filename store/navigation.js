import { defineStore } from 'pinia';



export const NavigationStore = defineStore('navigation', {
  state: () => ({
    buttons: [],
 
  }),
  actions: {
    setButtons(buttons) {
    
  
        this.buttons = buttons;
    
      },
  },
});