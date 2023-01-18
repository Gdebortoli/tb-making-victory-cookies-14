const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_content: 'hi',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'yo',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_content: 'fjkashfskjdhf',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_content: 'akjsndfkansdkjf',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_content: 'ansd;lkfn;alsdfjabnv kd',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_content: 'nas;flnvs aowir opsfdjkl',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Hola',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'grand',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_content: 'lorem ipsum dolor sit amet, consectetuer adipiscing',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_content: 'jhlfkasjhfglkjsd',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'dnd moonknight',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_content: 'poapipowkdpklndknvx,',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_content: 'hfidiidfhfdihfihfd',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_content: 'hi',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_content: 'jnfjkdnk',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_content: 'jfkjghskldjfhg',
    user_id: 7
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
