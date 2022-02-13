<template>
  <div class="posts">
    <h1>Task 3</h1>
    <hr>
    <ul v-if="posts" class="posts-list">
      <li
          v-for="(item, index) in posts"
          :key="index"
          class="posts-list__item"
      >
        <h5>{{ item.title }}</h5>
        <p>{{ item.body }}</p>
      </li>
    </ul>
    <div v-if="handleError" class="posts-error">
      {{ handleError }}
    </div>
  </div>
</template>

<script>
const CUSTOM_ERROR = 'Something was wrong...',
      POSTS_URL = 'http://jsonplaceholder.typicode.com/posts';

export default {
  name: 'task-three',
  data() {
    return {
      posts: null,
      handleError: '',
    };
  },
  created() {
    this.getPromiseData();
    // this.getAsyncData();
  },
  methods: {
    getPromiseData() {
      fetch(POSTS_URL)
      .then(response => {
          this.checkResponse(response);
          return response.json();
        })
        .then(data => {
          this.posts = data;
        })
        .catch(error => {
          this.handleError = CUSTOM_ERROR;
          console.error(error);
        });
    },
    async getAsyncData() {
      const asyncPosts = await fetch(POSTS_URL);
      try {
        const response = await asyncPosts;
        this.posts = await asyncPosts.json();
        this.checkResponse(response);
      } catch(error) {
        this.handleError = CUSTOM_ERROR;
        console.error(error);
      }
    },

    checkResponse(res) {
      if (!res.ok) {
        this.handleError = CUSTOM_ERROR;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.posts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  h1 {
    width: 100%;
    text-align: center;
  }

  hr {
    height: 2px;
    background: #000;
    width: 100%;
    border: 0;
  }

  &-list {
    display: flex;
    flex-wrap: wrap;

    &__item {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin: 10px;
      width: 220px;
      border: 2px solid #000;
      padding: 10px;
      box-sizing: border-box;
    }
  }

  &-error {
    width: 100%;
    font-size: 32px;
    text-align: center;
    color: #f00;
  }
}
</style>
