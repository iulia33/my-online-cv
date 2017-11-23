
function Comment(apiResponse){
    apiResponse = apiResponse || {};
    this.postId = apiResponse.postId;
    this.id = apiResponse.id;
    this.name = apiResponse.name;
    this.email = apiResponse.email;
    this.body = apiResponse.body;
}

