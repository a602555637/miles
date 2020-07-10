<template>
<div>
  <Bookinfo :info='info'></Bookinfo>
  <div class="comment">
    <textarea v-model="comment" class="textarea" :maxlength="100" placeholder="请输入评论"></textarea>
    <div class="location">
      location:
      <switch color='#EA5A49' :checked='location' @change="getGeo"></switch>
      <span class="text-primary">{{location}}</span>
    </div>
    <div class="phone">
      phoneModel
      <switch color='#EA5A49' :checked='phone' @change="getPhone"></switch>
      <span class="text-primary">{{phone}}</span>
    </div>
    <button class="btn" @click="addComment">Save</button>
  </div>
  </div>
</template>
<script>
import { get, post, showModal } from '@/util'
import Bookinfo from '@/components/Bookinfo'
export default {
  components: {
    Bookinfo
  },
  data () {
    return {
      userinfo: {},
      bookid: '',
      info: {},
      comment: '',
      location: '',
      phone: ''
    }
  },
  methods: {
    async addComment () {
      if (!this.comment) {
        return
      }
      // 评论内容 手机型号 地理位置 图书id 用户openid
      const data = {
        openid: this.userinfo.openId,
        bookid: this.bookid,
        comment: this.comment,
        phone: this.phone,
        location: this.location
      }
      try {
        await post('/weapp/addcomment', data)
        this.comment = ''
      } catch (e) {
        showModel('Fail', e.msg)
      }
      console.log(data)
    },
    async getDetail () {
      const info = await get('/weapp/bookdetail', { id: this.bookid })
      wx.setNavigationBarTitle({
        title: info.title
      })
      this.info = info
      console.log(info)
    },
    getGeo (e) {
      const ak = 'ID2MIBWUXLFx02teQAoD5DG20xd04ixq'
      let url = 'http://api.map.baidu.com/geocoder/v2/'
      if (e.target.value) {
        wx.getLocation({
          success: geo => {
            wx.request({
              url,
              data: {
                ak,
                location: `${geo.latitude},${geo.longitude}`,
                output: 'json'
              },
              success: res => {
                console.log(res)
                if (res.data.status === 0) {
                  this.location = res.data.result.addressComponent.city
                } else {
                  this.location = 'Unknown location'
                  // console.log('Unknown location')
                }
              }
            })
            console.log(geo)
          }
        })
      } else {
        this.location = ''
      }
    },
    getPhone (e) {
      if (e.target.value) {
        const phoneInfo = wx.getSystemInfoSync()
        // console.log(phoneInfo)
        this.phone = phoneInfo.model
      } else {
        this.phone = ''
      }
    }
  },
  mounted () {
    this.bookid = this.$root.$mp.query.id
    this.getDetail()
    const userinfo = wx.getStorageSync('userinfo')
    console.log('userinfo', userinfo)
    if (userinfo) {
      this.userinfo = userinfo
    }
  }
}
</script>
<style lang='scss'>
.comment {
  margin-top: 10rpx;
}
.textarea {
  width: 730rpx;
  height: 200rpx;
  background: #eee;
  padding: 10rpx;
}
.location {
  margin-top: 10px;
  padding: 5px 10px;
}
.phone {
  margin-top: 10px;
  padding: 5px 10px;
}
</style>

