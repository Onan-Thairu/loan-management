class LoanApplication < ApplicationRecord
  enum status: [:pending, :approved, :rejected], _default: :pending

  has_one :loan
  belongs_to :field_credit_officer, class_name: "User"
end
