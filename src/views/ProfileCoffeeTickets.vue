<template>
<main class="container mx-auto text-gray-700">
    <div class="flex">
      <div class="flex flex-col mx-auto w-1/3">
        <div class="flex flex-wrap text-md pt-2">
          <p>Coffee Tickets</p>
        </div>
        <div class="border-r-2 h-screen">
          <div class="ticket flex flex-col text-white m-4 rounded-lg py-4 text-sm">
            <img src="https://thehub-dk.imgix.net/files/5b85419023003ae417ed2395/logo_upload-879eb301e29f3a54faa8588c5f6582a2.png?fit=crop&w=300&h=300&q=60" class="w-16 h-16 rounded shadow bg-blue-200 mx-6">
              <p class="mx-6 mt-3 tracking-wide truncate leading-loose">Peter (CEO) wants to offer you a coffee!
                <br>
              BlueSense Diagnostics Aps
                <br>
              <span class="font-thin italic leading-loose">Expires in 3 months</span>
              </p>
          </div>
        </div>
      </div>


      <div class="hidden md:block flex-1 pb-20 md:px-5 lg:px-0 mx-10">
        <div class="w-1/2 flex flex-col large-ticket h-1/2 my-10 rounded-lg text-white">
          <div class="flex flex-col items-center px-20">
            <img src="https://thehub-dk.imgix.net/files/5b85419023003ae417ed2395/logo_upload-879eb301e29f3a54faa8588c5f6582a2.png?fit=crop&w=300&h=300&q=60" class="w-20 h-20 rounded shadow bg-blue-200 mx-6 my-12">
            <p class="text-xl font-light">Dear Damian,</p>
            <p class="text-sm font-thin mt-5">Congratulations - you're amazing and here's a cup of coffee! Your reward? A direct line to the CEO, Peter.
            Give him a call to hear more
            about their organisation.</p>
            <div class="w-38 flex flex-col my-2 font-thin">
                <a href="#" class="inline-block my-2 px-6 py-1 rounded-full bg-orange-500 shadow-lg text-white text-center tracking-wider text-xs">Visit website</a>
                <a href="#" class="inline-block my-2 px-6 py-1 rounded-full bg-orange-500 shadow-lg text-white text-center tracking-wider text-xs">Call</a>
                <a href="#" class="inline-block my-2 px-6 py-1 rounded-full bg-orange-500 shadow-lg text-white text-center tracking-wider text-xs">Send email</a>
              </div>
            <p class="text-sm font-thin my-5">We hope you enjoy your coffee!</p>
          </div>
        </div>
        <div class="w-2/3 flex text-sm flex-col shadow rounded-lg p-5 font-light">
          <p>Invite other people to the platform and get free coffees for you and your friends</p>
          <div class="inline-flex my-2">
            <a href="#" class="inline-block  px-6 py-1 rounded-full bg-red-700 shadow-lg text-white text-center tracking-wider text-xs">Invite</a>
            <a href="" class="inline-block px-6 py-1 text-red-700 text-center tracking-wider text-xs">Copy link</a>
            <div class="">Your link<span class="ml-4 text-gray-600 font-thin">www.freecoffee.org.uk</span></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
  .ticket {
    background: linear-gradient(45deg, #fe5176 0%,#fe5176 0%,#feaf06 100%,#feaf06 100%);
  }

  .large-ticket {
    background: linear-gradient(to bottom, #fe5176 0%,#feaf06 48%,#fe5176 99%);
  }

</style>
