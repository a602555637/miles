
<script>
export default {
  async created () {
    // const res = await get('/weapp/demo')
    // console.log(12, res)
    // wx.request({
    //   url: config.host + "/weapp/demo",
    //   success: function(res) {
    //     console.log(res)
    //   }
    // });
    console.log('hello')
  }
}
</script>


<style>
.text-footer {
  text-align: center;
  font-size: 12px;
  margin-bottom: 5px;
}
.text-primary {
  color: #ea5149;
}
.btn {
  color: white;
  background: #fc4b37;
  margin-bottom: 10px;
  padding-left: 15px;
  padding-left: 15px;
  border-radius: 2px;
  font-size: 16px;
  line-height: 40px;
  height: 40px;
  width: 100%;
}
.btn:active {
  background: #fa6c5c;
}
</style>
