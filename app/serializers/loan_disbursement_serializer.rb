class LoanDisbursementSerializer < ActiveModel::Serializer
  attributes :id, :disbursement_date, :disbursement_amount
  has_one :loan
end
