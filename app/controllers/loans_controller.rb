class LoansController < ApplicationController

  before_action :authenticate_user!
  before_action :require_supervisor, only: [:approve_loan, :reject_loan]

  def approve_loan
    # code to approve loan
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
      params.permit(:loan_app_id, :loan_amount, :interest_rate, :approved_by, :approval_date)
    end
end
