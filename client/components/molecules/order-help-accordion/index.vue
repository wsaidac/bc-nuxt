<template>
  <ul class="relative w-full">
    <li
      v-for="question in questions"
      :key="question.answer"
      class="mb-4"
    >
      <item
        :question="question.question"
        :answer="question.answer"
      />
    </li>
  </ul>
</template>


<script>
import Item from './item';

export default {
  components: {
    Item,
  },
  props: {
    questions: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
