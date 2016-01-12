Router.route('/community', 'community');

Template.community.onCreated(function () {
    this.subscribe("community",{});
});


Template.community.helpers ({
    board : function(){
        var arr = [
            {글번호:4,제목:"졸려",작성자:"똥멍청이",좋아요:""}
            ,{글번호:3,제목:"배고파",작성자:"오리",좋아요:""}
            ,{글번호:1,제목:"여기뭐하는곳임?",작성자:"ㅈㅇ",좋아요:""}
            ,{글번호:2,제목:"나도",작성자:"헬퍼스",좋아요:""}
        ];
        arr = _.sortBy(arr,function(obj){ return obj.글번호;});
        return arr;
    }
});
