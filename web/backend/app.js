const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.static('public'));
app.set('view engine', 'pug');


// Parse Data
const annonces = JSON.parse(fs.readFileSync("public/data/annonces2.json")).annonce;
const titles = [];
const descriptifs = [];
const permanent = [];
for (var i = 0; i < annonces.length; i++) {
    titles.push(annonces[i].titre);
    descriptifs.push(annonces[i].descriptif);
    permanent.push(annonces[i].permanent);
}
//console.log(titles)
//road

//app.get('/', (req, res) => {
//    res.render('index', {
//        title: 'Hey',
//        message: 'Hello World',
//        url: "https://pugjs.org/api/getting-started.html",
//        user: { name: "Nour", age: "21" }
//    })
//})

app.get('/', (req, res) => {
    res.render('index', {
        //Url
        url_signin: "/signIn",
        url_login: "/logIn"
    })
})

app.get('/signIn', (req, res) => {
    res.render('signin', {
        //Url
        url_main: "/main"
    })
})

app.get('/logIn', (req, res) => {
    res.render('login', {
        //Url
        url_main: "/main"
    })
})

app.get('/main', (req, res) => {
    res.render('main', {
        //Url
        url_main: "/main",
        url_chat: "/chatMain",
        url_explore: "/explore",
        url_help: "/help",
        url_profile: "/profile",
        url_publish: "/publish"
    })
})

app.get('/call', (req, res) => {
    res.render('call', {
        //Url
        url_main: "/main",
        url_chat: "/chatMain",
        url_explore: "/explore",
        url_help: "/help",
        url_profile: "/profile",
        url_publish: "/publish",
        //images
        //logo: "/images/logo_Adjuteo.png"
    })
})

app.get('/chatMain', (req, res) => {
    res.render('chat_main', {
        //Url
        url_main: "/main",
        url_chatmain: "/chatMain",
        url_explore: "/explore",
        url_help: "/help",
        url_profile: "/profile",
        url_publish: "/publish",
        url_chat: "/chat"
    })
})

app.get('/chat', (req, res) => {
    res.render('chat', {
        //Url
        url_main: "/main",
        url_chat: "/chatMain",
        url_explore: "/explore",
        url_help: "/help",
        url_profile: "/profile",
        url_publish: "/publish",
        url_call: "/call",

    })
})

app.get('/explore', (req, res) => {
    res.render('explore_menu', {
        //Url
        url_main: "/main",
        url_chat: "/chatMain",
        url_explore_menu: "/explore",
        url_help: "/help",
        url_profile: "/profile",
        url_publish: "/publish",
        url_explore: "/explore_result"
    })
})

app.get('/explore_result', (req, res) => {
    res.render('explore', {
        //Url
        url_main: "/main",
        url_chat: "/chatMain",
        url_explore_menu: "/explore",
        url_help: "/help",
        url_profile: "/profile",
        url_publish: "/publish",
        data_titles: titles,
        data_descriptifs: descriptifs,
        isPerm: permanent
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        //Url
        url_main: "/main",
        url_chat: "/chatMain",
        url_explore_menu: "/explore",
        url_help: "/help",
        url_profile: "/profile",
        url_publish: "/publish"
    })
})

app.get('/profile', (req, res) => {
    res.render('profile', {
        //Url
        url_main: "/main",
        url_chat: "/chatMain",
        url_explore_menu: "/explore",
        url_help: "/help",
        url_profile: "/profile",
        url_publish: "/publish"
    })
})

app.get('/publish', (req, res) => {
    res.render('publish', {
        //Url
        url_main: "/main",
        url_chat: "/chatMain",
        url_explore: "/explore",
        url_help: "/help",
        url_profile: "/profile",
        url_publish: "/publish",
        url_publish2: "/publishtags"
    })
})

app.get('/publishtags', (req, res) => {
    res.render('publish2', {
        //Url
        url_main: "/main",
        url_chat: "/chatMain",
        url_explore_menu: "/explore",
        url_help: "/help",
        url_profile: "/profile",
        url_publish: "/publish"
    })
})


module.exports = app;