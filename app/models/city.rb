class City < ApplicationRecord
  has_many :posts

  def self.check_for_city(city)
    found_city = City.find_by(name: city)
    if found_city != nil
      found_city
    else
      new_city = City.create!(name: city)
      new_city
    end

  end
