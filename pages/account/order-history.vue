<template>
  <section class="cg-order-history">
    <ui-row>
      <ui-col :md="8">
        <sidebar-main />
      </ui-col>
      <ui-col :md="16">
        <ui-panel :title="$t('orders.order-history')">
          <ui-form-section :title="$t('orders.your-orders')">
            <orders-pagination :orders="orders" />
          </ui-form-section>
        </ui-panel>
      </ui-col>
    </ui-row>
  </section>
</template>

<script>
import SidebarMain from '~/components/sidebar/main';
import OrdersPagination from '~/components/orders/pagination';

import {
  UiCol, UiRow, UiPanel, UiFormSection,
} from '~/components/ui';

export default {
  components: {
    SidebarMain,
    UiCol,
    UiRow,
    UiPanel,
    UiFormSection,
    OrdersPagination,
  },

  data() {
    return {
      orders: [],
    };
  },

  async asyncData({ app }) {
    const {
      user: { orders },
    } = await app.$q('currentOrders');
    return { orders };
  },
};
</script>
