<template>
  <div class="container">
    <div class="mb-3">
      <div>{{ data.writer }}</div>
      <div>{{ data.title }}</div>
      <div>{{ data.content }}</div>
    </div>

    <button @click="updateData" type="button" class="btn btn-primary">
      Edit
    </button>
    <button @click="deleteData" type="button" class="btn btn-danger">
      Delete
    </button>
  </div>
</template>

<script>
import data from "@/data";
export default {
  name: "Detail",
  data() {
    const index = this.$route.params.contentId;
    return {
      data: data[index],
      index: index,
    };
  },
  methods: {
    deleteData() {
      data.splice(this.index, 1);
      this.$router.push({
        path: "/",
      });
    },
    updateData() {  this.$router.push({
        name: 'create',
        params: {
          contentId: this.index
        }
      })
      
    
    },
  },
};
</script>

<style></style>
