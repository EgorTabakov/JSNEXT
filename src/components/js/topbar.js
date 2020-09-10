Vue.component('topbar', {
    template: /*html*/`
        
        <search-input @search="onSearchHandler"></search-input>
        
    `,
    methods: {
      onSearchHandler(query) {
        this.$emit('search', query);
      }
    }
  });