class LoanSerializer < ActiveModel::Serializer
  attributes :id, :loan_amount, :interest_rate, :approved_by, :status, :approval_date
  has_one :loan_application
end
