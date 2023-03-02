class CreateReceipts < ActiveRecord::Migration[6.1]
  def change
    create_table :receipts do |t|
      t.references :loan_app, null: false, foreign_key: true
      t.date :receipt_date
      t.integer :receipt_amount

      t.timestamps
    end
  end
end
