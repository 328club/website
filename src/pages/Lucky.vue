<template>
  <section class="content" v-loading.fullscreen.lock="loading">
    <el-input class="input" placeholder="请输入幸运数字" v-model="inputVal" />
    <div>
      <el-button class="bth" @click="onSingleBet">单注</el-button>
      <el-button class="bth" @click="onBraveDrag">胆拖</el-button>
      <el-button class="bth" @click="onSevenStars">七星彩</el-button>
    </div>
    <el-dialog title="祝你幸运" v-model="visible" :width="width < 600 ? '80%' : undefined"
      ><div class="result-dialog">
        <div class="result-text">{{ result }}</div>
        <el-button type="primary" class="result-copy" @click="onCopy">
          复制
        </el-button>
      </div>
    </el-dialog>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { ElButton, ElInput, ElMessage } from "element-plus";

import LuckyApi from "../api";

export default defineComponent({
  setup() {

    return {
      inputVal: ref(""),
    };
  },
  data() {
    return {
      visible: false,
      loading: false,
      result: "",
      width: window.innerWidth
    };
  },
  components: {
    ElButton,
    ElInput,
  },
  methods: {
    onSingleBet: async function () {
      if (!this.inputVal) {
        ElMessage({
          message: "请输入幸运号码",
        });
        return;
      }
      const seed = parseInt(this.inputVal);
      if (isNaN(seed)) {
        return;
      }
      this.loading = true;
      const { data } = await LuckyApi.getSingleBet({ seed });
      this.result = data;
      this.loading = false;
      this.visible = true;
    },
    onBraveDrag: async function () {
      if (!this.inputVal) {
        ElMessage({
          message: "请输入幸运号码",
        });
        return;
      }
      const seed = parseInt(this.inputVal);
      if (isNaN(seed)) {
        return;
      }
      this.loading = true;
      this.visible = true;

      const { data } = await LuckyApi.getBraveDrag({ seed });
      this.result = data;
      this.loading = false;
    },

    prefixInteger: function (num=6, m=2) {
      return (Array(m).join() + num).slice(-m);
    },
    onSevenStars: function () {
      if (!this.inputVal) {
        ElMessage({
          message: "请输入幸运号码",
        });
        return;
      }
      const seed = parseInt(this.inputVal);
      console.log(seed);
      this.loading = true;
      const num_1 = this.prefixInteger(Math.floor(Math.random()*999999), 6);
      const num_2 = this.prefixInteger(Math.floor(Math.random()*14), 2);
      this.result = `[${num_1.split("").toString()}]+[${num_2.toString()}]`;
      this.loading = false;
      this.visible = true;
    },
    onCopy: function () {
      const tag = document.createElement("input");
      tag.value = `LUCKY: ${this.result}`;
      document.getElementsByTagName("body")[0].appendChild(tag);
      tag.select();
      document.execCommand("copy");
      tag.remove();
      ElMessage.success({
        message: "复制成功",
        type: "success",
      });
    },
  },
});
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url(../assets/gansouningjing.jpeg);
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: 50% 50%;
  background-color: #000000;

  .input {
    max-width: 360px;
    margin: 20px 0;
  }
  .result {
    width: 320px;
    &-dialog {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 200px;
    }
    &-text {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      flex: 1 1 auto;
    }
    &-copy {
      margin-top: 10px;
    }
  }
  .bth {
    width: 100px
  }


}
</style>
