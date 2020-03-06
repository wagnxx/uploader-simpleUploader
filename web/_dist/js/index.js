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
  uploader.on("filesSubmitted",async function(files, fileList, event) {
    console.log(files, fileList, event);
    // this.files = this.uploader.files;
    // this.fileList = this.uploader.fileList;
    let msg=await getLogmsg();
    if(msg=='ok'){
debugger
      uploader.upload();
    }

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
  uploader.assignDrop(document.getElementById('dragbox'), false, false, {
    // accept: "image/*"s
  });









  function getLogmsg(){
    return new Promise(resolve=>{
      var logmodal =document.getElementById('logmodal');
      var sure =logmodal.querySelector('button');
      var input =logmodal.querySelector('input');

      logmodal.style.display='block';
      sure.onclick =function(){
        resolve(
          input.value
        );
        logmodal.style.display='none';

      }

    });
  }