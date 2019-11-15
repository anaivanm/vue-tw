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
      <a href="#" class="sm:w-14 inline-block mx-2 lg:my-0 my-1 px-6 py-2 rounded shadow-lg bg-red-500 text-white text-center tracking-wider text-sm focus:outline-none focus:shadow-outline hover:bg-red-600">Search</a>
      <label for="filter-toggle" class="cursor-pointer block">
        <div class="sm:w-14 inline-block mx-2 lg:my-0 my-1 px-6 py-2 rounded bg-gray-400 text-gray-500 text-center tracking-wider text-sm hover:bg-gray-600 focus:outline-none focus:shadow-outline">Filters</div>
      </label>
    </div>
    <input type="checkbox" class="hidden" id="filter-toggle" />

    <div class="hidden" id="filter">
      <div class="bg-gray-300 flex sm:flex-row flex-col justify-center py-4 items-center">
        <div class="flex flex-col mx-4 lg:my-0 my-1 text-xs">
          <label class="text-gray-800 font-semibold tracking-wider pb-1">Job type</label>
            <div class="flex flex-col bg-white h-24 sm:w-32 w-64 overflow-scroll scrolling-auto p-2 rounded border-solid border-white border-b-8">
            <label class="inline-flex items-center" v-bind:key="jobType" v-for="jobType in jobTypes">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">{{ jobType }}</span>
            </label>
          </div>
        </div>
        <div class="flex flex-col mx-4 lg:my-0 my-1 w-64 text-xs">
          <label class="text-gray-800 font-semibold tracking-wider text-xs pb-1">Category</label>
          <div class="flex flex-col bg-white h-24 overflow-scroll scrolling-auto p-2 rounded border-solid border-white border-b-8">
            <label class="inline-flex items-center" v-for="(jobCategory, i) in jobCategories" v-bind:key="`${i}-${jobCategory}`">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">{{ jobCategory.name }}</span>
            </label>
          </div>
        </div>
        <div class="flex flex-col mx-4 lg:my-0 my-1 sm:w-20 w-64 text-xs">
          <label class="text-gray-800 font-semibold tracking-wider text-xs pb-1">I speak</label>
          <div class="flex flex-col h-24">
            <label class="inline-flex items-center" v-bind:key="language" v-for="language in languages" @click="setLanguage(language)">
              <input type="checkbox" class="form-checkbox">
              <span class="ml-2">{{ language }}</span>
            </label>
          </div>
        </div>
        <div class="flex flex-col mx-4 lg:my-0 my-1">
          <label class="text-gray-800 font-semibold tracking-wider text-xs pb-1">Keywords</label>
          <div class="flex flex-col h-24">
            <input type="text" v-model="state" class="rounded-t focus:outline-none p-1 border-b-2 border-gray-300 text-xs w-64 rounded-b-none" autocomplete="off" placeholder="UX" @input="filterStates" @focus="modal = true">
            <div v-if="filteredStates && modal">
              <ul class="overflow-scroll scrolling-auto pb-2 rounded-t-none rounded-b border-solid border-white h-16">
                <li v-bind:key="filteredState" v-for="filteredState in filteredStates" class="cursor-pointer px-1 bg-white text-xs" @click="setState(filteredState)">{{ filteredState }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-32 mb-12">
          <label class="cursor-pointer block">
            <div class="text-gray-500" @click="resetFilter">Reset Filter</div>
          </label>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {},
  data: function() {
    return {
      state: '',
      selected: [],
      modal: false,
      jobCategories: [
        {'id': '1', 'name': 'IT og software'},
        {'id': '2', 'name': 'Salg og kundeservice'},
        {'id': '3', 'name': 'Projekt og drift'},
        {'id': '4', 'name': 'Finansiering og regnskab'},
        {'id': '5', 'name': 'Pleje og omsorg'},
        {'id': '6', 'name': 'Business og strategi'},
        {'id': '7', 'name': 'Medicin og sundhed'},
        {'id': '8', 'name': 'Maskinteknik'},
        {'id': '9', 'name': 'Markedsføring, sprog & kommunikation'},
        {'id': '10', 'name': 'Jura'},
        {'id': '11', 'name': 'Detailhandel'},
        {'id': '12', 'name': 'Elektroteknologi'},
        {'id': '13', 'name': 'HR og personalepleje'},
        {'id': '14', 'name': 'Hotel og turisme'},
        {'id': '15', 'name': 'Arkitektur og konstruktion'},
        {'id': '16', 'name': 'Supply chain og logistik'},
        {'id': '17', 'name': 'Administration'},
        {'id': '18', 'name': 'Kvalitetssikring og sikkerhed'},
        {'id': '19', 'name': 'Kreative & design'},
        {'id': '20', 'name': 'Uddannelse og træning'},
        {'id': '21', 'name': 'Klima, miljø og bæredygtighed'},
        {'id': '22', 'name': 'Biologi, bioteknologi og biokemi'},
        {'id': '23', 'name': 'Konsulent'},
        {'id': '24', 'name': 'Kunst og Kultur'},
        {'id': '25', 'name': 'Olie, gas og energi'},
        {'id': '26', 'name': 'Landbrug, skovbrug og maritime uddannelser'},
        {'id': '27', 'name': 'Kemi'},
        {'id': '28', 'name': 'Ejendomshandel'},
        {'id': '29', 'name': 'Matematik og fysik'},
        {'id': '30', 'name': 'Samfund og politik'},
        {'id': '31', 'name': 'Veterinærmedicin og dyrevidenskab'},
      ],
      jobTypes: ['Full time', 'Student', 'Internship', 'Project', 'Graduate', 'Temporary', 'Volunteer', 'Thesis', 'Freelance', 'Phd / Research'
      ],
      languages: ['English', 'Danish'],
      states: [
        'UX', 'Elektroteknologi', 'Anvendt Kemi', 'Sales', 'Development', 'Design', 'IT og Økonomi', 'Kemiteknik og International Business', 'Bioteknologi', 'Softwareteknologi', 'Teknisk Biomedicin', 'Fysik og Nanoteknologi','Business Analytics', 'Transport og Logistik', 'Geofysik og Rumteknologi','Lyd og Akustisk Teknologi', 'Matematisk Modellering og Computing', 'Olie- og Gasteknologi','Telekommunikation', 'Produktion og Konstruktion', 'Netværksteknologi og IT'
      ],
      filteredStates: [],
    }
  },

  mounted() {
    this.filterStates();
  },

  methods: {
    filterStates() {
      if (this.state.length == 0) {
        this.filteredStates = this.states;
      }

      this.filteredStates = this.states.filter(state => {
          return state.toLowerCase().startsWith(this.state.toLowerCase());
      });
    },
    setState(state) {
      this.state = state
      this.modal = false
    },
    resetFilter() {
      this.state = ''
    }
  },

  watch: {
    state() {
      this.filterStates();
    }
  }
}
</script>


<style>
  #filter-toggle:checked + #filter {
    display: block;
  }
</style>
