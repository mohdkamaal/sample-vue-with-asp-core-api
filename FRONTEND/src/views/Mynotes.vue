<template>
  <div class="container">
    <h1>Notes</h1>
      
        <div class="card-columns">
         <div v-for="card in notes" :key="card">
          <div class="card" v-bind:style="{ 'background-color': card.color, 'height': '300px' }">
            <div class="card-body text-center">
            <h4 class="card-text">{{ card.note1 }}</h4>
          </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script >
import RestResource from "../store/service";
const restResourceService = new RestResource();

export default {
  name: "mynotes",
  components: {},
  data: () => {
    return {
      notes: [],
    };
  },
  methods: {
    getNotes() {
      restResourceService.sendRequest().then((resp) => {
        // eslint-disable-next-line no-debugger
        debugger;
        console.log("", resp);
        this.notes = resp;
      });
    },
  },
  async mounted() {
    // eslint-disable-next-line no-debugger
    this.getNotes();
    // const result = await this.$store.dispatch("GET_NOTES"); // when the page is initially loaded, invoke the data store method
    // if (result) {
    //   console.log('>>>>>>>>>', result)
    // }
  },
};
</script>