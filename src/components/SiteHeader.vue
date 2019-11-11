<template>
  <header class="bg-white">
    <section class="flex justify-between sm:px-8 lg:px-16 px-6 flex-wrap items-center sm:py-0 py-2 border-b-2">
      <div class="flex-1 flex justify-between items-center">
        <router-link to="/">
          <svg class="h-20 w-auto" version="1.1" id="Layer_1" x="0" y="0" viewBox="0 0 2299 1080" xml:space="preserve"><path class="st0" d="M347 578c-5 26-21 49-46 64a95 95 0 11-15-172c-5-34 2-68 18-98a195 195 0 10137 241c-34-2-67-14-94-35zM401 396a70 70 0 0171 122c-34 19-78 7-97-26s-8-77 26-96z"/><path d="M1859 561c0 43-36 78-81 78a78 78 0 110-155c45-1 81 33 81 77zm-119 0c0 23 16 40 39 40 22 0 38-17 38-40s-16-41-38-41c-23 0-39 17-39 41zM591 561c0-44 35-78 80-78 25 0 48 12 60 30l3 10c0 10-8 18-18 18-5 0-10-1-13-6-8-9-18-15-32-15-22 0-39 17-39 41s16 41 39 41c13 0 23-6 32-15 4-5 8-7 13-7 10 0 18 8 18 18 0 4-1 7-3 11a70 70 0 01-60 30c-45 0-80-35-80-78zM890 547v71c0 12-8 20-19 20-10 0-18-6-20-15a62 62 0 01-44 16c-30 0-51-18-51-45s21-43 56-43h38v-7c0-16-10-26-28-26-11 0-20 4-29 11-5 4-8 5-12 5-10 0-17-7-17-16 0-6 3-12 8-17 13-11 32-18 54-18 41 0 64 23 64 64zm-41 33v-2h-31c-14 0-21 5-21 15s8 16 21 16c18 0 31-13 31-29zM1023 503c0 11-7 18-19 20-21 1-34 15-34 38v57c0 12-9 21-20 21-12 0-21-9-21-21V504c0-12 9-21 20-21s19 8 20 19c9-11 22-17 36-17 11 0 18 7 18 18zM1182 553v1c0 12-9 20-22 20h-85c5 19 20 30 42 30 11 0 22-3 31-9l9-3c9 0 16 7 16 17 0 6-3 11-10 16-14 9-30 14-47 14-47 0-82-34-82-78s34-78 78-78c40 0 70 30 70 70zm-107-7h68c-1-18-14-30-32-30s-31 12-36 30zM1353 553v1c0 12-9 20-22 20h-85c5 19 20 30 42 30 11 0 22-3 31-9l9-3c9 0 16 7 16 17 0 6-3 11-10 16-14 9-30 14-47 14-47 0-82-34-82-78s34-78 78-78c40 0 70 30 70 70zm-107-7h68c-1-18-14-30-32-30s-31 12-36 30zM1479 503c0 11-7 18-19 20-22 1-35 15-35 38v57c0 12-9 21-20 21-12 0-20-9-20-21V504c0-12 8-21 20-21 10 0 18 8 19 19 10-11 22-17 37-17 11 0 18 7 18 18z"/><path d="M1619 446c11 0 20 8 20 20v20h27c10 0 17 8 17 17 0 10-7 18-17 18h-27v58c0 17 8 23 27 23h5c11 0 18 7 18 17 0 7-4 13-10 16-6 2-12 4-21 4-39 0-59-20-59-56v-62h-9c-10 0-17-8-17-18 0-9 7-17 17-17h8v-20c1-12 9-20 21-20M2053 504v115c0 47-29 74-77 74-25 0-47-7-64-21-6-4-9-9-9-14 0-11 8-19 19-19 3 0 7 2 10 4 13 9 26 13 40 13 25 0 40-13 40-35v-8a60 60 0 01-45 18c-42 0-72-31-72-74s30-74 72-74c20 0 36 7 46 19 1-11 9-19 20-19s20 9 20 21zm-40 52c0-23-15-38-38-38-22 0-38 16-38 39s16 40 38 40c23-1 38-17 38-41zM2239 561c0 43-35 78-80 78s-79-35-79-78c0-44 34-78 79-78s80 34 80 78zm-118 0c0 23 16 40 38 40s39-17 39-40-17-41-39-41-38 17-38 41z"/><path d="M1873 523c20 0 37 16 37 36-1 20-17 37-37 37s-36-17-36-37 17-36 36-36z" fill="#fff"/><path class="st0" d="M1862 541c11-6 24-3 30 7 6 11 3 24-8 30-10 6-23 2-29-8s-3-23 7-29z"/></svg>
        </router-link>
      </div>
      <label for="menu-toggle" class="cursor-pointer sm:hidden block">
        <svg class="focus:outline-none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24"><path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
        </svg>
      </label>
      <input type="checkbox" class="hidden" id="menu-toggle" />

      <div class="hidden sm:flex sm:items-center sm:w-auto w-full" id="menu">
        <nav>
          <ul class="sm:flex items-center justify-between text-xs text-gray-600 pt-4 sm:pt-0">
            <li>
              <router-link to="/jobs" class="sm:pt-4 sm:pb-1 sm:px-2 py-3 px-0 block border-b-2 border-transparent hover:border-red-500">Jobs</router-link>
            </li>
            <li>
              <router-link to="/companies" class="sm:pt-4 sm:pb-1 sm:px-2 py-3 px-0 block border-b-2 border-transparent hover:border-red-500">Companies</router-link>
            </li>
            <li>
              <router-link to="/events" class="sm:pt-4 sm:pb-1 sm:px-2 py-3 px-0 block border-b-2 border-transparent hover:border-red-500">Events</router-link>
            </li>
            <li>
              <a href="#" class="sm:pt-4 sm:pb-1 sm:px-2 py-3 px-0 block border-b-2 border-transparent hover:border-red-500">Coffee Tickets</a>
            </li>
            <li>
              <a href="#" class="sm:pt-4 sm:pb-1 sm:px-2 py-3 px-0 block border-b-2 border-transparent hover:border-red-500">Notifications</a>
            </li>
          </ul>
        </nav>
        <a href="#" class="sm:ml-4 flex items-center justify-start sm:mb-0 mb-4 cursor-pointer">
          <img src="https://image.flaticon.com/icons/svg/194/194938.svg" class="rounded-full w-10 h-10 border-2 border-transparent hover:border-red-500" alt="Profile image">
        </a>
      </div>
    </section>


  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
  props: {}
}
</script>


<style>
  #menu-toggle:checked + #menu {
    display: block;
  }
</style>
