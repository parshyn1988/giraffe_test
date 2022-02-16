<template>
  <div class="products">
    <h1>Task 1</h1>
    <hr />
    <div v-if="products" class="products-sort">
      <span>Sort</span>
      <select
          v-model="sortSelected"
          name="product_sort"
          id="product_sort"
      >
        <option v-if="showSelectedOption" value="empty">
          choose value
        </option>
        <option
            v-for="(item, index) in sortOptions"
            :key="index"
            :value="item"
        >{{ item }}</option>
      </select>
    </div>
    <ul class="products-list">
      <li
          v-for="(product, index) in sortedProducts"
          :key="index"
          class="products-list__item"
      >
        <h5>{{ product.title }}</h5>
        <span>price: {{ product.price }}</span>
        <span>count: {{ product.count }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'task-one',
  data() {
    return {
      products: [],
      sortSelected: 'empty',
      sortOptions: [
          'price',
          'count'
      ],
    };
  },
  created() {
    this.getProducts();
  },
  computed: {
    sortedProducts() {
      const sortProducts = this.products ? [...this.products] : [];
      if (this.sortSelected === 'price') {
        return sortProducts.sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (this.sortSelected === 'count') {
        return sortProducts.sort((a, b) => {
          return a.count - b.count;
        });
      }
      return this.products;
    },
    showSelectedOption() {
      return this.sortSelected === 'empty';
    }
  },
  methods: {
    getProducts() {
      fetch('http://localhost:3099/products')
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.products = data;
      })
      .catch(error => {
        console.error(error);
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .products {
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

    &-sort {
      margin-bottom: 20px;

      span {
        font-size: 18px;
        font-weight: 700;
        margin-right: 20px;
      }

      select {
        width: 150px;
        border: 2px solid #000;
        border-radius: 2px;
        padding: 5px;

        &:focus-visible {
          border: 2px solid #000;
          border-radius: 2px;
          outline-color: #000;
        }

      }
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
  }
</style>
