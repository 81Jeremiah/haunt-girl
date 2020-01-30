class Category < ApplicationRecord
  has_many :posts

  accepts_nested_attributes_for :posts

  def self.find_category_id(param)
    if param == 'escaperooms'
      1
    elsif param == 'haunts'
      2
    elsif param == 'oddities'
      3
    end
  end

end
