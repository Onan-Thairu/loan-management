class CreateLoans < ActiveRecord::Migration[6.1]
  def change
    create_table :loans do |t|
      t.references :loan_app, null: false, foreign_key: true
      t.integer :loan_amount
      t.float :interest_rate
      t.string :approved_by
      t.date :approval_date

      t.timestamps
    end
  end
end
