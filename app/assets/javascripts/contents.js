$(function () {
  let header = new Vue({
    el: '#header',
    data: {
      title: 'Bloomee',
      choose: 'Choose one',
      register: 'Sign up',
      contact: 'Contacts',
    }
  });

  let articleMain = new Vue({
    el: '#article-main',
    data: {
      title: '大切な人に、花を贈ろう。',
      body: '写真から花を選び簡単に購入。オンラインで花屋さんに相談もできます。',
      more: '写真から花を選ぶ',
      consult: 'お花屋さんに相談'
    }
  });

  let articleFeature = new Vue({
    el: '#article-feature',
    data: {
      heading: {
        title: 'Bloomeeとは'
      },
      feature: {
        simple: {
          title: 'ご購入はとても簡単',
          body: 'スマートフォン、携帯、パソコンから最短3タップで花が購入出来ます。「好きな花の写真を選ぶ」それだけ。'
        },
        choose: {
          title: 'お好きな花をどうぞ',
          body: '「イメージ画像」ではなくリアルタイムにお店で購入出来る花だけを取り扱っており、あなたのお気に入りの花を選ぶ事が可能です。'
        },
        scene: {
          title: '様々なシーンで活躍',
          body: '大切な人へのプレゼント、取引先の移転、自分へのプレゼント。会員登録で2回目以降がもっと簡単に購入出来ます。'
        }
      }
    }
  });

  let $wd = $(window);
  let feature = $('#article-feature');
  let featureContents = $('.article-feature__contents-grid--body');

  $wd.scroll(function () {
    if ($wd.scrollTop() >= 150) {
      let el = new TimelineMax({
        repeat: 0
      });
      el.to(feature, 0.5, {
        opacity: 1,
        ease: Power3.easeIn
      }).to(featureContents, 1.5, {
        rotationX: -360,
        opacity: 1,
        ease: Power3.easeOut,
        delay: 1.5
      });
    }
  });

  let gridContents = $('.article-main__grid-contents');

  let tween = new TimelineMax({
    repeat: -1,
    yoyo: true
  });

  tween.to(gridContents, 1, {
    rotationY: 180,
    rotationX: 180,
    backgroundColor: '#000',
    delay: 2
  }).to(gridContents, 1, {
    rotationY: 180,
    rotationX: 180,
    backgroundColor: '#fff',
    delay: 2
  });

});