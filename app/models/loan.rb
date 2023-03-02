class Loan < ApplicationRecord
  belongs_to :loan_app
  has_many :loan_disbursements
end
