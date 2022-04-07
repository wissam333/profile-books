<template>
    <div class="sidebar">
        <ul>
            <div class="logo">
                <img src="../assets/1.png" alt />
            </div>
            <router-link to="/" tag="li">
                <i class="fas fa-star"></i>
                <p>Profile</p>
            </router-link>
            <router-link to="/editeprofile" tag="li">
                <i class="fas fa-home"></i>
                <p>Edit Profile</p>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    name: "sidebar",
};
</script>
<style lang="scss">
.sidebar {
    width: 6em;
    background-color: #eee;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: flex-start;
    @media (max-width: 991px) {
        display: flex;
        width: 100%;
        position: relative;
        bottom: 0;
        justify-content: space-around;
        flex-direction: row;
    }
    .logo {
        position: absolute;
        top: 8px;
        left: 13px;
        @media (max-width: 991px) {
            position: relative;
            display: none;
        }
        img {
            width: 4rem;
        }
    }
    ul {
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        @media (max-width: 991px) {
            width: 100%;
            position: relative;
            flex-direction: row;
        }
        li,
        a {
            display: flex;
            align-items: center;
            flex-direction: column;
            padding: 10px 20px;
            text-decoration: none;
            cursor: pointer;
            svg {
                display: flex;
                font-size: 27px !important;
                color: red;
            }
            p {
                font-size: 12px;
                font-weight: 400;
                line-height: 1.33;
                margin-left: 10px;
                color: #7d7979;
            }
            &.router-link-exact-active {
                background-color: #8aa9c9;
            }
            &:not(:first-of-type):hover {
                background-color: #8aa9c9;
            }
        }
    }
}
</style>