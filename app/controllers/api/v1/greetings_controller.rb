class Api::V1::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all
    # render json: @greetings, status: :ok

    render json: @greetings.sample, status: :ok
  end
end
