// var Rect = {
//     width:100,
//     height:200,

//     draw:function (){
//         console.log('hello world')
//         this.pinproparty()
//         console.log(this)
//     },
//     pinproparty:function(){
//         console.log('my Width is ' + this.width)
//         console.log(' my height is ' +  this.height)
//     }
// }



// এখানে ডায়নামিক ভাবে ফাংশন টা দেখানো হলো , যেখানে একজন ইউজার বাইরে থেকে দুইটা ভেলু প্রভাইট করবে 



var createRect = function(width,height) {
    return {
            width:width,
            height:height,
        
            draw:function (){
                console.log('hello world')
                this.pinproparty()
                console.log(this)
            },
            pinproparty:function(){
                console.log('my Width is ' + this.width)
                console.log(' my height is ' +  this.height)
            }
    }
}

var Rect1 = createRect(20,30)
Rect1.draw()

var Rect2 = createRect(30,40)
Rect2.draw()