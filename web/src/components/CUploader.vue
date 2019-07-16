<template>
  <div class="CUploader">
    <button ref="buttons">上传</button>
  </div>
</template>
<script>
// import Uploader from "simple-uploader.js";
import Uploader from "simple-uploader.js";
export default {
  components: {
    Uploader
  },
  data() {
    return {};
  },
  mounted() {
    var uploader = new Uploader({
      target: "//localhost:3000/upload",
      testChunks: false,
      withCredentials: true
      // query: { upload_token: "my_token" }
    });

    uploader.on("fileAdded", function(file, event) {
      console.log(file, event);
    });
    uploader.on("fileSuccess", function(rootFile, file, message) {
      console.log(rootFile, file, message);
    });
    uploader.on("filesSubmitted", function(files, fileList, event) {
      console.log(files, fileList, event);
      // this.files = this.uploader.files;
      // this.fileList = this.uploader.fileList;
        uploader.upload();
     
      // uploader.uploadStart()
    });
    uploader.on("uploadStart", function() {
      debugger;
    });
    uploader.on("fileComplete", function(rootFile) {
      console.log(rootFile);
    });
    uploader.on("fileError", function(rootFile, file, message) {
      debugger;
      console.log(rootFile, file, message);
    });

    uploader.assignBrowse(this.$refs.buttons, false, false, {
      // accept: "image/*"s
    });
  }
};
</script>

<style>
.CUploader {
  height: 200px;
  width: 400px;
  border: 1px solid #ddd;
}
</style>

