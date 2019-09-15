class AddCompanyWebsiteColumnToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :company_website, :string

  end
end
