class TopListPost < ApplicationRecord
  belongs_to :list, optional: true
  belongs_to :post, optional: true
end
