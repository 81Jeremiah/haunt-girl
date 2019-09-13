class City < ApplicationRecord
  has_many :posts

  # scope :has_posts, -> {(select("*")
  #   .joins(:posts)
  #   .where( "posts.city_id")
  #   .group("city.id")
  # )}
  #
  # scope :city_by_state, -> (state){joins(:posts).on("posts.state_id=states.id").joins}
  # scope :by_category, -> (category_name){joins(:categories).where("categories.name=?", category_name)}

  # SELECT * FROM states
  # JOIN posts ON  state_id= posts.state_id
  # JOIN cities ON city_id = posts.city_id
  # WHERE city_id = (state)
def self.retrieve_cities(state)
  Post.joins(:city, :state).where("state_id =?", state.id).group("city_id")
end
  # SELECT * FROM cities
  # JOIN posts ON  state_id= posts.state_id
  # JOIN states ON city_id = posts.city_id
  # WHERE states.id= 1
  # GROUP BY city_id
  # SELECT * FROM states
  # JOIN posts
  # WHERE states.id = posts.state_id
  # GROUP BY city_id

  def self.check_for_city(city)
    city.titleize
    found_city = City.find_by(name: city)

      if found_city != nil
        found_city
      else
        new_city = City.create!(name: city)
        new_city
      end
   end

end
