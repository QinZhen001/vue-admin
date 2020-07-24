<!-- 移动端手机iframe -->
<template>
  <div class="mobile-wrapper" style="pointer-events: auto;">
    <div id="aside-demo" class="aside-demo">
      <div style="width: 377px; height: 620px;">
        <div class="demo-preview-wrapper">
          <div class="demo-preview-header">
            <div class="demo-preview-statbar">
              <img
                width="350Px"
                alt="presentation"
                src="https://os.alipayobjects.com/rmsportal/VfVHYcSUxreetec.png"
                style="margin: 0px 2px;"
              />
            </div>
            <div style="height: 40px;">
              <div
                class="url-box"
              >https://mobile.ant.design/kitchen-sink/components/white-space?lang=zh-CN#white-space-demo-0</div>
            </div>
          </div>
          <section class="code-box-demo code-box-demo-preview">
            <iframe
              id="demoFrame"
              name="demoFrame"
              title="antd-mobile"
              src="https://mobile.ant.design/kitchen-sink/components/white-space?lang=zh-CN#white-space-demo-0"
              style="width: 377px; height: 548px; border-top: none; border-right: 1px solid rgb(247, 247, 247); border-bottom: 1px solid rgb(247, 247, 247); border-left: 1px solid rgb(247, 247, 247); border-image: initial; box-shadow: rgb(235, 235, 235) 0px 2px 4px;"
            ></iframe>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"MobileIframe",
  props: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style lang='scss' scoped>
</style>