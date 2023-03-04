class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :user_role
end
