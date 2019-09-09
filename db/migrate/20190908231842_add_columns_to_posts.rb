class AddColumnsToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :recommended_players, :string
    add_column :posts, :price, :string
    add_column :posts, :difficulty, :string
    add_column :posts, :public_or_private, :string
    add_column :posts, :recommended_age, :string
    add_column :posts, :scarefactor, :string
  end
end
