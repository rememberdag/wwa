Template.communityItem.events({
    "click button[name=remove]" : function(evt , tmpl) {
        console.log(this);
        Community.remove({_id: this._id});
    }
});