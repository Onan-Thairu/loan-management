class LoanApplicationSerializer < ActiveModel::Serializer
  attributes :id, :customer_name, :customer_phone, :business_name, :business_address, :business_history
end
