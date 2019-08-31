class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content

  belongs_to :category
  belongs_to :state

end
