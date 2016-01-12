Meteor.publish("community",function(obj){
    var condition = obj || {};
    console.log(condition);
    return Community.find(condition);
});