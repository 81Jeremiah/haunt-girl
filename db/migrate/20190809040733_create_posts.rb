class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :content
      t.string :video
      t.belongs_to :author, index: true
      t.belongs_to :state, index: true
      t.belongs_to :city, index: true
      t.datetime :published_at
      t.timestamps
    end
  end
end
