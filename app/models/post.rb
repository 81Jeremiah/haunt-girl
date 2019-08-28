class Post < ApplicationRecord
  belongs_to :category
  scope :by_category, -> (category_name){joins(:categories).where("categories.name=?", category_name)}

end
