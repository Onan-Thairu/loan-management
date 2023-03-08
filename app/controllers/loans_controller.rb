class LoansController < ApplicationController

  before_action :authenticate_user!
  before_action :require_supervisor, only: [:create]

  # GET /loans
  def index
    loans = Loan.where(status: :pending)
    render json: loans, status: :ok
  end

  # POST /loans
  def create
    new_loan = Loan.create(loan_params)

    if new_loan.valid?
      new_loan.save
      render json: new_loan, status: :created
    else
      render json: { errors: new_loan.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PUT /loans
  def update
    loan = Loan.find(params[:id])

    if loan.update(loan_params)
      render json: { message: "Loan Disbursed" }, status: :ok
    else
      render json: { errors: loan.errors.full_messages }, status: :unprocessable_entity
    end

  end


  private

    def require_supervisor
      unless current_user && current_user.supervisor?
        render json: { error: "Access denied" }, status: :forbidden
      end
    end

    # Only allow a list of trusted parameters through.
    def loan_params
      params.permit(:loan_application_id, :loan_amount, :interest_rate, :approved_by, :approval_date)
    end
end
