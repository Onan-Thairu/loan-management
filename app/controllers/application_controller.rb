class ApplicationController < ActionController::API
  include ActionController::Cookies

  # before_action :authenticate_user!

  private

  def authenticate_user!
    unless current_user
      render json: { error: "You must be logged in to access this page." }, status: :unauthorized
    end
  end

  def current_user
    if session[:id] && session[:user_role]
      @current_user ||= User.find_by(id: session[:id], user_role: session[:user_role])
    end
  end
end
