class TopList < ApplicationRecord
  has_many :posts through: :list_post

end
