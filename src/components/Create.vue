<template>
  <div class="container">
    <div class="mb-3">
      <label for="" class="form-label">글쓴이</label>
      <input v-model="writer"
        type="text"
        class="form-control"
      
      
      />
    </div>
    <div class="mb-3">
      <label for="" class="form-label">제목</label>
      <input v-model="title"
        type="text"
        class="form-control"
   
      />
    </div>
    <div class="mb-3">
      <label for="" class="form-label">내용</label>
      <textarea v-model="content" type="textarea" class="form-control" />
    </div>
    <!-- <button @click="write" type="button" class="btn btn-primary">글쓰기</button> -->
     <button @click="index !== undefined ? update() : write()">{{index !== undefined ? '수정' : '작성'}}</button>
  </div>
</template>

<script>
import data from "@/data";
export default {
  name: "Create",
  data() {
   const index = this.$route.params.contentId;
    return {
      data: data,
      writer: index !== undefined ? data[index].writer : "",
      title: index !== undefined ? data[index].title : "",
      content: index !== undefined ? data[index].content : ""
    };
  },
  methods: {
    write(){
      this.data.push({
        writer: this.writer,
        title: this.title,
        content: this.content
      })
        this.$router.push({
        path: "/",
      });
    },
    update(){
       data[this.index].writer = this.writer
      data[this.index].title = this.title
      data[this.index].content = this.content
      this.$router.push({
        path: '/'
      })
    }
  },
};
</script>

<style></style>
