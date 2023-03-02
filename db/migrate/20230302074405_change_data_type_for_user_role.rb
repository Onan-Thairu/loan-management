class ChangeDataTypeForUserRole < ActiveRecord::Migration[6.1]
  def change
    change_column(:users, :user_role, :integer)
  end
end
