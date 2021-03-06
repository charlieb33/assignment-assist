class CreateAssignments < ActiveRecord::Migration[6.0]
  def change
    create_table :assignments do |t|
      t.string :name
      t.text :description
      t.string :due_date
      t.references :course, null: false, foreign_key: true

      t.timestamps
    end
  end
end
