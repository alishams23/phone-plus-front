import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userToken: null,
    username: null, // Add the username field
    status: null, 
  }),
  actions: {
    setToken(token, username,status) {
  

      this.userToken = token;
      this.username = username;
       this.status = status;
      // Save the token and username in a cookie
      this.saveTokenAndUsernameInCookie(token, username,status);
    },

    // Function to save the token and username in a cookie
    saveTokenAndUsernameInCookie(token, username,status) {
      document.cookie = `userToken=${token};  path=/; max-age=${60 * 60 * 24 * 100 }`;
      document.cookie = `usernameUser=${username};  path=/; max-age=${60 * 60 * 24 * 100 }`;
      document.cookie = `status=${status};  path=/; max-age=${60 * 60 * 24 * 100 }`;
    },

    // Function to load the token and username from a cookie
    loadTokenAndUsernameFromCookie() {
      const cookies = document.cookie.split('; ');
      const token = cookies.find((row) => row.startsWith('userToken='))?.split('=')[1];
      const username = cookies.find((row) => row.startsWith('usernameUser='))?.split('=')[1];
      const status = cookies.find((row) => row.startsWith('status='))?.split('=')[1];
      this.userToken = token || null;
      this.username = username || null;
      this.status = status || null;

    },

    isAuthenticated() {
      return this.userToken !== null;
    },

    logout() {
      // Clear the user token and username
      this.userToken = null;
      this.username = null;
      this.status = null;
      // Remove the token and username from the cookie
      document.cookie = 'userToken=; username=; status=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    },
  },
});

