Community = new Meteor.Collection('community');

if(Meteor.isServer) {
    Meteor.startup(function () {
        if (Community.find().count() == 0) {
            Community.insert({글번호: 1, 제목: "여기뭐하는곳임?", 작성자: "ㅈㅇ", 좋아요: ""});
            Community.insert({글번호: 2, 제목: "나도", 작성자: "헬퍼스", 좋아요: ""});
            Community.insert({글번호: 3 , 제목: "배고파", 작성자: "오리", 좋아요: ""});
            Community.insert({글번호: 4, 제목: "졸려", 작성자: "똥멍청이", 좋아요: ""});
        };
    });
}