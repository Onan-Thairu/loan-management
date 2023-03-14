class AddReferenceToReceipts < ActiveRecord::Migration[6.1]
  def change
    add_reference :receipts, :loan_application
  end
end
