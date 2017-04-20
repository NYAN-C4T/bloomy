Rails.application.routes.draw do
 get 'index' => 'contents#index'
 root 'contents#index'
end
