<template>
  <div v-if="userData" class="twitter-component">
    {{ userData }}
  </div>
</template>

<script>
export default {
  name: 'twitterComponent',
  props: {
    userName: { type: String, required: true }
  },
  data() {
    return {
      userData: null,
    };
  },
  created() {
    this.getUserData();
  },
  methods: {
    getUserData() {
      fetch(`http://someUrl/${this.userName}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.userData = data;
      })
      .catch(error => {
        console.error(error);
      });
    },
  },
};
</script>
