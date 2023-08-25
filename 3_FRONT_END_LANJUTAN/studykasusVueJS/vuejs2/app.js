/* Percobaan Pertama */
/* var app = new Vue( {
    el: '#app',
    data: {
        name: "Fluffy Ski Coat"
    }  
}) */


/* Memunculkan Data Products */
/* var data = {
    imgClass: 'img-fluid',
    products: [
        {
            "id": "555",
            "name": "Bambo Thermal Ski Coat",
            "description": "You'll be the most environmentally conscious",
            "price": "10",
            "image": "https://wowjohn.com/wp-content/uploads/2022/05/baju-polos-png-6-Transparent-Images-1024x1024.png"
        }
    ]
} */

/* Percobaan Kedua */
/* var app = new Vue({
    el: '#app',
    data: data
}) */



/* Percobaan Ketiga */
/* Perbedaan Methods Dan Computed */
var app = new Vue({
    el: '#app',
    data: {
        slugText: 'The Quick #(*!&@ Brown 29'
    },
    computed: {
        now: function() {
            var date = new Date();
            return (
                 String(date.getHours()) + 
                 String(date.getMinutes()) +
                 String(date.getSeconds()) 
            );
        },
        slugtize: function() {
            return this.slugText 
                .toLowerCase() 
                .replace(/[^\w]+/g, '')
                .replace(/ +/g, '-') + '-' + this.now;
        }
    },
    methods: {
       /*  now: function() {
            var date = new Date();
            return (
                 String(date.getHours()) + 
                 String(date.getMinutes()) +
                 String(date.getSeconds()) 
            );
        } */
    }
})
