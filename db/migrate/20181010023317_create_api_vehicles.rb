class CreateApiVehicles < ActiveRecord::Migration[5.2]
  def change
    create_table :api_vehicles do |t|

      t.timestamps
    end
  end
end
