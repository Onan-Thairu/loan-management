class UsersController < ApplicationController
  # before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    users = User.all
    render json: users
  end

  # GET /users/1

  # Check if user is logged in.
  def show
    user = User.find_by(id: session[:id])
    if user
      render json: user, status: :created
    else
      render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

  # POST /users
  def create
    # puts params.inspect
    user = User.create(user_params)

    if user.valid?
      session[:id] = user.id
      session[:user_role] = user.user_role

      render json: { id: user.id, username: user.username, user_role: user.user_role }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:username, :password, :user_role)
    end
end
