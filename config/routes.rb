Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  
  resources :users do
    resources :courses do
      resources :assignments
    end
  end
end
