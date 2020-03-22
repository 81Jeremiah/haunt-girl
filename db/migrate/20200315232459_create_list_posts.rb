class CreateListPosts < ActiveRecord::Migration[5.2]
  def change
    create_table :list_posts do |t|
      t.belongs_to :post, index: true, foreign_key: true
      t.belongs_to :top_list, index: true, foreign_key: true
      t.timestamps
    end
  end
end
