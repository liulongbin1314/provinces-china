# ProvincesOfChina

> city-data-element.js 是针对 element-ui 中，级联选择器设计的省市区数据。该数据来自国家统计局。

> 更新时间 2020-09-23

## element-ui 中 Cascader 组件的使用示例

### 1. template 结构如下

```xml
<template>
  <div>
    <!-- options 是数据源 -->
    <!-- props 是配置对象 -->
    <el-cascader v-model="cascaderValue" :options="cityData" :props="cascaderProps" @change="onCascaderChange"></el-cascader>
  </div>
</template>
```

### 2. script 行为如下：

```js
// 导入省市区县的数据
import cityData from './city-data-element.js'

export default {
  data() {
    return {
      // 挂载省市区县的数据
      cityData,
      // 用来保存级联选择器选中的值
      cascaderValue: [],
      // 级联选择器的配置对象
      cascaderProps: {
        expandTrigger: 'click',
        label: 'label',
        value: 'value',
        children: 'children'
      }
    }
  },
  methods: {
    // 监听级联选择器选中项改变的事件
    onCascaderChange() {
      console.log(this.cascaderValue)
    }
  }
}
```

## 相关链接

[统计用区划和城乡划分代码](http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/)

[中国省市区数据，适用于 Vant Area 组件](https://github.com/youzan/vant/blob/dev/packages/vant-area-data/src/index.ts)
