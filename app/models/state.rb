class State < ApplicationRecord
  has_many :cities
  has_many :posts, through: :cities
  accepts_nested_attributes_for :cities

   
  scope :has_posts, -> {(select("*")
    .joins(:posts)
    .where( "posts.state_id")
    .group("states.id")
  )}



end


# SELECT * FROM states
# JOIN posts
# WHERE states.id = posts.state_id
# GROUP BY states.id
