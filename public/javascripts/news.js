let newsVM = new Vue({
    el:"#showVue",
    data:{
        arr:[],
        page:0,
        line:2,
        keyWord:""
 },
    methods:{
        refresh:function(){
            this.$http.post('/news',{page:this.page,line:this.line,keyWord:this.keyWord}).then(function(data){
                console.log(data);
                this.page+=this.line;
                this.arr.push(...data.body);
            })
        },
        search:function() {
            this.page = 0;
            this.arr = [];
            this.$http.post('/news', {page: this.page, line: this.line,keyWord:this.keyWord}).then(function (data) {
                console.log(data);
                this.page += this.line;
                this.arr.push(...data.body);
            })
        }
    },
    //生命周期
        created:function(){
         this.refresh();

    }
});