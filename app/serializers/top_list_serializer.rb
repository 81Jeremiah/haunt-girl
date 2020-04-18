class TopListSerializer < ActiveModel::Serializer
  attributes :id, :area, :title
  has_many :top_list_posts
  has_many :posts, through: :top_list_posts


end
