<template>
  <header class="bg-white border-b-2 flex justify-between flex-col sm:flex-row">
    <div class="flex justify-between sm:px-8 lg:px-16 px-0 items-center">
      <div>
        <router-link to="/">
          <img class="w-40 pl-6" src="https://i.imgur.com/fkT4IWc.png" alt="">
        </router-link>
      </div>
      <div>
        <button @click="toggleNav" type="button" class="sm:hidden block pr-6 focus:outline-none">
          <svg class="focus:outline-none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"><path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
          </svg>
        </button>
      </div>
    </div>

    <nav class="flex sm:flex flex-col sm:flex-row sm:px-8 lg:px-16 px-0" :class="{'block' : isOpen, 'hidden': !isOpen}">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-gray-600 pt-4 sm:pt-0 px-6">
        <router-link to="/jobs" class="pt-4 sm:pt-8 sm:pb-1 sm:px-2 px-0 sm:block sm:h-20 sm:border-b-2 sm:border-transparent hover:border-red-500">Jobs</router-link>
        <router-link to="/companies" class="pt-4 sm:pt-8 sm:pb-1 sm:px-2 px-0 sm:block sm:h-20 sm:border-b-2 sm:border-transparent hover:border-red-500">Companies</router-link>
        <router-link to="/events" class="pt-4 sm:pt-8 sm:pb-1 sm:px-2 px-0 sm:block sm:h-20 sm:border-b-2 sm:border-transparent hover:border-red-500">Events</router-link>
        <router-link to="/notifications" class="pt-4 sm:pt-8 sm:pb-1 sm:px-2 px-0 sm:block sm:h-20 sm:border-b-2 sm:border-transparent hover:border-red-500">Notifications</router-link>
      </div>
      <div class="text-gray-600 pt-5 sm:pt-6 mt-5 sm:mt-0 px-6 sm:px-0 text-xs border-t-2 sm:border-none relative">
        <div>
          <a href="#"  @click="toggleDropdown" class="sm:ml-4 flex items-center justify-start sm:mb-0 mb-4 cursor-pointer">
            <img src="https://image.flaticon.com/icons/svg/194/194938.svg" class="rounded-full w-10 h-10 border-2 border-transparent hover:border-red-500" alt="Profile image">
            <p class="ml-2 sm:hidden">Sofie Andersen</p>
          </a>
        </div>
        <div class="flex flex-col sm:absolute bg-white rounded sm:mt-6 sm:right-0 sm:w-48 sm:shadow-lg sm:py-2" :class="{'block' : dropdownOpen, 'hidden': !dropdownOpen}">
          <router-link to="/profile" class="p-2 sm:block hover:text-white hover:bg-gray-400">My Profile</router-link>
          <router-link to="/profile/saved" class="p-2 sm:block hover:text-white hover:bg-gray-400">Saved</router-link>
          <router-link to="/profile/coffee-tickets" class="p-2 sm:block hover:text-white hover:bg-gray-400">Coffee Tickets</router-link>
          <router-link to="/profile/settings" class="p-2 sm:block hover:text-white hover:bg-gray-400">Settings</router-link>
          <a href="#" class="p-2 sm:block hover:text-white hover:bg-gray-400">Support</a>
          <a href="#" class="p-2 sm:block hover:text-white hover:bg-gray-400">Feedback</a>
          <a href="#" class="p-2 sm:block hover:text-white hover:bg-gray-400">Privacy Policy</a>
          <a href="#" class="p-2 sm:block hover:text-white hover:bg-gray-400">Terms and conditions</a>
          <a href="#" class="p-2 sm:block hover:text-white hover:bg-gray-400">Log out</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      dropdownOpen: false,
    }
  },
  methods: {
    toggleNav() {
      this.isOpen = !this.isOpen
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen
    }
  },
}
</script>


<style>
</style>
