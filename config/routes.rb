Rails.application.routes.draw do
  
  get 'sessions/create'
  get 'sessions/destroy'
  resources :receipts, only: [:index]
  resources :loan_disbursements, only: [:index, :create]
  resources :loans, only: [:index, :create, :update]
  resources :loan_applications, only: [:index, :create, :update]
  resources :users, only: [:index, :create]

  # Check if signed in
  get "/me", to: "users#show"

  # Log in
  post "/login", to: "sessions#create"

  # Log out
  delete "/logout", to: "sessions#destroy"

  # Loan Applications
  get "/loan_applications/pending", to: "loan_applications#pending"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
