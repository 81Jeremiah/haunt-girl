class AddUsernameAndPassowrdToAdmin < ActiveRecord::Migration[5.2]
  def change
    add_column :admins, :username, :string
    add_column :admins, :password_digest, :string
  end
end
