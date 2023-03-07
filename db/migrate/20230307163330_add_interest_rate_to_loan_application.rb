class AddInterestRateToLoanApplication < ActiveRecord::Migration[6.1]
  def change
    add_column :loan_applications, :interest_rate, :integer
  end
end
