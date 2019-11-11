<template>
  <main>
    <section class="container flex flex-col max-w-xl mx-auto">
      <p class="text-md self-start text-gray-700 tracking-wider py-5 ml-6">Tuesday, December 7</p>
      <!-- Event card desktop -->
      <div class="flex flex-col sm:flex-row shadow rounded-lg m-3 sm:relative">
        <img src="https://naimsheriff.com/wp-content/uploads/2016/03/IO_Event.jpg" class="sm:rounded-l-lg rounded-t-lg object-cover h-40 w-full sm:32 sm:w-1/3">
        <p class="text-sm sm:bg-white sm:w-20 mt-3 ml-6 sm:text-center tracking-wider text-green-400 sm:py-1 sm:absolute sm:bottom-0 sm:mb-3 sm:mt-0 sm:ml-32 sm:rounded sm:shadow-lg">New</p>
        <div class="flex-1 mx-6 sm:mx-8 my-2 sm:my-0 flex flex-col justify-around text-gray-700 text-sm tracking-wider">
          <a href="#" class="text-md">UX Copenhagen 2020</a>
          <p class="text-gray-500">6:00 PM - 9:00 PM</p>
          <div class="flex justify-between">
            <p>700 DKK</p>
            <p>Copenhagen</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col sm:flex-row shadow rounded-lg m-3 sm:relative">
        <img src="https://naimsheriff.com/wp-content/uploads/2016/03/IO_Event.jpg" class="sm:rounded-l-lg rounded-t-lg object-cover h-40 w-full sm:32 sm:w-1/3">
        <p class="text-sm sm:bg-white sm:w-20 mt-3 ml-6 sm:text-center tracking-wider text-orange-400 sm:py-1 sm:absolute sm:bottom-0 sm:mb-3 sm:mt-0 sm:ml-32 sm:rounded sm:shadow-lg">Popular</p>
        <div class="flex-1 mx-6 sm:mx-8 my-2 sm:my-0 flex flex-col justify-around text-gray-700 text-sm tracking-wider">
          <a href="#" class="text-md">UX Copenhagen 2020</a>
          <p class="text-gray-500">6:00 PM - 9:00 PM</p>
          <div class="flex justify-between">
            <p>700 DKK</p>
            <p>Copenhagen</p>
          </div>
        </div>
      </div>
      <p class="text-md self-start text-gray-700 tracking-wider py-5 ml-6">Wednesday, December 8</p>
      <div class="flex flex-col sm:flex-row shadow rounded-lg m-3 sm:relative">
        <img src="https://naimsheriff.com/wp-content/uploads/2016/03/IO_Event.jpg" class="sm:rounded-l-lg rounded-t-lg object-cover h-40 w-full sm:32 sm:w-1/3">
        <p class="text-sm sm:bg-white sm:w-20 mt-3 ml-6 sm:text-center tracking-wider text-red-400 sm:py-1 sm:absolute sm:bottom-0 sm:mb-3 sm:mt-0 sm:ml-32 sm:rounded sm:shadow-lg">Sold out</p>
        <div class="flex-1 mx-6 sm:mx-8 my-2 sm:my-0 flex flex-col justify-around text-gray-700 text-sm tracking-wider">
          <a href="#" class="text-md">UX Copenhagen 2020</a>
          <p class="text-gray-500">6:00 PM - 9:00 PM</p>
          <div class="flex justify-between">
            <p>700 DKK</p>
            <p>Copenhagen</p>
          </div>
        </div>
      </div>
    </section>
    <!-- Full event modal template -->
    <div class="my-20"></div>
    <div class="container max-w-xl mx-auto h-full shadow relative">
      <img src="https://assets.yellowtrace.com.au/wp-content/uploads/2019/07/05151626/Milantrace-2019-Event-Wrap-Up-Sydney-Evening-Yellowtrace-02.jpg" class="object-cover h-48 w-full">
      <p class="text-sm sm:bg-white sm:w-20 mt-3 ml-6 sm:text-center tracking-wider text-green-400 sm:py-1 sm:absolute sm:top-0 sm:mb-3 sm:mt-3 sm:ml-5 sm:rounded">New</p>
      <a href="#" class="text-sm text-white sm:absolute sm:top-0 sm:right-0 sm:mt-3 sm:mr-5 sm:rounded">X</a>
      <p class="text-sm tracking-wider text-white sm:absolute sm:top-0 sm:mb-3 sm:mt-32 sm:ml-5">Create Better Products through Design Thinking<br>
        <span>Hosted by ITU</span>
      </p>
      <div class="p-5">
        <a href="#" class="w-14 inline-block px-4 py-1 rounded bg-green-600 text-white text-center tracking-wider text-xs opacity-75 hover:opacity-100">Register</a>
        <div class="my-3">
          <div class="flex flex-col text-xs">
            <div class="flex justify-between w-64 mb-3">
              <p>Tuesday, November 5</p>
              <p>3:00 PM - 6:00 PM</p>
            </div>
            <div class="flex justify-between w-64 mb-3">
              <p>Copenhagen</p>
              <p>IT University of Copenhagen</p>
            </div>
            <p class="border-b-2 pb-5">700 DKK</p>
          </div>
          <div class="my-5 text-sm">
            <p class="leading-loose text-gray-800 font-medium">About the event</p>
            <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam delectus voluptas porro est provident earum quam quas maxime. Molestiae perferendis eos eligendi explicabo quasi consectetur, error temporibus doloremque aliquid sint?</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
