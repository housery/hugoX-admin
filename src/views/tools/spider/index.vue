<template>
  <div class="app-container">
    <!-- 工具栏 -->
    <div class="head-container">
      <div>
        <el-select v-model="query.name" clearable placeholder="请选择" class="filter-item" @keyup.enter.native="crud.toQuery">
          <el-option
            v-for="item in sources"
            :key="item.id"
            :label="item.source"
            :value="item.source"
          />
        </el-select>
        <rrOperation />
      </div>
    </div>
    <!-- 表格 -->
    <el-table ref="table" v-loading="crud.loading" :data="crud.data" style="width: 100%;">
      <el-table-column :show-overflow-tooltip="true" prop="keyword" label="关键词">
        <template slot-scope="scope">
          <el-link :href="scope.row.url" type="primary" target="_blank">{{ scope.row.keyword }}</el-link>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" prop="peopleCount" label="人数" />
      <el-table-column :show-overflow-tooltip="true" prop="source" label="来源" />
      <el-table-column :show-overflow-tooltip="true" prop="orders" label="排名" />
      <el-table-column prop="createTime" label="创建日期">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.createTime) }}</span>
        </template>
      </el-table-column>
    </el-table>
    <!--分页组件-->
    <pagination />
  </div>
</template>

<script>
import crudSpider from '@/api/tools/spider'
import CRUD, { presenter, header } from '@crud/crud'
import rrOperation from '@crud/RR.operation'
import pagination from '@crud/Pagination'

export default {
  name: 'Spider',
  components: { rrOperation, pagination },
  mixins: [presenter(), header()],
  cruds() {
    return CRUD({
      url: 'api/hot/findPage'
    })
  },
  data() {
    return {
      sources: [],
      selectedVal: ''
    }
  },
  created() {
    this.bindSource()
    this.crud.optShow = { add: false, edit: false, del: false, download: false }
  },
  methods: {
    bindSource() {
      crudSpider.getSource().then(res => {
        this.sources = res
        console.log(this.sources)
      }).catch(res => {
        console.log('请求失败')
      })
    }
  }
}
</script>

<style scoped>

</style>
