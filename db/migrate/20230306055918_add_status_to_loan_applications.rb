class AddStatusToLoanApplications < ActiveRecord::Migration[6.1]
  def change
    add_column :loan_applications, :status, :integer
  end
end
