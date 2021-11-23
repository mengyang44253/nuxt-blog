<template>
  <div class="comment-form-content">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="comment-ruleForm">
      <el-form-item prop="content" class="content">
        <el-input type="textarea" :autosize="{minRows:5}" v-model="ruleForm.content" placeholder="请输入评论内容"/>
      </el-form-item>
      <div class="displayWrap">
        <el-form-item prop="name" class="name">
          <el-input size="small" v-model="ruleForm.name" placeholder="昵称"/>
        </el-form-item>
        <el-form-item prop="email" class="email">
          <el-input size="small" v-model="ruleForm.email" placeholder="邮箱"/>
        </el-form-item>
        <el-form-item prop="website" class="website">
          <el-input size="small" v-model="ruleForm.website" placeholder="网址"/>
        </el-form-item>
        <el-form-item>
          <el-input size="small" v-model="ruleForm.code" placeholder="验证码"/>
          <canvas width="240" height="60" class="canvas-img-code" @click="changeCode"/>
        </el-form-item>
      </div>
      <el-form-item class="submit tc">
        <el-button class="save" :loading="btnLoading" type="primary" @click="save('ruleForm')">
          发表评论
        </el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import {
  validateEmail
} from "~/utils/validate";

export default {
  name: "commentForm",
  props: {
    articleId: {
      type: String,
      default: null
    },
    currentItem: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data() {
    return {
      ruleForm: {
        content: null,
        name: null,
        email: null,
        website: null,
        code: null,
      },
      random: {},
      rules: {
        content: [
          {
            required: true,
            message: "评论不能为空！",
            trigger: "blur"
          },
        ],
        name: [
          {
            required: true,
            message: "昵称不能为空！",
            trigger: "blur"
          }
        ],
        email: [
          {
            validator: (rule, value, callback) => {
              if (value) {
                if (validateEmail(value)) {
                  callback();
                } else {
                  return callback(new Error("邮箱格式错误！"));
                }
              } else {
                return callback(new Error("请输入邮箱"))
              }
            }
          }
        ],
        code: [
          {
            validator: (rule, value, callback) => {
              if (value) {
                let randomCode = this.random;
                let result = 0;
                switch (randomCode.operator) {
                  case "+":
                    result = randomCode.nRandom1 + randomCode.nRandom2;
                    break;
                  case "-":
                    result = randomCode.nRandom1 - randomCode.nRandom2;
                    break;
                  case "*":
                    result = randomCode.nRandom1 * randomCode.nRandom2;
                    break;
                }
                if (Number(this.ruleForm.code) !== Number(result)) {
                  return callback(new Error("验证码错误"));
                } else {
                  callback();
                }
              } else {
                return callback(new Error("请输入验证码！"));
              }
            },
            trigger: "blur"
          }
        ]
      },
      btnLoading: false
    }
  },
  mounted() {
    this.$nextTick(() => this.changeCode())
  },
  methods: {
    changeCode() {
      let canvas = document.querySelector(".canvas-img-code")
      let ctx = canvas.getContext("2d")
      let nRandom1 = Math.floor(Math.random() * 10 + 5);
      let nRandom2 = Math.floor(Math.random() * 5);
      let nRandomResult = Math.floor(Math.random() * 3);
      let aOperator = ["+", "-", "*"];
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `40px Microsoft Yahei`;
      ctx.fillStyle = "#333";
      ctx.textAlign = "center";
      ctx.fillText(
        `${nRandom1} ${aOperator[nRandomResult]} ${nRandom2} = ?`,
        120,
        50
      );
      this.random = {
        nRandom1,
        nRandom2,
        operator: aOperator[nRandomResult]
      };
    },
    save(formName) {
      this.$refs[formName].validate(valid => {
          if (valid) {
            this.saveFn();
          } else {
            return false;
          }
      })
    },
    async saveFn() {
      this.btnLoading = true;
      let params = {};
      params.article_id = this.articleId;
      params.type = 1;
      params.content = this.ruleForm.content;
      params.from_name = this.ruleForm.name;
      params.from_email = this.ruleForm.email;
      params.from_website = this.ruleForm.website;
      params.userAgent = navigator.userAgent;
      params.status=1
      let res = await this.$store.dispatch("Comment/addComment", params);
      if (res.success) {
        this.btnLoading = false;
        this.$message({
          message: '评论已提交，审核通过后将展示！',
          type: 'success'
        });
        this.ruleForm.content=""
      }
    }
  }
}
</script>

<style scoped lang="less">
.comment-form-content {
  .content {
    width: 100%;
  }

  .displayWrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .name, .email, .website, .code {
    width: 45%;
  }

  .code {
    position: relative;

    .canvas-img-code {
      position: absolute;
      bottom: 5px;
      right: 5px;
      z-index: 5;
      width: 120px;
      height: 30px;
    }
  }

  .submit {
    .save {
      width: 200px;
      border-radius: 20px;
    }
  }
}
</style>
