class LoanApplicationsController < ApplicationController
  # before_action :authenticate_user!
  # before_action :require_field_credit_officer, only: [:create :approve_loan, :reject_loan]

  def index
    loan_apps = LoanApplication.where(field_credit_officer_id: session[:id])
    render json: loan_apps
  end

  def create
    loan_app = LoanApplication.create(loan_applications_params)
    
    if loan_app.valid?
      loan_app.save
      render json: loan_app, status: :created
    else
      render json: { errors: loan_app.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def require_field_credit_officer
    unless current_user && current_user.field_credit_officer?
      render json: { error: "Access denied" }, status: :forbidden
    end
  end

  def loan_applications_params
    params.permit(:customer_name, :customer_phone, :business_name, :business_address, :business_history, :field_credit_officer_id)
  end
end
