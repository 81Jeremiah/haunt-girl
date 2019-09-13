class Remove < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :city_id

  end
end
