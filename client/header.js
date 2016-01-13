Router.route('header', 'header');


Template.header.helpers({
    email: function() {
        return Meteor.user().emails[0].address;
    }
});
Template.header.events({
    "click [name=Join]": function(evt, tmpl) {
        evt.preventDefault();
        $("#myModal").modal('show');
    },
    "click [name=Logout]": function(evt, tmpl) {
        evt.preventDefault();
        Meteor.logout();
    },
    "click [name=Login]": function(evt, tmpl) {
        evt.preventDefault();
        console.log('login');
        var ID = $('#ID').val();
        var PW = $('#PW').val();
        if(!ID) {
            //return alert('ID를 입력해주세요.');
            Meteor.call('customLogin', ID, PW, function(err, rslt){
                if (err) {
                    //로그인 실패시 액션
                    alert(err);
                }
                else {
                    //로그인 성공시 액션
                }
            })
        }
        if(!PW) {
            return alert('PW를 입력해주세요.');
        }
        Meteor.loginWithPassword(ID, PW);
    }
});