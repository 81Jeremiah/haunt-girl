class Country < ApplicationRecord
  has_many :states
  has_many :cities, through: :states
  has_many :posts, through: :cities
end
