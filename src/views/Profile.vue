<template>
    <div class="profile">
        <div class="media">
            <div class="profile_img">
                <img src="../assets/profile.png" alt />
            </div>
            <div class="info">
                <h2>{{ user.name }}</h2>
                <p>{{ user.email }}</p>
                <p>{{ user.born }}</p>
            </div>
        </div>
        <div class="navbar">
            <ul>
                <li @click="mybooks = true" :class="mybooks == true ? 'active' : ''">My Books</li>
                <li @click="mybooks = false" :class="mybooks == false ? 'active' : ''">Browse Books</li>
            </ul>
        </div>
        <div class="books">
            <ul>
                <li v-for="book in books" :key="book.id" v-show="book.mybook == mybooks">
                    <h3>{{ book.name }}</h3>
                    <p>{{ book.type }}</p>
                    <p>{{ book.available ? "Available" : "Not Available" }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import JsonBooks from "../json/books.json";
import JsonUser from "../json/user.json";
export default {
    name: "profile",
    data: function () {
        return {
            mybooks: true,
            books: JsonBooks,
            user: JsonUser,
        }
    },
}
</script>
<style lang="scss">
.profile {
    .media {
        display: flex;
        .profile_img {
            img {
                margin: 25px;
                border-radius: 50%;
                width: 7rem;
                border: 3px solid #9795dc;
            }
        }
        .info {
            margin: 50px 0;
        }
    }
    .navbar {
        &::after {
            content: "";
            content: "";
            position: absolute;
            height: 2px;
            width: calc(100% - 6em);
            background-color: #dfdfdf;
            @media (max-width: 991px) {
                width: 100%;
            }
        }
        ul {
            display: flex;
            justify-content: space-evenly;
            li {
                padding: 17px;
                border-bottom: 4px solid transparent;
                cursor: pointer;
                &:hover {
                    border-bottom: 4px solid #9795dc;
                }
                &.active {
                    border-bottom: 4px solid #9795dc;
                }
            }
        }
    }
    .books {
        ul {
            li {
                padding: 20px;
            }
        }
    }
}
</style>