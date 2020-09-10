Vue.component('search-input', {
    template: /*html*/`
    <input class="findValue" name="search" type="text" :placeholder="search" v-model="search">
        `,
    data() {
      return {
        search: 'Search for Item...',
      }
    },
    
    methods: {
      onSearchHandler(query) {
        this.$emit('search', query);
      }
    },
    watch: {
      search() {
        this.$emit('search', this.search); 
      }
    }
  });


//   Vue.component('topbar', {
//     template: /*html*/`
        
//         <search-input @search="onSearchHandler"></search-input>
        
//     `,
//     methods: {
//       onSearchHandler(query) {
//         this.$emit('search', query);
//       }
//     }
//   });