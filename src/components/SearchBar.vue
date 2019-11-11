<template>
  <section class="flex flex-col">
    <div class="bg-white py-4 container mx-auto flex sm:justify-center sm:flex-row flex-col items-center">
      <div class="relative">
        <input class="w-64 focus:outline-none focus:shadow-outline shadow mx-4 lg:my-0 my-1 pl-8 pr-6 py-2 rounded text-sm" placeholder="Search for a job title">
        <div class="absolute inset-y-0 left-0 ml-5 mt-2">
          <svg class="h-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
          </svg>
        </div>
      </div>
      <div>
        <input class="w-64 focus:outline-none focus:shadow-outline shadow mx-4 lg:my-0 my-1 px-6 py-2 rounded text-sm" placeholder="Search for a city or area">
      </div>
      <a href="#" class="sm:w-14 inline-block mx-4 lg:my-0 my-1 px-6 py-2 rounded shadow-lg bg-red-500 text-white text-center tracking-wider text-sm focus:outline-none focus:shadow-outline hover:bg-red-600">Search</a>
      <label for="filter-toggle" class="cursor-pointer block">
        <div class="sm:w-14 inline-block mx-4 lg:my-0 my-1 px-6 py-2 rounded bg-gray-400 text-gray-500 text-center tracking-wider text-sm hover:bg-gray-600 focus:outline-none focus:shadow-outline">Filters</div>
      </label>
    </div>
    <input type="checkbox" class="hidden" id="filter-toggle" />

    <div class="hidden" id="filter">
      <div class="bg-gray-300 flex sm:flex-row flex-col justify-center py-4 items-center">
        <div class="flex flex-col mx-4 lg:my-0 my-1 text-xs">
          <label class="text-gray-800 font-semibold tracking-wider pb-1">Job type</label>
          <div class="inline-flex  p-2">
            <div class="flex flex-col w-32">
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox">
                <span class="ml-2">Full-time</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox">
                <span class="ml-2">Part-time</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox">
                <span class="ml-2">Internship</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox">
                <span class="ml-2">Student</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox">
                <span class="ml-2">Project</span>
              </label>
            </div>
            <div class="flex flex-col w-32">
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox">
                <span class="ml-2">Graduate</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox">
                <span class="ml-2">Temporary</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox">
                <span class="ml-2">Thesis</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox">
                <span class="ml-2">Freelance</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox">
                <span class="ml-2">PhD / Research</span>
              </label>
            </div>
          </div>
        </div>
        <div class="flex flex-col mx-4 lg:my-0 my-1 w-64 text-xs">
          <label class="text-gray-800 font-semibold tracking-wider text-xs pb-1">Category</label>
          <div class="flex flex-col bg-white h-24 overflow-scroll scrolling-auto p-2 rounded border-solid border-white border-b-8">
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">IT og software</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Salg og kundeservice</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Projekt og drift</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Finansiering og regnskab</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Pleje og omsorg</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Business og strategi</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Medicin og sundhed</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Maskinteknik</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Markedsføring, sprog & kommunikation</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Jura</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Detailhandel</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Elektroteknologi</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">HR og personalepleje</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Hotel og turisme</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Arkitektur og konstruktion</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Supply chain og logistik</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Administration</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Kvalitetssikring og sikkerhed</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Kreative & design</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Uddannelse og træning</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Klima, miljø og bæredygtighed</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Biologi, bioteknologi og biokemi</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Konsulent</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Kunst og Kultur</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Olie, gas og energi</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Landbrug, skovbrug og maritime uddannelser</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Kemi</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Ejendomshandel</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Matematik og fysik</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Samfund og politik</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Veterinærmedicin og dyrevidenskab</span>
            </label>
          </div>
        </div>
        <div class="flex flex-col mx-4 lg:my-0 my-1 sm:w-32 w-64 text-xs">
          <label class="text-gray-800 font-semibold tracking-wider text-xs pb-1">I speak</label>
          <div class="flex flex-col h-24 p-2">
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">English</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">Danish</span>
            </label>
          </div>
        </div>
        <div class="flex flex-col mx-4 lg:my-0 my-1 w-64">
          <label class="text-gray-800 font-semibold tracking-wider text-xs pb-1">Keywords</label>
          <div class="flex flex-col h-24 p-2">
            <input class="rounded focus:outline-none focus:shadow-outline px-2 py-1 text-xs font-medium" placeholder="UX">
          </div>
        </div>
        <div class="w-32 mb-8">
          <a href="#" class="text-gray-500">Reset Filter</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {}
}
</script>


<style>
  #filter-toggle:checked + #filter {
    display: block;
  }
</style>
