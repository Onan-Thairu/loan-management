class Loan < ApplicationRecord
  enum status: [:pending, :disbursed], _default: :pending

  belongs_to :loan_application

  has_many :loan_disbursements
end
