class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :title, :content, :image, :published_at,
  :recommended_players, :price, :difficulty, :public_or_private,
  :company_website, :public_or_private, :recommended_age, :scarefactor, :price,
  :difficulty



  belongs_to :category
  # belongs_to :state


  belongs_to :city
  has_one :state, through: :city
  has_one :country, through: :state

  def image
    return unless object.image.attached?

    object.image.blob.attributes
          .slice('filename', 'byte_size')
          .merge(url: image_url)
          .tap { |attrs| attrs['name'] = attrs.delete('filename') }
  end

  def image_url
    url_for(object.image)
  end

end
