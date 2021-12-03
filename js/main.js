const app = new Vue({
    el: '#app',
    data: {
        names: []
    },
    mounted: function () {
        axios.get('https://api.mockaroo.com/api/564baa40?count=50&key=895207a0')
            .then(response => {
                this.names = response.data;
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            });
    }
});