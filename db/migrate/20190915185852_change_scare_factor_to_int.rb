class ChangeScareFactorToInt < ActiveRecord::Migration[5.2]
  def change
    change_column :posts, :scarefactor, :integer
  end
end
