class Post < ApplicationRecord
  belongs_to :category
  belongs_to :city
  has_one :state, through: :city
  scope :by_category, -> (category_id){joins(:category).where("category_id=?", category_id)}
  has_one_attached :image
  scope :by_state, -> (state_id){joins(:state).where("state_id=?", state_id)}
  scope :search, ->(query) {where( 'creator_name LIKE ?', "%#{query}%")}
  accepts_nested_attributes_for :city, :state


  def city_name=(name)
    self.city = City.find_or_create_by(name: name)
  end

  def city_name
    self.city ? self.city.name : nil
  end

  def self.unique_states
    Post.all.collect{ |post| post.state }.uniq
  end
  # def state=(state_id)
  #   debugger
  #   self.city.state_id = state_id
  # end

end
