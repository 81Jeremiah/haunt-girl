class RemoveStateIdFromPosts < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :state_id
  end
end
