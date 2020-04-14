class RenameListPoststoTopListPosts < ActiveRecord::Migration[5.2]
  def change
     rename_table :list_posts, :top_list_posts
  end
end
