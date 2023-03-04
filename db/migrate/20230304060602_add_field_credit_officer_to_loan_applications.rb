class AddFieldCreditOfficerToLoanApplications < ActiveRecord::Migration[6.1]
  def change
    add_reference :loan_applications, :field_credit_officer, foreign_key: { to_table: :users }
  end
end
