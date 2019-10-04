class Post < ApplicationRecord
  belongs_to :category
  belongs_to :city
  has_one :state, through: :city
  has_one :country, through: :state

  scope :by_category, -> (category_id){joins(:category).where("category_id=?", category_id)}
  has_one_attached :image
  scope :by_state, -> (state_id){joins(:state).where("state_id=?", state_id)}
  scope :search, ->(query) {where( 'creator_name LIKE ?', "%#{query}%")}


  def city_name=(name)
    self.city = City.find_or_create_by(name: name.titleize)
  end

  def city_name
    self.city ? self.city.name : nil
  end

  def country_name=(name, country_code)
    self.state.country = Country.find_or_create_by(name: name, country_code: country_code )
  end


  def self.unique_states(category_id)
    Post.where('category_id =?',category_id ).collect{ |post| post.state }.uniq
  end
  # def state=(state_id)
  #   debugger
  #   self.city.state_id = state_id
  # end

end
