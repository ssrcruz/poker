class HomeController < ApplicationController
include HomeHelper

  def index
  end

  def get_hands
    head :ok
    @hands = open
    @hands.to_json
  end
end
