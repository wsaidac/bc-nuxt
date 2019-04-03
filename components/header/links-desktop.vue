<template>
  <div class="header-links-desktop legacy-links-desktop">
    <div class="container">
      <ul class="header-links-desktop__nav">
        <li
          v-for="(category, i) in items"
          :key="category.title"
          :class="classes(category.title, i)"
        >
          <div @click="setActive(category.title)">
            <img
              v-if="category.image"
              :alt="category.title"
              :src="category.image.regular"
              :srcset="`${category.image.regular}, ${category.image.retina} 2x`"
            >
            <span v-text="category.title" />
          </div>
          <ul class="header-links-desktop__sub">
            <li
              v-for="subcategory in category.categories"
              :key="subcategory.id"
              class="header-links-desktop__sub-item"
            >
              <nuxt-link
                :to="$contextPath(subcategory.url)"
                :title="subcategory.title"
              >
                {{ subcategory.title }}
              </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
    classes(title, index) {
      const amount = this.items.find(e => e.title === title).categories.length;
      if (index > 2 && amount > 10) {
        return ['header-links-desktop__main-item', 'header-links-desktop__main-item--shifted'];
      }
      return ['header-links-desktop__main-item'];
    },
  },
};
</script>

<style lang="scss">
.header-links-desktop {
  background: #dce6f5;
  border-top: 1px solid #0e00d6;
  height: 50px;

  @include flex();

  &__nav {
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0;

    @include flex();
  }

  &__main-item {
    border-right: 1px solid $gray-300;
    cursor: pointer;

    &:first-child {
      border-left: 1px solid $gray-300;
    }

    & > div {
      font-size: 1.125em;
      height: 100%;
      padding: 0 15px;

      @include flex(center, center);

      img {
        margin-right: 10px;
      }

      &:hover {
        background: $gray-200;
      }
    }

    &:hover {
      &::after {
        border-top: 3px solid #ee4136;
        content: "";
        z-index: 600;

        @include position(absolute, 100% 0 null 0);
      }

      .header-links-desktop__sub {
        display: grid;
      }
    }
  }

  &__sub {
    background: $white;
    box-shadow: 0 3px 6px -3px #aaa;
    display: none;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-column-gap: 40px;
    grid-template-rows: repeat(10, auto);
    list-style: none;
    margin: 0;
    padding: 0 25px 10px 25px;
    z-index: $z-index-links;

    @include position(absolute, calc(100%) null null 0);
  }

  &__main-item--shifted {
    .header-links-desktop__sub {
      @include position(absolute, calc(100%) null null -200px);
    }
  }

  &__sub-item {
    border-top: 1px solid $gray-300;
    font-size: 12px;

    &:nth-child(10n + 1) {
      border-top: 0;
    }

    a {
      color: $black;
      height: 100%;
      padding: 8px 0;
      text-decoration: none;
      width: 140px;

      @include flex(null, center);

      &:hover {
        color: $primary-500;
      }
    }
  }

  @include media-breakpoint-only("sm") {
    .header-links-desktop__main-item {
      img {
        display: none;
      }
    }
  }

  @include media-breakpoint-only("xs") {
    display: none;
  }
}

.legacy-links-desktop {
  .header-links-desktop {
    &__main-item {
      position: relative;

      &:first-child {
        img {
          @include size(16px, 24px);
          @include position(relative, -2px null null null);
        }
      }

      &:nth-child(2) img {
        @include size(22px);
        @include position(relative, -1px null null null);
      }

      &:nth-child(3) img {
        @include size(36px, 20px);
        @include position(relative, -1px null null null);
      }

      &:nth-child(4) img {
        @include size(28px, 20px);
        @include position(relative, -1px null null null);
      }
    }
  }
}
</style>
