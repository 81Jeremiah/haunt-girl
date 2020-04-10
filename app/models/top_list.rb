class TopList < ApplicationRecord
  has_many :list_posts
  has_many :posts, through: :list_post


end
