class ChangePublishedBackToDatetime < ActiveRecord::Migration[5.2]
  def change
    change_column :posts, :published_at, :datetime
  end
end
