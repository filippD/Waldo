class ScoresController < ApplicationController

def create
    @score = Score.new(score_params)
    if !@score.save
      flash[:error] = "Name can't be blank"
    end
    redirect_to scores_path
  end

  def index
  	@scores = Score.order(score: :asc).limit(5)
    @user_score = Score.last
  end

  private

  def score_params
    params.require(:score).permit(:score, :user)
  end
end
