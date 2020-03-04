class AddContentToAwards < ActiveRecord::Migration[5.2]
  def change
    add_column :awards, :content, :text
  end
end
