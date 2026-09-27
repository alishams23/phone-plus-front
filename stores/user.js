import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    userToken: null,
    username: null,
    status: null,
    hasDismissedPopup: false, // Add this new field
  }),
  actions: {
    setToken(token, username, status) {
      this.userToken = token;
      this.username = username;
      this.status = status;
      this.saveTokenAndUsernameInCookie(token, username, status);
    },

    saveTokenAndUsernameInCookie(token, username, status) {
      document.cookie = `userToken=${token}; path=/; max-age=${60 * 60 * 24 * 100}`;
      document.cookie = `usernameUser=${username}; path=/; max-age=${60 * 60 * 24 * 100}`;
      document.cookie = `status=${status}; path=/; max-age=${60 * 60 * 24 * 100}`;
      // Save hasDismissedPopup in cookie as well
      document.cookie = `hasDismissedPopup=${this.hasDismissedPopup}; path=/; max-age=${60 * 60 * 24 * 100}`;
    },

    loadTokenAndUsernameFromCookie() {
      const cookies = document.cookie.split('; ');
      const token = cookies.find((row) => row.startsWith('userToken='))?.split('=')[1];
      const username = cookies.find((row) => row.startsWith('usernameUser='))?.split('=')[1];
      const status = cookies.find((row) => row.startsWith('status='))?.split('=')[1];
      const hasDismissedPopup = cookies.find((row) => row.startsWith('hasDismissedPopup='))?.split('=')[1];
      
      const cleanVal = (val) => (val && val !== 'undefined' && val !== 'null' && val.trim() !== '') ? val.trim() : null;

      this.userToken = cleanVal(token);
      this.username = cleanVal(username);
      this.status = cleanVal(status);
      this.hasDismissedPopup = hasDismissedPopup === 'true' || false; // Parse boolean from string
    },

    isAuthenticated() {
      return this.userToken !== null && this.userToken !== 'undefined' && this.userToken !== 'null';
    },

    logout() {
      this.userToken = null;
      this.username = null;
      this.status = null;
      this.hasDismissedPopup = false; // Optionally reset this on logout
      document.cookie = 'userToken=; username=; status=; hasDismissedPopup=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    },

    // New action to mark popup as dismissed
    dismissPopup() {
      this.hasDismissedPopup = true;
      this.saveTokenAndUsernameInCookie(this.userToken, this.username, this.status); // Update cookie
    },
  },
});