function JsonConverter() {
    this.convertToJson = function(object) {
        var objectAsJson = JSON.stringify(object);
        console.log(objectAsJson);
    }

    this.convertToObject = function(json) {
        var object = JSON.parse(json);
        console.log(object);
    }
}