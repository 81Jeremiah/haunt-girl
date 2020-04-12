class TopList < ApplicationRecord
  has_many :list_posts
  has_many :posts, through: :list_posts

  def posts_attributes=(post_attributes)
    post_attributes.values.each do |post_attribute|
    if post_attribute[:title] != ""
      post = Post.find_or_create_by(post_attribute)
      self.posts << post
    else
      return errors
    end
  end
end

end
