<template>
  <div class="drop-action">
    <h3 style="padding:0;margin:0;border-bottom:1px solid #ddd;">drop dir</h3>
    <div class="dirList">
      <li v-for="( item,idx) in entries" :key="idx" v-drDrop="item.value"></li>
    </div>
  </div>
</template>

<script>
import drDrop from "./Dropdirectives";
export default {
  data() {
    return {
      entries: [{ value: "entry1" }, { value: "entry2" }, { value: "entry3" }]
    };
  },
  directives: {
    drDrop
  }
};
</script>

<style>
.drop-action {
  padding: 0 10px;
}
.dirList li {
  width: 400px;
  height: 40px;
  border: 1px solid #ddd;
  list-style: none;
  padding: 10px;
  margin-top: 20px;
}
</style>