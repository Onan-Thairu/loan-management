Rails.application.routes.draw do
  
  get 'sessions/create'
  get 'sessions/destroy'
  resources :receipts, only: [:index]
  resources :loan_disbursements, only: [:index]
  resources :loans, only: [:index]
  resources :loan_applications, only: [:index, :create]
  resources :users, only: [:index, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # Check if signed in
  get "/me", to: "users#show"

  # Log in
  post "/login", to: "sessions#create"

  # Log out
  delete "/logout", to: "sessions#destroy"

  # Loan Applications
  get "/loan_applications/all", to: "loan_applications#all"
end
