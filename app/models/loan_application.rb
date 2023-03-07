class LoanApplication < ApplicationRecord
  enum status: [:pending, :approved, :rejected], _default: :pending

  validates :loan_amount, numericality: { greater_than_or_equal_to: 7000 }

  has_one :loan
  belongs_to :field_credit_officer, class_name: "User"
end
