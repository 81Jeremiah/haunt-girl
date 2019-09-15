class CreateCountries < ActiveRecord::Migration[5.2]
  def change
    create_table :countries do |t|
      t.string :name, default: "United States"
      t.string :country_code, default: "USA"

      t.timestamps
    end
  end
end
