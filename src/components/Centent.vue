<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1" @click.native.prevent="handleSubmit2">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">选项三</mt-tab-item>
    </mt-navbar>
    <div>
      <mt-cell class="page-part" title="当前选中">{{ selected }}</mt-cell>
    </div>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n"/>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import { getUserList } from '../api/api'
export default {
  name: 'Centent',
  data () {
    return {
      selected: '1'
    }
  },
  methods: {
    handleSubmit2 (ev) {
      getUserList().then(data => {
        console.log(data)
      })
    }
  }
}
</script>
