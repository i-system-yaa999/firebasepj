<template>
  <div class="login">
    <label>メールアドレス：<input type="email" v-model="email" required></label>
    <br>
    <label>パスワード：<input type="password" v-model="password" required></label>
    <br>
    <button @click="login">ログイン</button>
    <br>
    <NUxtLink to="/">戻る</NUxtLink>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
export default {
  data(){
    return{
      email:null,
      password:null,
    };
  },
  methods:{
    login(){
      if(!this.email||!this.password){
        alert('メールアドレスまたはパスワードが入力されていません。');
        return;
      };
      firebase
        .auth()
        signInWithEmailAndPassword(this.email,this.password)
        .then(()=>{
          alert('ログインが完了しました。')
          this.$router.push('/')
        })
        .catch((error)=>{
          switch (error.code){
            case 'auth/invalid-email':
              alert('メールアドレスの形式が違います。');
              break;
            case 'auth/user-disabled':
              alert('ユーザーが無効になっています。');
              break;
            case 'auth/user-not-found':
              alert('ユーザーが存在しません。');
              break;
            case 'auth/wrong-password':
              alert('パスワードが間違っています。');
              break;
            default:
              alert('エラーが発生しました。しばらくしてから再度お試しください。');
              break;
          }
        });
    },
  },
};
</script>