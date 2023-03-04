class SessionsController < ApplicationController
  def create
    user = User.find_by_username(params[:username])
    if user&.authenticate(params[:password])
      session[:id] = user.id
      session[:user_role] = user.user_role
      render json: { id: user.id, username: user.username, user_role: user.user_role }, status: :created
    else
      render json: { errors: ["Invalid username or password"] }, status: :unauthorized
    end
  end
  #&& session.include? :user_role

  def destroy
    if session.include? :id 
      session.delete :id
      session.delete :user_role
      head :no_content
    else
      render json: { errors: ["Unauthorized"] }, status: :unauthorized
    end
  end
end
