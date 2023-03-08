class LoanDisbursementSerializer < ActiveModel::Serializer
  attributes :id, :disbursement_date, :disbursement_amount, :due_date
  has_one :loan
end
