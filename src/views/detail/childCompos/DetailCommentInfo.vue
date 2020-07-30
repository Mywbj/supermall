<template>
  <div v-if="Object.keys(commentInfo).length !== 0" id="comment-info">
    <div class="paddingg">
      <div class="info-header">
        <span>用户评论</span>
        <span>更多</span>
      </div>
      <div class="info-content">
        <div class="info-user">
          <img :src="commentInfo.user.avatar">
          <span>{{commentInfo.user.uname}}</span>
        </div>
          <p>{{commentInfo.content}}</p>
          <div class="info-time">
            <span>{{commentInfo.created | showDate}}</span>
            <span>{{commentInfo.style}}</span>
          </div>
          <div class="commentImg">
            <img v-for="item in commentInfo.images" :src="item">
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils'
  export default {
    name: 'DetailCommentInfo',
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showDate(value) {
        // 1. 将时间戳转换成Date 对象
        const data = new Date(value * 1000)
        console.log(data)
        // 2. 将data对象进行格式化 （以什么样的方式输出）
        return formatDate(data, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  #comment-info {
    margin-top: 15px;
    border-top: 3px solid #F0F0F0;
  }
  .paddingg {
    padding: 15px;
  }
  .info-header {
    border-bottom: 2px solid #F0F0F0;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  .info-content p {
    font-size: 13px;
    line-height: 20px;
  }
  .info-user {
    margin: 10px 0;
  }
  .info-user img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #f0f0f0;
    vertical-align: middle;
  }
  .info-user span {
    font-size: 15px;
    margin-left: 10px;
  }
  .info-time {
    margin: 8px 0;
    font-size: 12px;
  }
  .info-time span {
    margin-right: 10px;
  }
  .commentImg img {
    width: 80px;
    height: 90px;
  }
</style>