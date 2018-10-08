<template>
  <div class="category-info container">
    <ui-row>
      <ui-col :sm="12">
        <ul class="list-unstyled">
          <li>
            <div
              :class="['category-info__faq-title', { 'category-info__faq-title--expanded' : isExpanded('usps') }]"
              @click="toggle('usps')"
            >
              <span v-text="'Benefits of Rapido.com'" />
              <ui-icon icon="chevron-down" />
            </div>
            <ui-transition-expand>
              <header-usps
                v-if="isExpanded('usps')"
                :usps="usps"
                vertical
              />
            </ui-transition-expand>
          </li>
          <li
            v-for="(question, i) in info.productQuestions"
            :key="i"
            @click="toggle(i)"
          >
            <div :class="['category-info__faq-title', { 'category-info__faq-title--expanded' : isExpanded(i) }]">
              <span v-text="question.title" />
              <ui-icon icon="chevron-down" />
            </div>
            <ui-transition-expand>
              <div
                v-if="isExpanded(i)"
                class="category-info__faq-content"
                v-text="question.content"
              />
            </ui-transition-expand>
          </li>
        </ul>
      </ui-col>
      <ui-col :sm="12">
        <div class="category-info__buy-questions">
          <h1 v-text="info.buyQuestions.title" />
          <ul class=" list-unstyled">
            <li
              v-for="(question, i) in info.buyQuestions.questions"
              :key="i"
            >
              <h2 v-text="question.question" />
              <p v-text="question.answer" />
            </li>
          </ul>
        </div>
        <div class="category-info__redeem">
          <h1 v-text="info.redeem.title" />
          <p v-text="info.redeem.text" />
        </div>
      </ui-col>
    </ui-row>
    <a
      class="category-info__need-help"
      href=""
    >
      <div>
        <span v-text="'Need some help?'" />
        <span>Take a look at the FAQ's</span>
      </div>
      <ui-icon icon="chevron-right" />
    </a>
    <div class="category-info__terms-conditions">
      <h2>Terms & Conditions</h2>
      <p>
        Once redeemed to your U.S. Microsoft account, the full code value will be applied and may be used for
        eligible purchases (exclusions apply) made directly at select Microsoft digital stores. Eligible purchases and
        prices vary by region, device, and over time. Geography limitations, country and balance restrictions, taxes,
        and Internet connection fees may apply. Paid subscriptions required for some content. You must be 13+. Except
        as required by law, codes cannot be redeemed or exchanged for cash and are not reloadable or refundable.
        To create a new Microsoft A1:S131 or to read full terms and conditions (which may change without notice),
        go to microsoft.com/cardterms. Void where prohibited or restricted by law. Cards and codes issued by and
        ©/™/® Microsoft Corp, a Washington Corporation, and/or its affiliates.
      </p>
      <p>
        Microsoft Corporation - One Microsoft Way - Redmond, WA 98052-6399 – USA
      </p>
    </div>
  </div>
</template>

<script>
import {
  UiRow,
  UiCol,
  UiIcon,
  UiTransitionExpand,
} from '~/components/ui';

import HeaderUsps from '~/components/header/usps';

export default {
  components: {
    UiRow,
    UiCol,
    UiIcon,
    UiTransitionExpand,
    HeaderUsps,
  },

  props: {
    info: {
      type: Object,
      required: true,
    },
    usps: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      expanded: ['usps'],
    };
  },

  methods: {
    toggle(i) {
      const index = this.expanded.indexOf(i);
      return index >= 0 ? this.expanded.splice(index, 1) : this.expanded.push(i);
    },

    isExpanded(i) {
      return this.expanded.includes(i);
    },
  },
};
</script>

<style lang="scss">
.category-info {
  font-size: 14px;
  padding: 40px 0;

  .list-unstyled {
    margin: 0;
  }

  &__faq-title {
    border-top: 1px solid $gray-400;
    font-size: 1.2em;
    font-weight: $font-weight-bold;
    padding: 10px 20px;

    @include flex(space-between);

    &--expanded {
      .ui-icon {
        transform: rotate(180deg);
      }
    }

    &:hover {
      background: $gray-100;
    }
  }

  &__faq-content {
    border-top: 1px solid $gray-400;
    font-size: 1em;
    padding: 10px 20px;
  }

  &__buy-questions {
    background: #fdfec3;
    padding: 10px;

    h1 {
      font-size: 1.4em;
    }

    ul {
      li {
        margin-bottom: 12px;

        h2,
        p {
          font-size: 1em;
          margin: 2px 0;
        }
      }
    }
  }

  &__redeem {
    background: $primary-100;
    margin-top: 30px;
    padding: 10px;

    h1 {
      font-size: 1.4em;
      margin: 6px 0;
    }

    p {
      font-size: 1em;
      margin: 2px 0;
    }
  }

  &__need-help {
    background: $gray-200;
    color: $black;
    margin: 20px 0;
    padding: 15px;

    @include flex(space-between, center);

    div {
      flex-grow: 1;

      @include flex(center, center);

      span {
        font-size: 1.4em;
        margin-right: 20px;

        &:first-child {
          font-weight: $font-weight-bold;
        }
      }
    }

    &:hover {
      background: $primary-900;
      color: $white;
      text-decoration: none;
    }
  }

  &__terms-conditions {
    h2 {
      font-size: 1em;
    }

    p {
      color: $gray-400;
      font-size: 0.9em;
    }
  }

  @include media-breakpoint-down('md') {
    font-size: 12px;
  }

  @include media-breakpoint-down('xs') {
    font-size: 13.2px;

    &.container {
      padding: 0;
    }

    &__need-help {
      div {
        flex-flow: column nowrap;

        @include flex(null, flex-start);
      }
    }
  }
}
</style>
