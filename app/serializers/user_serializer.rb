class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :user_role
end
