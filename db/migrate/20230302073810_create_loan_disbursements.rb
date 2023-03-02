class CreateLoanDisbursements < ActiveRecord::Migration[6.1]
  def change
    create_table :loan_disbursements do |t|
      t.references :loan, null: false, foreign_key: true
      t.date :disbursement_date
      t.integer :disbursement_amount

      t.timestamps
    end
  end
end
