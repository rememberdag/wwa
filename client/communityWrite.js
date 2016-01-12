Router.route('/communityWrite', 'communityWrite');

Template.communityWrite.events({
    //4
    "click #cancel": function(e, tmpl) {
        $('#작성자').val('');
        $('#제목').val('');
        $('#본문').val('');
    },
    "click #write": function(e, tmpl) {
        var obj = {};
        obj.작성자 = Meteor.user().emails[0].address;
        obj.제목 = $('#제목').val();
        if(obj.작성자.length <= 0 || obj.제목.length <= 0) {
            //error
            return alert('작성자와 제목을 모두 입력해주세요!!');
        }
        obj.본문 = $('#본문').val();
        //글번호를 알아냅시다. 글번호 === 전체 글 갯수 + 1
        //글번호 max값 + 1로 수정
        var board = Community.findOne({}, {sort: {'글번호': -1}});
        if(board !== undefined && board !== null) {
            if (board.hasOwnProperty('글번호')) {
                obj.글번호 = parseInt(board.글번호) + 1;
            }
        }
        else {
            obj.글번호 = 0;
        }

        Community.insert(obj);
        obj.createdAt = new Date();
        obj.type = 'boardWriting';

        $('#작성자').val('');
        $('#제목').val('');
        $('#본문').val('');

        Router.go('/');
    }
});

