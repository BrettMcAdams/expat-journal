module.exports = {
  isValid,
};

function isValid(post) {
  return Boolean(
    post.photo_url &&
      post.story_title &&
      post.story &&
      post.upvotes &&
      post.user_id
  );
}
