class CreateReservations < ActiveRecord::Migration[5.1]
  def change
    create_table :reservations do |t|
      t.string :time
      t.string :date
      t.integer :party
      t.text :notes
      t.object :user
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
