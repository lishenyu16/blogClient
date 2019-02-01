<template>
    <div class="topnav">
        <div class="setting aboutme">
            <a href="https://lishenyu16.github.io/aboutMe/">About Me</a>
        </div>
        <div class="setting">
            <a v-if="!isLoggedIn" @click="login">Sign In</a>
            <a v-if="!isLoggedIn" @click="signup">Sign Up</a>
            <a v-if="isLoggedIn" @click="signout" >Sign out</a>
            <a v-if="isLoggedIn" @click="profile">Profile</a>
            <button v-if='isLoggedInAdmin' type="button" class="btn-pencil" @click="showModal">Notice</button> 
        </div>
        <transition name="modal-fade">
            <div class="modal-backdrop" v-if="isModalVisible" @click="closeModal"> 
                <div class="modal" @click.stop> 
                    <div class="modal-header"> 
                        <div class="modal-header-title">
                            Edit Notice
                        </div>
                        <div>
                            <button type="button" class="btn-close" @click="closeModal">X</button>
                        </div>
                    </div>
                    <div class="modal-body"> 
                        <div class="input-area">
                            <textarea v-model="input" class="comment-input" cols="60" rows="3" placeholder="Write your message here..."></textarea>
                        </div>
                    </div> 
                    <div class="modal-footer"> 
                        <button type="button" class="btn-green" @click="closeModal">Cancel</button> 
                        <button type="button" class="btn-green" @click="editNotice">Submit</button> 
                    </div> 
                </div> 
            </div>
        </transition>
    </div>
</template>
<script>
import  authAPI from "../../services/authentication"
import  blogAPI from "../../services/blogAPI"
export default {
    data() {
        return {
            isModalVisible: false,
            input:'',
        }
    },
    methods: {
        signout() {
            this.$store.commit('SET_USER',null)
            this.$store.commit('SET_TOKEN',null)
            this.$router.push('/login')
        },
        login(){
            this.$router.push('/login')
        },
        signup(){
            this.$router.push('/signup')
        },
        profile(){
            this.$router.push('/profile')
        },
        showModal(){
            this.isModalVisible = true
        },
        closeModal(){
            this.isModalVisible = false
        },
        editNotice(){
            const notice = {content: this.input}
            blogAPI.editNotice(notice)
                .then(()=>{
                    this.isModalVisible = false;
                    this.$notify({
                        group: 'foo',
                        type: 'success',
                        title: 'Scheduled Maintence Updated',
                        // text: noticeContent,
                        duration: 5000,
                        speed: 1000,
                    })
                })
                .catch(err=>{
                    console.log(err)
                })
        }
    },
    computed: {
        user() {
            return this.$store.getters.currentUser
        },
        isLoggedIn(){
            return this.$store.getters.isLoggedIn
        },
        isLoggedInAdmin(){
            if(this.$store.getters.isLoggedIn && this.$store.getters.currentUser.isAdmin){
                return true
            }
            return false
        }  
    },
}
</script>

<style scoped>
.modal-fade-enter, 
.modal-fade-leave-active { 
    opacity: 0; 
} 
.modal-fade-enter-active, 
.modal-fade-leave-active {
    transition: opacity .5s ease 
}
.modal-backdrop{
    position: fixed; 
    display: flex; 
    justify-content: center; 
    align-items: center;
    z-index:11; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.modal { 
    width:60%;
    background-color: #fff; 
    box-shadow: 2px 2px 20px 1px; 
    overflow-x:auto; 
    display: flex; 
    flex-direction: column; 
}

.modal-header{
    padding: 10px; 
    display: flex; 
    justify-content: space-between;
    align-items: center;
    font-size:1rem;  
    border-bottom: 1px solid #eee; 
	color: #4aae9b; 
	justify-content: space-between; 
}
.modal-footer { 
    padding: 15px; 
    display: flex; 
	border-top: 1px solid #eee; 
	justify-content: flex-end; 
} 
.modal-body { 
	position: relative; 
	padding: 20px 10px; 
} 
.input-area{
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;  
    font-size:1.5rem;    
}
.comment-input{
    font-size:1rem;
    width:100%;
    margin-right:0;
    box-sizing: inherit;
    padding:5px;
    border:1px solid rgb(165, 165, 165);
}

.topnav {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items:center;
    position: fixed;
    top:0;
    left:0;
    height:3rem;
    z-index: 10;
    width:100%;
    box-sizing: border-box;
    margin:0;
    background-color:rgb(146, 216, 164);
}
.setting{
    width:30%;
    display: flex;
    justify-content: space-around;
    align-items:center;
    margin-right:0.5rem;
}
.setting.aboutme{
    width:30%;
    display: flex;
    justify-content: flex-start;
    align-items:center;
    margin-left:1rem;
}


.topnav a {
  color: #f2f2f2;
  text-align: center;
  padding: 1rem 1rem;
  font-size: 1rem;
}

.setting a{
    /* font-size: 1rem; */
    padding: 0;
    text-decoration: none;
}

@media  screen and (min-width: 600px) {
    .setting{
        width:30%;
        display: flex;
        justify-content: flex-end;
        align-items:center;
    }
    .setting a{
        padding:1rem;
    }
}

.topnav a:hover, .topnav a:focus, .topnav a:active{
    box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
    text-decoration: none;
    cursor: pointer;
}

@import url('https://fonts.googleapis.com/css?family=Courgette');

    /* background-color:rgb(146, 216, 164) !important; */

.navbar-nav{
    font-family: 'Courgette', cursive;
}
</style>

