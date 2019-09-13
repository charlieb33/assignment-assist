Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/users/verify', to: 'users#verify'

  resources :users do
    resources :courses do
      resources :assignments
    end
  end
end
