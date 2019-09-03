class Post < ApplicationRecord
  belongs_to :category
  belongs_to :state
  scope :by_category, -> (category_id){joins(:category).where("category_id=?", category_id)}
  has_one_attached :image

end
