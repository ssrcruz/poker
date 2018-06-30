class HomeController < ApplicationController
include HomeHelper

  def index
  end

  def get_hands
    @hands = open
    @hands = { "hands": @hands }
    render status: :ok, json: @hands
  end
end
