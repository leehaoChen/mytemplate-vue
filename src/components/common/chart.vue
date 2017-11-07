<template>
  <div class="chart" ref="chart">
  </div>
</template>
<script>
export default {
  name: 'basicChart',
  props: ['baseOpt', 'chartHandle'],
  data () {
    return {
      chart: null
    }
  },
  created () {
  },
  mounted () {
    this.chart = echarts.init(this.$refs.chart, 'dark')
    this.chart.showLoading({
      text: 'loading',
      color: '#c23531',
      textColor: '#000',
      maskColor: 'rgba(255, 255, 255, 0.1)',
      zlevel: 0
    })
    setTimeout(() => {
      if (this.baseOpt) {
        this.chart.setOption(this.baseOpt)
        this.chart.hideLoading()
      }
      if (this.chartHandle) { this.chartHandle(this.chart) }
      window.addEventListener('resize', this.resize)
    }, 0)
  },
  destroyed () {
    this.chart.dispose()
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    resize () {
      if (this._resizeTimer) { clearTimeout(this._resizeTimer); this._resizeTimer = null }
      this._resizeTimer = setTimeout(() => {
        this.chart.resize()
      }, 300)
    }
  },
  watch: {
    baseOpt: {
      handler: function (val, oldval) {
        setTimeout(() => {
          if (val) {
            this.chart.hideLoading()
            this.chart.setOption(val)
          }else {
            this.chart.showLoading()
          }
        })
      },
      deep: true
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chart{
  width: 100%;
  height: 100%;
}
</style>
