<template>
    <div class="editeprofile">
        <div class="profile_img">
            <img src="../assets/profile.png" alt />
        </div>
        <div class="inputs">
            <input id="name" type="text" :value="user.name" />
            <input id="lastName" type="text" :value="user.lastName" />
            <input id="email" type="email" :value="user.email" />
            <input id="born" type="text" :value="user.born" />
            <router-link to="/" @click="save()">
                <button id="save">Save</button>
            </router-link>
        </div>
    </div>
</template>
<script>
import JsonUser from "../json/user.json";
export default {
    name: "editeprofile",
    data: function () {
        return {
            user: JsonUser,
        }
    },
    methods: {
        save: function () {
            this.user.name = document.getElementById("name").value;
            this.user.lastName = document.getElementById("lastName").value;
            this.user.email = document.getElementById("email").value;
            this.user.born = document.getElementById("born").value;
        }
    }

}
</script>
<style lang="scss">
.editeprofile {
    display: flow-root;
    .profile_img {
        display: flex;
        justify-content: center;
        margin: 20px;
        img {
            width: 12em;
            border-radius: 50%;
            border: 4px solid #9795dc;
            @media (max-width: 991px) {
                width: 6em;
            }
        }
    }
    .inputs {
        display: flex;
        flex-direction: column;
        align-items: center;
        input {
            padding: 1em;
            width: 35%;
            margin: 10px;
            border-radius: 12px;
            border: 2px solid #bebbc4;
            &:focus-visible {
                border: 2px solid #bebbc4;
            }
            @media (max-width: 991px) {
                width: 70%;
            }
        }
        a {
            margin: 20px;
            button {
                padding: 15px 30px;
                border-radius: 12px;
                border: 2px solid #9795dc;
                background-color: #512da7;
                color: #fff;
                font-size: 20px;
                cursor: pointer;
            }
        }
    }
}
</style>