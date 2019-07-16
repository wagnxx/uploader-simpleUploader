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
  uploader.on("complete", function() {
    debugger;

    console.log(0);
  });
  uploader.on("fileError", function(rootFile, file, message) {
    debugger;
    console.log(rootFile, file, message);
  });

  uploader.assignBrowse(document.getElementById('button'), false, false, {
    // accept: "image/*"s
  });