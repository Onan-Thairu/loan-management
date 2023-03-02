class LoanApplication < ApplicationRecord
  has_one :loan
  belongs_to :field_credit_officer, class_name: "User"
end
