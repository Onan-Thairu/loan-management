class LoanApplicationsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :loan_application_not_found
  # before_action :authenticate_user!
  before_action :require_field_credit_officer, only: [:create]
  before_action :require_supervisor, only: [:pending]

  # GET /loan_applications - for current supervisor
  def index
    loan_apps = LoanApplication.where(field_credit_officer_id: session[:id])
    render json: loan_apps, status: :ok
  end

  def all
    loan_apps = LoanApplication.all
    count = loan_apps.count
    render json: { count: count }, status: :ok
  end

  # GET /loan_applications/pending - all pending loan applications
  def pending
    loan_app = LoanApplication.where(status: :pending)
    render json: loan_app, status: :ok
  end

  # PUT /loan_applications/:id
  def update
    loan_app = LoanApplication.find(params[:id])

    if loan_app.update(loan_applications_params)
      render json: { message: "Loan Application Updated" }, status: :ok
    else
      render json: { errors: loan_app.errors.full_messages }, status: :unprocessable_entity
    end

  end

  # POST /loan_applications
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

  def require_supervisor
    unless current_user && current_user.supervisor?
      render json: { error: "Access denied" }, status: :forbidden
    end
  end

  def loan_application_not_found
    render json: { error: "Application Not Found" }, status: :not_found
  end

  def loan_applications_params
    params.permit(:customer_name, :customer_phone, :business_name, :business_address, :business_history, :field_credit_officer_id, :loan_amount, :interest_rate, :status)
  end
end
