Vue.component('search-input', {
    template: /*html*/`
    <form method="get" class="search" id="search">
    <div class="searchBrowse">Browse <i class="fas fa-caret-down"></i></div>
    <input class="findValue" name="search" type="text" :placeholder="search" v-model="search">
    <button v-on:click="search" i class="fas fa-search"></i></button>
    </form>
        `,
    data() {
      return {
        search: 'Поиск...',
      }
    },
    watch: {
      search() {
        this.$emit('search', this.search); 
      }
    }
  });


