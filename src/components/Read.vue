<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <!-- <th scope="col">#</th> -->
          <th scope="col">글쓴이</th>
          <th scope="col">제목</th>
          <th scope="col">내용</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, index) in data" :key="index" @click="detail(index)">
          <!-- <th scope="row">2</th> -->
          <td>{{ value.writer }}</td>
          <td>{{ value.title }}</td>
          <td>{{ value.content }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="write" type="button" class="btn btn-primary">글쓰기</button>
  </div>
</template>

<script>
import data from "@/data";
export default {
  name: "Read",
  data() {
    return {
      data: data,
    };
  },
  methods: {
    write() {
      this.$router.push({
        path: "create",
      });
    },
    detail(index) {
      this.$router.push({
        name: "detail",
        params: {
          contentId: index
        },
      });
    },
  },
};
</script>

<style></style>
