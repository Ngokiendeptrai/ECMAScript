/*
Giải thích giá trị từ khóa ‘this’ trong JavaScript! Minh họa lời giải thích của bạn 
bằng một ví dụ!

Trong ngôn ngữ lập trình JavaScript, từ khóa this được sử dụng để 
tham chiếu đến đối tượng hiện tại, tức là đối tượng mà một hàm hoặc 
phương thức đang thực thi trong ngữ cảnh hiện tại.
*/
//ví dụ
var Person = {
    name: "Kien Ngo",
    age: 20,
    sayHello: function() {
      console.log("toi ten la " + this.name + " nam nay " + this.age + " tuoi");
    }
  };
  Person.sayHello();
  
//bài 2 Chuyển đổi code Javascript phía dưới sang ES6, sử dụng classs thay thế cho object.prototype

class Shape {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
}
const myShape = new Shape();
myShape.move(10, 20);
console.log(myShape.x);
console.log(myShape.y); 

//bài 3
class Clock {
    constructor({ template }) {
        this.template = template;
        this.timer = null;
    }

    render() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        console.log(output);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}
let clock = new Clock({ template: 'h:m:s' });
clock.start();



//bai 4
const person = {
    firstname: "Albert",
    lastname: "Einstein",
    setLastName: function(ho) { 
        this.lastname = ho;
    },
    setFirstName: function(ten) { 
        this.firstname = ten;
    },
    getFullName: function() { 
        return this.firstname + ' ' + this.lastname;
    }
};

person.setLastName('Ngo');
person.setFirstName('Kien');
console.log(person.getFullName()); 