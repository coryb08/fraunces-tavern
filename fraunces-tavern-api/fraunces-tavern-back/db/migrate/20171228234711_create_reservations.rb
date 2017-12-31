class CreateReservations < ActiveRecord::Migration[5.1]
  def change
    create_table :reservations do |t|
      t.string :string
      t.string :string
      t.text :notes
      t.references :user, index: true

      t.timestamps
    end
  end
end
