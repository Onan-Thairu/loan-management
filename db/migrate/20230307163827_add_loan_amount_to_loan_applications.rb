class AddLoanAmountToLoanApplications < ActiveRecord::Migration[6.1]
  def change
    add_column :loan_applications, :loan_amount, :integer
  end
end
