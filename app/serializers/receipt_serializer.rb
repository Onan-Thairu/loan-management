class ReceiptSerializer < ActiveModel::Serializer
  attributes :id, :receipt_date, :receipt_amount
  has_one :loan_app
end
