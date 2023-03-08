class Loan < ApplicationRecord
  belongs_to :loan_application

  has_many :loan_disbursements
end
