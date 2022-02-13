<template>
  <div class="twitter">
    <h1>Task 2</h1>
    <hr>
    <twitter-component :user-name="userName" />
  </div>
</template>

<script>
import TwitterComponent from '@/components/twitterComponent';

export default {
  name: 'task-two',
  components: {
    TwitterComponent,
  },
  data() {
    return {
      userName: 'Smith',
    };
  },
};
</script>
