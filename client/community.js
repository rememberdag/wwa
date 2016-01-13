Router.route('/community', 'community');

Template.community.onCreated(function() {
    //1
    console.log('created');
});

Template.community.onRendered(function() {
    //3
    console.log('rendered');
    //$('.table > tbody > tr').click(function() {
    //  // row was clicked
    //  Router.go('/boardDetail', {_id: });
    //});
});

Template.community.helpers({
    likeColor: function() {
        // this에 현재 라인의 데이터가 들어있다.
        var curArticle = this;
        var me = Meteor.user();
        if(!me) {
            return 'info';
        }

        var curData = Likes.findOne({'user._id': me._id, 'article._id': curArticle._id});
        if(curData) {
            return 'warning';
        }
        else {
            return 'info';
        }
    },
    //2
    boards: function () {
        return Boards.find({});
    },
    isLogin: function() {
        if(Meteor.user() === null
            || Meteor.user() === undefined) {
            //execute
            return false;
        }
        else return true;
    }

});

Template.community.events({
    "click #btnLike": function(evt, tmpl) {
        var user = Meteor.user();
        if(!user) {
            return alert('로그인을 해주세요.');
        }
        var obj = {};
        obj.user = user;
        obj.article = this;
        Likes.insert(obj);
    },
    //4
    "click #removeOneItem": function(event, template) {
        //console.log(this);
        //var count = $(e.target).attr('count');
        //var obj = Boards.findOne({글번호: parseInt(count)});
        if(confirm('정말 지우시겠습니까?')) {
            Boards.remove({
                _id: this._id
            });
        }
    },
    "click #cancel": function(e, tmpl) {
        $('#작성자').val('');
        $('#제목').val('');
        $('#본문').val('');
    },
    "click #write": function(e, tmpl) {
        var obj = {};
        obj.작성자 = $('#작성자').val();
        obj.제목 = $('#제목').val();
        if(obj.작성자.length <= 0 || obj.제목.length <= 0) {
            //error
            return alert('작성자와 제목을 모두 입력해주세요!!');
        }
        obj.본문 = $('#본문').val();
        //글번호를 알아냅시다. 글번호 === 전체 글 갯수 + 1
        //글번호 max값 + 1로 수정
        var board = Boards.findOne({}, {sort: {'글번호': -1}});
        if(board !== undefined && board !== null) {
            if (board.hasOwnProperty('글번호')) {
                obj.글번호 = parseInt(board.글번호) + 1;
            }
        }
        else {
            obj.글번호 = 0;
        }

        Boards.insert(obj);

        $('#작성자').val('');
        $('#제목').val('');
        $('#본문').val('');
    }
});
