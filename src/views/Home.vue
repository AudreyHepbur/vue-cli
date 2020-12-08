<template>
  <div>
    <!-- S 宣讲行程时间轴 -->
    <div class="timeline">
      <div class="timeline_tit">
        宣讲行程
        <span>Campus Talk Schedule</span>
      </div>
      <div class="timeline_icon">
        <svg viewBox="0 0 102 102">
          <circle cx="51" cy="51" r="50" transform="rotate(90 51 51)"></circle>
        </svg>
      </div>
      <ul class="timeline_list">
        <li class="timeline_item timeline_item_sp">
          <span class="timeline_item_cnt flag"><i class="flag_sin"></i></span>
          <span class="timeline_item_cnt country"></span>
          <b></b>
        </li>
        <li class="timeline_item">
          <span class="timeline_item_cnt time">09 / 20</span>
          <span class="timeline_item_cnt city">INSEAD</span>
          <b></b>
        </li>
        <li class="timeline_item">
          <span class="timeline_item_cnt time">09 / 21</span>
          <span class="timeline_item_cnt city">NTU</span>
          <b></b>
        </li>
        <li class="timeline_item timeline_item_sp">
          <span class="timeline_item_cnt flag"><i class="flag_us"></i></span>
          <span class="timeline_item_cnt country">U.S</span>
          <b></b>
        </li>
        <li class="timeline_item">
          <span class="timeline_item_cnt time">09 / 26</span>
          <span class="timeline_item_cnt city">UCLA</span>
          <b></b>
        </li>
        <li class="timeline_item">
          <span class="timeline_item_cnt time">09 / 28</span>
          <span class="timeline_item_cnt city">UC Berkely</span>
          <b></b>
        </li>
        <li class="timeline_item">
          <span class="timeline_item_cnt time">10 / 05</span>
          <span class="timeline_item_cnt city">Wharton</span>
          <b></b>
        </li>
        <li class="timeline_item timeline_item_sp">
          <span class="timeline_item_cnt flag"><i class="flag_uk"></i></span>
          <span class="timeline_item_cnt country">U.K</span>
          <b></b>
        </li>
        <li class="timeline_item">
          <span class="timeline_item_cnt time">10 / 29</span>
          <span class="timeline_item_cnt city">LBS</span>
          <b></b>
        </li>
        <li class="timeline_line"></li>
      </ul>
    </div>
    <!-- E 宣讲行程时间轴 -->
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    console.log("this.store :>> ", this.$store);
  },
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {},
  filter: {},
  computed: {},
  watch: {}
};
</script>

<style lang="scss" scoped>
svg {
  // 设置描边
  stroke: #0084ff;
  stroke-width: 2px;
  fill: none;
}
</style>
