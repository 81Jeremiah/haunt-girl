class CreateTopLists < ActiveRecord::Migration[5.2]
  def change
    create_table :top_lists do |t|
      t.string :area
      t.string :title

      t.timestamps
    end
  end
end
