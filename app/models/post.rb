class Post < ApplicationRecord
  belongs_to :category
  belongs_to :state
  scope :by_category, -> (category_id){joins(:category).where("category_id=?", category_id)}
  has_one_attached :image
  scope :by_state, -> (state_id){joins(:state).where("state_id=?", state_id)}
  scope :search, ->(query) {where( 'creator_name LIKE ?', "%#{query}%")}


end
