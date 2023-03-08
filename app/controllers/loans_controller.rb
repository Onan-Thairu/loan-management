class LoansController < ApplicationController

  before_action :authenticate_user!
  before_action :require_supervisor, only: [:create, :reject_loan]

  def index
    loans = Loan.all
    render json: loans, status: :ok
  end

  def create
    new_loan = Loan.create(loan_params)

    if new_loan.valid?
      new_loan.save
      render json: new_loan, status: :created
    else
      render json: { errors: new_loan.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def reject_loan
    # code to reject loan
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
