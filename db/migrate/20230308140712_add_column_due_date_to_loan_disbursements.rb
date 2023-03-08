class AddColumnDueDateToLoanDisbursements < ActiveRecord::Migration[6.1]
  def change
    add_column :loan_disbursements, :due_date, :date
  end
end
