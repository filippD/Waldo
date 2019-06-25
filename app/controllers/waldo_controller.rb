class WaldoController < ApplicationController
  def index
  end

  def check
	x = params[:x].to_i
	y = params[:y].to_i
	if x <= 655 && x >= 575 && y >= 125 && y <= 195
		render json: 'true'
	else
		render json: 'false'
	end
  end
end
