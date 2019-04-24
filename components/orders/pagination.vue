<template>
  <div class="cg-orders">
    <paginate
      :list="orders"
      :per="10"
      name="orders"
    >
      <order-item
        v-for="order in paginated('orders')"
        :key="order.id"
        :order="order"
      />
    </paginate>
    <paginate-links
      v-if="orders.length"
      :hide-single-page="true"
      :show-step-links="true"
      for="orders"
    />
  </div>
</template>

<script>
import OrderItem from '~/components/orders/order-item';

export default {
  name: 'OrdersPagination',

  components: {
    OrderItem,
  },

  props: {
    orders: {
      type: Array,
      default: null,
    },
  },

  data() {
    return {
      paginate: ['orders'],
    };
  },
};
</script>

<style lang="scss">
.cg-orders ul {
  margin: 0;
  padding: 0;
}

.paginate-links.orders {
  list-style: none;
  margin: 20px 0;
  user-select: none;

  a {
    cursor: pointer;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  li.active a {
    font-weight: bold;
    text-decoration: underline;
  }

  li.next::before {
    color: #ddd;
    content: " | ";
    margin-right: 13px;
  }

  li.disabled a {
    color: #ccc;
    cursor: no-drop;
  }
}
</style>
