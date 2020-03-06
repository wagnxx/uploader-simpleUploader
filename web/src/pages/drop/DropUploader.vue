<template>
  <div>
     <h3 style="padding:0;margin:0;">drop page</h3>
     
    <hr />
    <div class="upload-wrap">
      <div class="upload-detail">
        <h3 style="padding:0;margin:0;border-bottom:1px solid #ddd;">上传清单</h3>
        <ul style="min-height:100px">
          <li
            v-for="(value, key, index) in finallyFilelist"
            :key="index"
          >{{key}}: {{value[0][0].name}}</li>
        </ul>
        <hr />
        <button @click="beginUploadHandle">开始上传</button>
        <button @click="checkComplete">检测是否上传完毕</button>
      </div>
      <DropAction />
    </div>
  </div>
</template>

<script>
import Uploader from "simple-uploader.js";
import DropAction from "./DropAction";
import EventBus from "../../eventBus";
export default {
  components: {
    Uploader,
    DropAction
  },
  data() {
    return {
      finallyFilelist: {
        // k1:[[{name:'举例文件'}],ev]
      }
    };
  },
  methods: {
    containerChangeHandle(options) {
      if (
        !options ||
        !options.tar ||
        !options.dropFiles ||
        options.dropFiles.length < 1
      )
        return;
      let key = options.tar;
      let files = options.dropFiles;
      let ev = options.ev;

      let rawOption = [files, ev];

      this.$set(this.finallyFilelist, key, rawOption);
    },
    beginUploadHandle(ev) {
      if (this.filesReadyUpload.length > 0) {
        this.filesReadyUpload.forEach(fk => {
          let files = fk[0];
          let ev = fk[1];
          window.uploader.addFiles(files, ev);
        });
      }else{
        alert('sorry,没有待上传文件');
      }
    },
    checkComplete() {
      let isComplete = window.uploader.isComplete();
      let _this = this;
      if (isComplete) {
        let cl=window.confirm("上传已完毕,要清空上传文件清单吗?")
        if (cl) {
          let timer = null;
 
          timer = window.setInterval(() => {
            let keys = Object.keys(_this.finallyFilelist);
            if (keys.length > 0) {
              let temp = { ..._this.finallyFilelist };
              delete temp[keys[0]];
              console.log(1)
              _this.finallyFilelist = temp;
            }else{

              timer = null;
            }


          }, 1000);


        } else {
        alert("还没上传完");
      }
    }
    }
  },
  computed: {
    filesReadyUpload() {
      let values = [...Object.values(this.finallyFilelist)];
      return values;
    }
  },
  mounted() {
    window.uploader = new Uploader({
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
      uploader.upload();
    });
    uploader.on("uploadStart", function() {
      debugger;
    });
    uploader.on("fileComplete", function(rootFile) {
      console.log(rootFile);
    });
    uploader.on("complete", function(o) {
      console.log("上传完成");
    });
    uploader.on("fileError", function(rootFile, file, message) {
      debugger;
      console.log(rootFile, file, message);
    });

    EventBus.$on("containerChangeHandle", this.containerChangeHandle);
    window.vm = this;
  }
}
</script>

<style>
.upload-wrap {
  display: flex;
}
.upload-detail {
  width: 240px;
  border-right: 1px solid #ddd;
  min-height: 400px;
}
</style>