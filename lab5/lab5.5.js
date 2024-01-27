
const axios = require('axios');


class APICaller {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    get(endpoint) {
        return axios.get(this.baseUrl + endpoint)
    }
}

class Comment extends APICaller {
    constructor(baseUrl,endpoint) {
        super(baseUrl);
        this.endpoint = endpoint;
    }
    layHet() {
        this.get(this.endpoint).then(data => console.log("Lấy hết dữ liệu",data.data));
    }
    laymot(id) {
        this.get(this.endpoint+`/${id}`).then(data => console.log("lấy 1 dữ liệu",data.data));
    }
}
const comentsAPI = (Url,endpoint) => {
    const myComments = new Comment(Url,endpoint);
    myComments.layHet();
    myComments.laymot(1);
}

comentsAPI("http://localhost:3000/","comments");
comentsAPI("http://localhost:3000/","posts");
