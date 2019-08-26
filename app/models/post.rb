class Post < ApplicationRecord
  scope :by_category, -> (category_name){joins(:categories).where("categories.name=?", category_name)}

end
