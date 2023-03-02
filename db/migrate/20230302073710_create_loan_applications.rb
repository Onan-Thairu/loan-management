class CreateLoanApplications < ActiveRecord::Migration[6.1]
  def change
    create_table :loan_applications do |t|
      t.string :customer_name
      t.string :customer_phone
      t.string :business_name
      t.string :business_address
      t.string :business_history

      t.timestamps
    end
  end
end
