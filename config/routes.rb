Rails.application.routes.draw do
  get "home/index"
  get "home/get_hands", to: "home#get_hands", as: "get_hands"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
