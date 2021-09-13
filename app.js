/*
deklarasi variabel pada javasript:
    - var ~> bisa redeclared
    - let ~> tidak bisa redeclared, tidak bisa reassigned
    - const ~> bersifat final
*/

const app = Vue.createApp({
    // isian yang muncul pada DOM
    // template, data, functions,... 
    // template: '<h2>I am the templates</h2>'
    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            showBooks: true,
            x: 0, y: 0
        }
    },
    methods: {
        // tempat untuk membuat instance baru / functions / methods
        changeTitle(title) {
            console.log('you clicked me!');
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(event, data) {
            console.log(event, event.type)
            if (data) {
                console.log(data)
            }
        },
        handleMouseMove(event) {
            this.x = event.offsetX
            this.y = event.offsetY
        }
    }
})

app.mount('#app')