class RemoveReferenceLoanAppIdFromReceipt < ActiveRecord::Migration[6.1]
  def change
    remove_column :receipts, :loan_app_id
  end
end
