<template>
  <Layout>
    <Sidebar
      slot="sidebar"
      :attractions="attractionsList"
      @change-attraction="handleChangeAttraction"
    />
    <RightBoard slot="rightBoard" :attraction="activeAttraction" />
  </Layout>
</template>

<script>
import Layout from "./components/Layout.vue";
import Sidebar from "./components/Sidebar.vue";
import RightBoard from "./components/RightBoard.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Layout,
    Sidebar,
    RightBoard
  },
  data() {
    return {
      activeAttractionId: null,
      attractionsList: null
    };
  },
  mounted() {
    axios
      .get("http://localhost:2017/public/attractions")
      .then(response => (this.attractionsList = response.data.attractions));
  },
  computed: {
    activeAttraction() {
      const fallback = {};
      if (!this.activeAttractionId) {
        return fallback;
      }

      return (
        this.attractionsList.find(({ id }) => id === this.activeAttractionId) ||
        fallback
      );
    }
  },
  methods: {
    handleChangeAttraction({ id }) {
      this.activeAttractionId = id;
    }
  }
};
</script>

<style>
body {
  margin: 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #d1e8e2;
  background: var(--ultramarine_80);
  font-family: "New Tegomin", serif;
}

:root {
  --dark_100: #116466;
  --dark_80: #2c3531;
  --gray: #d1e8e2;
  --ultramarine_100: #d1e8e2;
  --ultramarine_80: #d9b08c;
}

html {
  height: 100%;
  /* display: flex; */
}
</style>
