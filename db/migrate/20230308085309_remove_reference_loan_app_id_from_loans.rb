class RemoveReferenceLoanAppIdFromLoans < ActiveRecord::Migration[6.1]
  def change
    remove_column :loans, :loan_app_id
  end
end
