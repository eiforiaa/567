<template>
  <div class="right-board">
    <div v-if="!isAttractionEmpty">
      <div>Id: {{ attraction.id }}</div>
      <div>Название: {{ attraction.name }}</div>
      <div>Округ: {{ attraction.admArea }}</div>
      <div>Район: {{ attraction.district }}</div>
      <div>Адрес: {{ attraction.location }}</div>
    </div>
    <div v-else class="right-board__no-selected">
      Куда вы хотите пойти?
    </div>
  </div>
</template>

<script>
export default {
  name: "RightBoard",
  props: {
    attraction: {
      type: Object,
      required: true
    }
  },
  computed: {
    isAttractionEmpty() {
      return Object.keys(this.attraction).length === 0;
    }
  },
  methods: {
    yesNo(value) {
      if (value) {
        return "+";
      } else {
        return "-";
      }
    }
  }
};
</script>

<style scoped>
.right-board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--dark_100);
}

.right-board .right-board__no-selected {
  font-size: 26px;
  text-align: center;
}
</style>
