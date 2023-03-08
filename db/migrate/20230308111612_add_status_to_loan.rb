class AddStatusToLoan < ActiveRecord::Migration[6.1]
  def change
    add_column :loans, :status, :integer
  end
end
