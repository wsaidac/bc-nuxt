<template>
  <div
    v-if="product"
    class="cg-order-item"
  >
    <div class="cg-order-item__header">
      <figure>
        <img
          :src="product.product_image"
          class="cg-order-item__image"
        >
      </figure>
      <div class="cg-order-item__product">
        <div
          class="cg-order-item__name"
          v-text="product.display_name"
        />
        <div v-if="code">
          <div
            v-if="code.code && code.code != '0'"
            class="cg-order-item__top-up-code"
          >
            {{ $t('orders.your-top-up-code') }}: <span>{{ code.code }}</span>
          </div>
          <div
            v-if="code.serial_number"
            class="cg-order-item__top-up-code"
          >
            {{ $t('orders.serial-number') }}: <span>{{ code.serial_number }}</span>
          </div>
          <div
            v-if="code.image_url"
            class="cg-order-item__top-up-code"
          >
            <img :src="code.image_url">
          </div>
          <div
            v-if="code.redeem_url"
            class="cg-order-item__top-up-code"
          >
            {{ $t('orders.redeem-url') }}:
            <a
              :href="code.redeem_url"
              target="_blank"
            >
              {{ code.redeem_url }}
            </a>
          </div>
        </div>
      </div>
      <div class="cg-order-item__purchase-status">
        <div>{{ $t('orders.order-id') }}: {{ order.id }}</div>
        <div>{{ $t('orders.purchased-on') }}: {{ order.created_at | moment("DD/MM/YYYY, HH:mm") }}</div>
        <div>
          {{ $t('orders.status') }}:
          <span
            v-t="status"
            :class="['cg-order-item__status', `cg-order-item__status--${order.status}`]"
          />
          <span v-if="status == 'in progress'">
            <ui-popover
              placement="top-start"
              trigger="hover"
            >
              <p v-html="$t('orders.description-inprogress')" />
              <ui-icon
                slot="reference"
                class="input-help"
                icon="question-circle-o"
              />
            </ui-popover>
          </span>
        </div>
        <a
          v-t="showDetails ? 'orders.close-details' : 'orders.more-details'"
          @click="toggleDetails"
        />
      </div>
    </div>

    <ui-transition-expand>
      <div v-if="showDetails">
        <div class="cg-order-item__terms">
          <p>{{ $t('orders.general-terms-and-conditions') }}</p>
          <ui-transition-expand>
            <div v-if="showTerms">
              <p v-html="product.terms_and_conditions" />
              <a
                v-t="'orders.close'"
                @click="showTerms = !showTerms"
              />
            </div>
          </ui-transition-expand>
          <a
            v-if="!showTerms"
            v-t="'orders.show'"
            @click="toggleTerms"
          />
        </div>
        <div class="cg-order-item__payment">
          <div class="cg-order-item__info">
            <p v-if="code">
              {{ $t('orders.ordernumber') }}: {{ code.reference }}
            </p>
            <p v-if="code">
              {{ $t('orders.productstatus') }}: <em v-t="code.status" />
            </p>
            <p>{{ $t('orders.payment-method') }}: {{ order.pay_method }}</p>
          </div>
          <div class="cg-order-item__costs">
            <p>{{ $t('orders.price') }}: <span>{{ order.price }}</span></p>
            <p>{{ $t('orders.service-costs') }}: <span>{{ order.service_fee }} </span></p>
            <p>{{ $t('orders.total') }}: <span>{{ order.total_price }} </span></p>
          </div>
        </div>
      </div>
    </ui-transition-expand>
  </div>
</template>

<script>
import UiTransitionExpand from '~/components/ui/transition-expand';
import { UiIcon, UiPopover } from '~/components/ui.js';

export default {
  components: {
    UiTransitionExpand,
    UiIcon,
    UiPopover,
  },

  props: {
    order: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {
      showDetails: false,
      showTerms: false,
    };
  },

  computed: {
    product() {
      return this.order.products[0];
    },
    code() {
      return this.product.codes[0];
    },
    status() {
      switch (this.order.status) {
        case 'orders.paid':
        case 'orders.distribution':
        case 'orders.investigation':
        case 'orders.investigated':
        case 'error':
          return 'in progress';
        case 'chargedback':
          return 'orders.refunded';
        default:
          return this.order.status;
      }
    },
  },

  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    toggleTerms() {
      this.showTerms = !this.showTerms;
    },
  },
};
</script>

<style lang="scss">
.bb-seosubheader {
  font-size: 1em;
}

.el-popover a {
  color: #1200ff;
}

