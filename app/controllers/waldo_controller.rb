class WaldoController < ApplicationController
  def index
  end
  
  def is_waldo
	x = params[:x].to_i
	y = params[:y].to_i
	if x <= 410 && x >= 360 && y >= 390 && y <= 490
		render json: 'true'
	else
		render json: 'false'
	end
  end
end
