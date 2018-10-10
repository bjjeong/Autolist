class CreateVehicles < ActiveRecord::Migration[5.2]
  def change
    create_table :vehicles do |t|
      t.string :vin, null: false
      t.integer :views, null: false
      t.timestamps
    end
    add_index :vehicles, :vin, unique: true
  end
end