.cg-order-item {
  background: $gray-100; // checky
  border: $gray-200; // checky
  color: $gray-700; // checky
  line-height: 1.5;
  margin-top: 10px;

  &__header {
    padding: 15px;
    padding-top: 0;

    @include flex(space-between);
  }

  figure {
    border: 1px solid $gray-200; // checky
    margin: 15px 15px 0 0;

    @include size(100px);
  }

  &__image {
    background: #fff;
    object-fit: contain;

    @include size(100%, 100%);
  }

  &__product {
    flex-flow: column nowrap;
    flex-shrink: 1;
    margin-top: 15px;
    max-width: 200px;
    padding-bottom: 10px;

    @include flex(space-between);
  }

  &__name {
    color: $gray-900; // checky
    font-size: 16px;
    font-weight: $font-weight-bold;
  }

  &__top-up-code {
    font-size: 16px;

    span {
      font-weight: $font-weight-bold;
    }
  }

  &__purchase-status {
    flex-flow: column nowrap;
    flex-grow: 1;
    margin-top: 15px;
    padding-bottom: 10px;
    text-align: right;

    @include flex(null, flex-end);

    a {
      margin-top: auto;
    }
  }

  &__status {
    background: $danger-500; // checky
    color: $white;
    font-variant: small-caps;
    padding: 0 7px;

    &--paid,
    &--investigation,
    &--investigated,
    &--distribution,
    &--error {
      background: orange;
    }

    &--unpaid {
      background: $warning-500; // checky
    }

    &--chargedback,
    &--refunded {
      background: $info-500; // checky
    }

    &--shipped {
      background: $success-500; // checky
    }

    &--paid {
      background: $white;
      border: 1px solid $success-500; // checky
      color: $success-500; // checky
    }
  }

  &__terms {
    margin: 15px 0;
    padding: 0 15px;

    p {
      margin: 0;
    }
  }

  &__payment {
    background: $white;
    padding: 15px;
    padding-top: 0;

    @include flex(space-between);
  }

  &__info {
    margin-top: 15px;

    p {
      margin: 0;
    }
  }

  &__costs {
    flex-flow: column nowrap;
    margin-top: 15px;
    min-width: 180px;

    @include flex(null, flex-end);

    p {
      margin: 0;

      span {
        display: inline-block;
        text-align: right;
        width: 70px;
      }

      &:nth-child(2) {
        border-bottom: 2px solid $gray-200; // checky
        margin-bottom: 5px;
        padding-bottom: 5px;
      }
    }
  }
}

@include media-breakpoint-down("md") {
  .cg-order-history {
    .cg-profile-blocks {
      padding-left: 0;
      padding-right: 0;
    }
  }
}

@include media-breakpoint-only("sm") {
  .cg-order-history {
    .cg-profile-blocks {
      padding-left: 0;
      padding-right: 0;

      .cg-order-item {
        &__header {
          flex-flow: row wrap;
        }

        &__product {
          text-align: right;
        }

        &__purchase-status {
          flex-flow: row wrap;
          padding-bottom: 0;
          width: auto;

          @include flex(space-between);

          a {
            margin-top: 10px;
            text-align: center;
            width: 100%;
          }
        }

        &__payment {
          flex-flow: column nowrap;
        }

        &__costs {
          width: 200px;

          p {
            width: 100%;

            @include flex(space-between);
          }
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .cg-order-history {
    .ui-panel {
      padding-left: 0;
      padding-right: 0;

      h2 {
        margin: 0;
      }

      h5 {
        margin-left: 20px;
      }
    }

    .cg-order-item {
      border-left: 0;
      border-radius: 0;
      border-right: 0;
    }
  }
}

@media (max-width: 560px) {
  .cg-order-item {
    &__header {
      flex-flow: row wrap;
    }

    &__product {
      text-align: right;
    }

    &__purchase-status {
      flex-flow: row wrap;
      padding-bottom: 0;
      width: auto;

      @include flex(space-between);

      a {
        margin-top: 10px;
        text-align: center;
        width: 100%;
      }
    }
  }
}

@media (max-width: 520px) {
  .cg-order-item {
    &__payment {
      flex-flow: column nowrap;
    }

    &__costs {
      width: 200px;

      p {
        width: 100%;

        @include flex(space-between);
      }
    }
  }
}

@media (max-width: 400px) {
  .cg-order-item {
    &__header {
      flex-flow: column nowrap;
    }

    &__product {
      text-align: left;
    }

    &__purchase-status {
      align-items: flex-start;
      flex-flow: column nowrap;
      width: 100%;

      a {
        width: auto;
      }
    }
  }
}
</style>
