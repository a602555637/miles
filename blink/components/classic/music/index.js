import {classicBeh} from '../classic-beh.js'

const mMgr = wx.getBackgroundAudioManager()

Component({
  /**
   * 组件的属性列表
   */
  behaviors:[classicBeh],
  properties: {
   src:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing:false,
    pauseSrc:'images/player@pause.png',
    playSrc:'images/player@play.png',
  },

  attached:function(){
    this._recoverStatus()
    this._monitorSwitch()
  },

  detached:function(event){
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay:function(event){
      // 图片切换
      if(!this.data.playing){
        this.setData({
          playing:true
        })
        mMgr.src = this.properties.src
        mMgr.title = '123'
      } else {
        this.setData({
          playing:false
        })
        mMgr.pause()
      }
    },
    // 判断当前播放音乐url 是否等于当前页面url
    // 恢复播放状态
    _recoverStatus:function(){
      if(mMgr.paused){
        this.setData({
          playing:false
        })
        return
      }
      if(mMgr.src == this.properties.src){
        this.setData({
          playing:true
        })
      }
    },

    
    _monitorSwitch:function(){
      mMgr.onPlay(()=>{
        this._recoverStatus()
      })
      mMgr.onPause(()=>{
        this._recoverStatus()
      })
      //关闭总控开关
      mMgr.onStop(()=>{
        this._recoverStatus()
      })
      //自然播放完成
      mMgr.onEnded(()=>{
        this._recoverStatus()
      })
    }
  },


})
