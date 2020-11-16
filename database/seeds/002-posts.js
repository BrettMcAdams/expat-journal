exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const posts = [
    {
      photo_url: "https://images.unsplash.com/photo-1523653049681-701d71cf57c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=812&q=80",
      story_title: "The Desert",
      story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      upvotes: 2400,
      user_id: 1,
    },
    {
      photo_url: "https://images.unsplash.com/photo-1465311354905-789ff5f7a457?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
      story_title: "The Rainforest",
      story: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      upvotes: 1100,
      user_id: 1,
    },
    {
      photo_url: "https://images.unsplash.com/photo-1594533624757-0aa5a8c7f1f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
      story_title: "The Ocean",
      story: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
      upvotes: 800,
      user_id: 2,
    },
    {
      photo_url: "https://images.unsplash.com/photo-1587258454464-f9bbb4a4803b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
      story_title: "The Cliff",
      story: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      upvotes: 3200,
      user_id: 2,
    },
  ];

  return knex("posts")
    .insert(posts)
    .then(() => console.log("\n== Seed data for posts table added. ==\n"));
};
