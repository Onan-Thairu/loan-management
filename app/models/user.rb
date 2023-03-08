class User < ApplicationRecord
  enum user_role: [:field_credit_officer, :supervisor, :loan_applicant, :office_admin], _default: :loan_applicant

  has_secure_password

  validates :username, presence: true, uniqueness: true

  has_many :loan_applications, through: :field_credit_officers, dependent: :destroy
  has_many :loans, foreign_key: "approved_by", dependent: :destroy
end
