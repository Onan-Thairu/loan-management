class LoanDisbursementsController < ApplicationController
  before_action :authenticate_user!
  before_action :require_office_admin, only: [:index, :create]

  # GET /loan_disbursements
  def index
    loan_disbursements = LoanDisbursement.all
    render json: loan_disbursements, status: :ok
  end


  # POST /loan_disbursements
  def create
    loan_disbursement = LoanDisbursement.create(loan_disbursement_params)

    if loan_disbursement.valid?
      loan_disbursement.save
      render json: loan_disbursement, status: :created
    else
      render json: { errors: loan_disbursement.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /loan_disbursements/1




  private

    def require_office_admin
      unless current_user && current_user.office_admin?
        render json: { error: "Access denied" }, status: :forbidden
      end
    end

    # Only allow a list of trusted parameters through.
    def loan_disbursement_params
      params.permit(:loan_id, :disbursement_date, :disbursement_amount, :due_date)
    end
end
