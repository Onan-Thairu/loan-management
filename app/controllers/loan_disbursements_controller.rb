class LoanDisbursementsController < ApplicationController
  before_action :set_loan_disbursement, only: [:show, :update, :destroy]

  # GET /loan_disbursements
  def index
    @loan_disbursements = LoanDisbursement.all

    render json: @loan_disbursements
  end

  # GET /loan_disbursements/1
  def show
    render json: @loan_disbursement
  end

  # POST /loan_disbursements
  def create
    @loan_disbursement = LoanDisbursement.new(loan_disbursement_params)

    if @loan_disbursement.save
      render json: @loan_disbursement, status: :created, location: @loan_disbursement
    else
      render json: @loan_disbursement.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /loan_disbursements/1
  def update
    if @loan_disbursement.update(loan_disbursement_params)
      render json: @loan_disbursement
    else
      render json: @loan_disbursement.errors, status: :unprocessable_entity
    end
  end

  # DELETE /loan_disbursements/1
  def destroy
    @loan_disbursement.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_loan_disbursement
      @loan_disbursement = LoanDisbursement.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def loan_disbursement_params
      params.require(:loan_disbursement).permit(:loan_id, :disbursement_date, :disbursement_amount)
    end
end
