<template>
  <div class="sidebar">
    <SidebarRow
      v-for="(attraction, index) in attractions"
      :key="attraction.id"
      :id="attraction.id"
      :row-number="index + 1"
      :title="attraction.name"
      @change-attraction="$emit('change-attraction', $event)"
    />
  </div>
</template>

<script>
import SidebarRow from "./SidebarRow.vue";

export default {
  name: "Sidebar",
  components: {
    SidebarRow
  },
  props: {
    attractions: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.sidebar {
  overflow-y: auto;
  height: 100%;
  background: var(--dark_100);
  border-right: 1px solid var(--ultramarine_80);
}
</style>
