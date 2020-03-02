class CreateAwards < ActiveRecord::Migration[5.2]
  def change
    create_table :awards do |t|
      t.string :title
      t.integer :year
      t.string :link_to_post
      t.timestamps
    end
  end
end
