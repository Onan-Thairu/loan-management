class ReceiptsController < ApplicationController

  # GET /receipts
  def index
    @receipts = Receipt.all
    render json: @receipts
  end


  # POST /receipts

  def create
    new_receipt = Receipt.create(receipt_params)

    if new_receipt.valid?
      new_receipt.save
      render json: new_receipt, status: :created
    else
      render json: { errors: new_receipt.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

    # Only allow a list of trusted parameters through.
    def receipt_params
      params.permit(:loan_app_id, :receipt_date, :receipt_amount)
    end
end
