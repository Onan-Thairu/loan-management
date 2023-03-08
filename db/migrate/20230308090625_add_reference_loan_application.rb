class AddReferenceLoanApplication < ActiveRecord::Migration[6.1]
  def change
    add_reference :loans, :loan_application
  end
end
