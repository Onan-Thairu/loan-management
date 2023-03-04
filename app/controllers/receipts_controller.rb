class ReceiptsController < ApplicationController

  # GET /receipts
  def index
    @receipts = Receipt.all
    render json: @receipts
  end


  # POST /receipts
  def create
    @receipt = Receipt.new(receipt_params)

    if @receipt.save
      render json: @receipt, status: :created, location: @receipt
    else
      render json: @receipt.errors, status: :unprocessable_entity
    end
  end

  private

    # Only allow a list of trusted parameters through.
    def receipt_params
      params.require(:receipt).permit(:loan_app_id, :receipt_date, :receipt_amount)
    end
end
