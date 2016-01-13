Router.route('/schedule', 'schedule');

Template.schedule.helpers({
    likeCount: function() {
        return Movie.findOne().likeCount;
    }
});

Template.schedule.events({
    'click #like': function(evt, tmpl) {
        var item = Movie.findOne();
        item.likeCount++;
        Movie.update({_id: item._id}, item);
    }
});